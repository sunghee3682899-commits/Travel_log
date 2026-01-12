import os
import uuid
import math

from flask import Blueprint
from datetime import timedelta

bp = Blueprint('mytravellog', __name__)

@bp.route('/mytravellog', methods=['GET'])
def mytravellog_list():

    return