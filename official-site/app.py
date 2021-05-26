# Import dependencies.
from flask import Flask, render_template, redirect, url_for, jsonify, request
from flask_cors import CORS

# Create an instance of Flask.
app = Flask(__name__)
CORS(app)

# Home route that displays index.html content.
@app.route("/")
def index():
    return render_template("index.html") 

# Do the thing. (:
if __name__ == "__main__":
    app.run(debug=True)
