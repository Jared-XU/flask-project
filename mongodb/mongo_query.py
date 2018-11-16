from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/', username='admin', password='123456')

# data base name : 'test-database-1'
mydb = client['test-database-1']

import pprint

for record in mydb.table_turnover.find():
    pprint.pprint(record)

res = mydb.table_turnover.find({"time":{"$gte": "2018-11-16 18:52:51.294"}})
print(res.__dict__)