from pymongo import MongoClient
import time
client = MongoClient('mongodb://localhost:27017/', username='admin', password='123456')

# data base name : 'test-database-1'
mydb = client['test-database-1']

import datetime

turnover_lst = ["43", "49", "55", "59", "62", "47", "48"]

for to in turnover_lst:
        record = { 
        "turnover": to,
        "pipeline_name": "server2.9",
        "time": datetime.datetime.utcnow().isoformat()
        }
        result = mydb.table_turnover.insert_one(record)
        print(result.inserted_id)
        time.sleep(2)

