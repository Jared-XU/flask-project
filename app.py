from flask import Flask, Markup, render_template, jsonify, request
from random import sample
from flask_pymongo import PyMongo
import pprint, ast

app = Flask(__name__)
app.config['MONGO_URI'] = "mongodb://admin:123456@localhost:27017/test-database-1?authSource=admin"
# app.config['MONGODB_SETTINGS'] = {
#     'db': 'test-database-1',
#     'host': 'localhost',
#     'port': 27017,
#     'username': 'admin',
#     'password': '123456',
#     'authentication_source': 'admin'
# }
mongo=PyMongo(app)

@app.route('/line')
def line():
    line_labels=labels
    print(line_labels)
    line_values=values
    return render_template('line_chart.html', title='Connections Pipeline Status', max=17000, labels=line_labels, values=line_values)

@app.route('/turnover2.9')
def turnover_2_9():    
    turnover_lst = []
    label_lst = []
    for record in mongo.db.table_turnover.find():
        turnover_lst.append(ast.literal_eval(record['turnover']))
        label_lst.append(record['time'][0:-7])
    print(label_lst)
    return jsonify({'turnover': turnover_lst, 'labels': label_lst})

@app.route('/turnover2.8')
def turnover_2_8():
    return jsonify({'turnover': sample(range(40, 60), 7)})


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/deploy')
def deploy():
    return render_template('deploy.html')

@app.route('/mttr')
def mttr():
    return render_template('mttr.html')

@app.route('/build')
def build():
    return render_template('build.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
