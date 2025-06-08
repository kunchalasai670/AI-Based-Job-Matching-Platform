from flask import Blueprint, jsonify, request

routes=Blueprint("main", __name__)

# @routes.route('/',methods=["GET"])
# def home():
#     return "Welcome to home"
# from flask import Blueprint, jsonify

from flask import Blueprint, jsonify

routes = Blueprint('routes', __name__)

@routes.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Welcome to the MatchWise API",
        "endpoints": ["/jobs"]
    })

@routes.route('/jobs', methods=['GET'])
def get_jobs():
    jobs = [
        {"id": 1, "title": "Software Engineer", "company": "TechCorp"},
        {"id": 2, "title": "Data Analyst", "company": "DataGen"},
        {"id": 3, "title": "UX Designer", "company": "Creative Inc."}
    ]
    return jsonify(jobs)
