from marshmallow import Schema, fields

class UserCreateSchema(Schema):
    emil = fields.Email(required=True)
    userid = fields.Str(required=True)
    password = fields.Str(required=True, load_only=True)
    username = fields.Str(required=True)
    gender = fields.Str(required=True)
    phone = fields.Str(required=True)
    # profile_image = fields.Str(required=True)