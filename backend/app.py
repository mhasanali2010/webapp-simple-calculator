from flask import Flask
from math_evaluate.evaluator import evaluate

app = Flask(__name__)


@app.route('/eval', methods=['POST'])
def evalu():
    ...
