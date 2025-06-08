# from flask import Flask

# def create_app():
#     app = Flask(__name__)
#     from . import routes
#     app.register_blueprint(routes.routes)

#     return app
from flask import Flask
from .routes import routes

def create_app():
    app = Flask(__name__)
    app.register_blueprint(routes)  # Register the routes
    return app
