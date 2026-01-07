
from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from main.models import User, Places
bp = Blueprint("mypage", __name__)
@bp.route("/mypage", methods=["GET"])
@jwt_required()
def mypage():
    userid = get_jwt_identity()

    user = User.query.get(userid)
    if not user:
        return jsonify({"message":"회원이 아닙니다."})
    return jsonify({
            "id":user.id,
            "userid":user.userid,
            "username":user.username,
            "gender":user.gender,
            "email":user.email,
            "phone":user.phone,
            "user_img": f"/static/user_img/{user.profile_image}",
        }), 200

ALLOWED_EXT = {'png', 'jpg', 'jpeg', 'gif'}

@bp.route("/mypagemodify", methods=["POST","GET"])
@jwt_required()
def mypagemodify():
    userid = get_jwt_identity()
    user = User.query.get(userid)
    if not user:
        return jsonify({"message": "회원이 아닙니다."})
    return jsonify({
        "id":user.id,
        "userid":user.userid,
        "username": user.username,
        "gender": user.gender,
        "email": user.email,
        "phone": user.phone,
        "user_img": f"/static/user_img/{user.profile_image}",

    })