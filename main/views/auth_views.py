from dataclasses import field
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from main import db
from main.models import User
from main.schemas.user_schema import UserCreateSchema
from main.schemas.login_schema import LoginSchema


bp = Blueprint('auth', __name__)
user = UserCreateSchema()

@bp.route("/signUp", methods=["GET","POST"])
def signUp():
    data = requset.form.to_dict()
    errors = user.validate(data)

    if errors:
        return jsonify({
            'message' : "입력값 오류",
            'errors' : errors
        })
    userid = data['userid']
    password = data['password']
    gender = data['gender']
    email = data['email']
    username = data['username']
    phone = data['phone']

    if User.query.filter_by(userid=userid).first():
        return jsonify({'message': '이미 존재하는  아이디'})
    if User.query.filter_by(username=username).first():
        return jsonify({'message': '이미 존재하는 닉네임'})
    if User.query.filter_by(email=email).first():
        return jsonify({'message': '이미 존재하는 이메일'})
    if User.query.filter_by(phone=phone).first():
        return jsonify({'message': '이미 존재하는 전화번호'})

    hashed_pw = generate_password_hash(password)

    image = request.files.get("profile_image")

    filename = secure_filename(image.filename)
    ext = filename.rsplit('.', 1)[-1]

    ALLOWED_EXT = {'png', 'jpg', 'jpeg', 'gif'}
    if ext not in ALLOWED_EXT:
        return jsonify({"message": "사용불가 이미지입니다."})
    new_filename = f"{uuid.uuid4()}.{ext}"

    upload_path = os.path.join(
        current_app.root_path,
        "static/user_img",
        new_filename
    )
    image.save(upload_path)
    user = User(
        userid=userid,
        username=username,
        password=hashed_pw,
        gender=gender,
        phone=phone,
        email=email,
    )

    db.session.add(user)
    db.session.commit()


    return {'message': '회원 가입 성공' },201


@bp.route("/check", methods=["POST"])
def check_duplicate():
    data = request.get_json()

    field = data.get('field')
    value = data.get('value')

    if not field or not value:
        return jsonify({'message' : '잘못된 요청'}), 400

    field_map = {
        'userid' : User.userid,
        'username' : User.username,
        'email' : User.email,
        'phone' : User.phone,
    }


    if field not in field_map:
        return jsonify({'message' : '허용되지 않은 필드'})

    exists = User.query.filter(field_map[field] == value).first()

    return jsonify({'available' : False if exists else True})