from flask import Flask

app = Flask(__name__)


@app.route('/eval', methods=['POST'])
def evaluate():
    ...
