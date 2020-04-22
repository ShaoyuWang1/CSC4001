import requests as r
import datetime
# test
base = 'http://127.0.0.1:8000/'
def testgetOneJob():
    res = r.post(base + 'getOneJob/', {"job_id":1})
    print(res.text)
def testPostOneJob():
    paras = {
        "uid":1,
        "title": 'titlename',
        "abstract":"absfwdadsad",
        "content":"asdasda",
        "date":datetime.date.today(),
        "ddl":datetime.date.today(),
        "fee":1111.11

    }
    res = r.post(base + 'postOneJob/', paras)
    print(res.text)

# testgetOneJob()
testPostOneJob()