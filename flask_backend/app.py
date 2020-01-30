from flask import Flask, render_template, url_for, flash, redirect,request


app = Flask(__name__)

app.config["SECRET_KEY"] = "bf9f39c4cdd1288f6ba5ecd05c0ae93288e01da8a09b35a50"

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html",token = "lets see if this works")


if __name__ == "__main__":
    app.run(port = 5000 ,debug = true)