import requests as r
import datetime
# test
base = 'http://127.0.0.1:8000/'
def testgetOneJob():
    res = r.post(base + 'getOneJob/', {"job_id":1})
    print(res.text)


def testdeleteOneJob():
    res = r.post(base + 'deleteOneJob/', {"job_id": 1})
    print(res.text)
def testPostOneJob():

    paras = {
        "uid":1,
        "title": 'abbca',
        "abstract":"absfwdadsad",
        "content":"asdasda",
        "date":datetime.date.today(),
        "ddl":datetime.date.today(),
        "fee":10571

    }
    res = r.post(base + 'postOneJob/', paras)
    print(res.text)

def testPostOneUser():
    paras = {
        'username':'wsy',
        'password':'123456'

    }
    res = r.post(base + 'postOneUser/', paras)
    print(res.text)



def testgetOneUser():
    res = r.post(base + 'getOneUser/', {"id": 1})
    print(res)
    print(res.text)


def testdeleteOneUser():
    res = r.post(base + 'deleteOneUser/', {"id": 1})
    print(res.text)

# testgetOneJob()
# testPostOneJob()
# testPostOneUser()
# testdeleteOneJob()
# testgetOneUser()
# testdeleteOneUser()