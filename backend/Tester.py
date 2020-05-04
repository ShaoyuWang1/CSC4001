import requests as r
import datetime
# test
base = 'http://127.0.0.1:8000/'
def testlogin():
    res = r.post(base + 'login/', {"user_name": 'wsy',"password":"123456","identifycode":"1222"})
    print(res)
    print(res.text)

# testlogin() #done 5.4

def testRegisterOneUser():
    paras = {
        'user_name':'wsy',
        'password':'123456',
        'email':"1111@qq.com",

    }
    res = r.post(base + 'register/', paras)
    print(res.text)

# testRegisterOneUser()

def testUpdate():
    paras = {
        'uid':1,
        'password':'123456',

        'sex':"male",
        'email':"1111@qq.com",
        'age':21,
        'avatar':"12312",


    }
    res = r.post(base + 'updateUserInfo/', paras)
    print(res.text)
# testUpdate()

def testgetOneJob():
    res = r.post(base + 'getOneJob/', {"job_id":3})
    print(res.text)
# testgetOneJob()

# def testdeleteOneJob():
#     res = r.post(base + 'deleteOneJob/', {"job_id": 1})
#     print(res.text)

def testPostOneJob():

    paras = {
        'job_id':31111,
        'translated_title':'哈哈哈哈',
        'translated_content':'嘿嘿嘿'

    }
    res = r.post(base + 'postOneJob/', paras)
    print(res.text)
testPostOneJob()






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