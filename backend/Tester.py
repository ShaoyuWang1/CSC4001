import requests as r
import datetime
# test
base = 'http://127.0.0.1:8000/'
def testlogin():
    res = r.post(base + 'login/', {"user_name": 'w',"password":"123456","identifycode":"1222"})
    print(res)
    print(res.text)

# testlogin() #done 5.4

def testRegisterOneUser():
    paras = {
        'user_name':'wy',
        'password':'123456',
        'sex':"male",
        'email':"1111@qq.com",
        'age':21


    }
    res = r.post(base + 'register/', paras)
    print(res.text)

# testRegisterOneUser()

def testUpdate():
    paras = {
        'uid':1,
        'password':'123456',

        'sex':"emale",
        'email':"1111@qq.com",
        'age':21


    }
    res = r.post(base + 'updateUserInfo/', paras)
    print(res.text)
testUpdate()

def testgetOneJob():
    res = r.post(base + 'getOneJob/', {"job_id":3})
    print(res.text)


# def testdeleteOneJob():
#     res = r.post(base + 'deleteOneJob/', {"job_id": 1})
#     print(res.text)

def testPostOneJob():

    paras = {
        "user_name":'wsy',
        "title": '0503,09:11',
        "abstract":"absfwdadsad",
        "content":"asdasda",
        "date":datetime.date.today(),
        "ddl":datetime.date.today(),
        "fee":10571

    }
    res = r.post(base + 'postOneJob/', paras)
    print(res.text)







def testgetInfo():
    res = r.post(base + 'getAllUserInfo/', {"user_name": 'w'})

    print(res.text)



# def testdeleteOneUser():
#     res = r.post(base + 'deleteOneUser/', {"id": 1})
#     print(res.text)

# testgetOneJob() # done 5.2
# testPostOneJob() # done 5.2


#

# testgetInfo() done 5.3

# testModify()