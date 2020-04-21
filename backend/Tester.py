import requests as r
# test
base = 'http://127.0.0.1:8000/'
def testgetOneJob():
    res = r.post(base + 'getOneJob/', {"job_id":1})
    print(res.text)

testgetOneJob()