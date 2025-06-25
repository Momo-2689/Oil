from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/flow_rate')
def flow_rate():
    process = request.args.get('process', 'A')
    process_data = {
        "A": {"station1_to_2": random.randint(2, 5), "station2_to_3": random.randint(3, 6)},
        "B": {"station1_to_2": random.randint(5, 9), "station2_to_3": random.randint(4, 7)},
        "C": {"station1_to_2": random.randint(1, 3), "station2_to_3": random.randint(1, 3)},
    }
    return jsonify(process_data.get(process.upper(), process_data["A"]))

if __name__ == '__main__':
    app.run(debug=True)
