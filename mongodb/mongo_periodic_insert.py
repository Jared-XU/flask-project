from pymongo import MongoClient
import time
from random import randint

client = MongoClient('mongodb://localhost:27017/', username='admin', password='123456')

# data base name : 'test-database-1'
mydb = client['test-database-1']

import datetime

for i in range(100000000):
        to = str(randint(45, 65))
        record = { 
            "turnover": to,
            "pipeline_name": "server2.9",
            "time": datetime.datetime.utcnow().isoformat()
        }
        result = mydb.table_turnover.insert_one(record)
        print(result.inserted_id)
        time.sleep(5)

