import requests as r
import datetime
# test
base = 'http://127.0.0.1:8000/'
def testgetOneJob():
    res = r.post(base + 'getOneJob/', {"job_id":3})
    print(res.text)


# def testdeleteOneJob():
#     res = r.post(base + 'deleteOneJob/', {"job_id": 1})
#     print(res.text)

def testPostOneJob():

    paras = {
        "user_name":'wsy',
        "title": '0503,00:49',
        "abstract":"absfwdadsad",
        "content":"asdasda",
        "date":datetime.date.today(),
        "ddl":datetime.date.today(),
        "fee":10571

    }
    res = r.post(base + 'postOneJob/', paras)
    print(res.text)

def testRegisterOneUser():
    paras = {
        'user_name':'z',
        'password':'123456',
        'sex':"male",
        'email':"2222@qq.com",
        'age':21


    }
    res = r.post(base + 'registerOneUser/', paras)
    print(res.text)



def testlogin():
    res = r.post(base + 'login/', {"user_name": 'wsy',"password":"123456"})
    print(res)
    print(res.text)


def testgetInfo():
    res = r.post(base + 'getAllUserInfo/', {"user_name": 'w'})

    print(res.text)

def testModify():
    paras = {
        'user_name':'ws',
        'password':'123456',
        'sex':"female",
        'email':"2221@qq.com",
        'age':21


    }
    res = r.post(base + 'modifyUserInfo/', paras)
    print(res.text)

# def testdeleteOneUser():
#     res = r.post(base + 'deleteOneUser/', {"id": 1})
#     print(res.text)

# testgetOneJob() # done 5.2
# testPostOneJob() # done 5.2
# testRegisterOneUser()

#
# testlogin() #done 5.2
# testgetInfo() done 5.3

testModify()