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
# testPostOneJob()
def testCancelOneJob():
    paras = {'job_id' : 1 }
    res = r.post(base+'cancelOneJob/',paras)
    print(res.text)
# testCancelOneJob()

def testGetallJobs():
    paras = {
        'user_id':2,
    }
    res = r.post(base + 'getAllJobs/', paras)
    print(res.text)
# testGetallJobs()

def testCompleteJob():

    paras = {
        "user_id": 1,
        "job_id": 4
    }
    res = r.post(base + 'completeOneJob/', paras)
    print(res.text)
# testCompleteJob()

def testGetAllOrders():
    res = r.post(base + 'getAllOrders/')
    print(res.text)
# testGetAllOrders()

def testGetPostedOrders():
    paras = {
        'user_id':1,

    }
    res = r.post(base + 'getPostedOrders/', paras)
    print(res.text)
# testGetPostedOrders()



def testCreateOrder():
    paras = {
        'uid':2,
        'title':'15:14',
        'ori_lang':'EN',
        'ore_lang':'CN',
        'content': 'vvvvvvvvvv',
        'abstract': 'bbbbbbbbb',
        "ddl":"2020-05-04 21:28:40",
        "fee":10,
        "tags":"sport;'abc'"
    }
    res = r.post(base + 'createAnOrder/', paras)
    print(res.text)

# testCreateOrder()

def testCancelOneOrder():
    res = r.post(base + 'cancelOneOrder/', {'order_id':1})
    print(res.text)
# testCancelOneOrder()

def testTakeOneOrder():
    paras = {
        "uid":1,
        "oid":1
    }
    res = r.post(base + 'takeOneOrder/', paras)
    print(res.text)
# testTakeOneOrder()

def testCompleteOrder():
    paras = {
        "uid": 1,
        "oid": 16
    }
    res = r.post(base + 'completeOneOrder/', paras)
    print(res.text)

# testCompleteOrder()

def testCheckTranslatedText():
    paras = {
        "uid": 10,
        "oid": 7
    }
    res = r.post(base + 'checkTranslatedText/', paras)
    print(res.text)


# testCheckTranslatedText()



def testgetInfo():
    res = r.post(base + 'getAllUserInfo/', {"user_name": 'w'})

    print(res.text)



# testlogin()
# testGetallJobs()


# def testdeleteOneUser():
#     res = r.post(base + 'deleteOneUser/', {"id": 1})
#     print(res.text)

# testgetOneJob() # done 5.2
# testPostOneJob() # done 5.2


#

# testgetInfo() done 5.3

# testModify()