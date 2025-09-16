from flask import Flask, request, jsonify
from flask_cors import CORS
from math_evaluate.evaluator import evaluate

app = Flask(__name__)
CORS(app)


@app.route('/eval', methods=['POST'])
def evalu():
    data = request.get_json()
    expr = data['expression']

    return jsonify({"result": evaluate(expr)})


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=True)
