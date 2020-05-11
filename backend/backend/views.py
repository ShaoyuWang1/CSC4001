from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
import json

#
from .models import Jobs
from .models import User
from .models import Orders


# Create your views here.
@csrf_exempt
def registerOneUser(request):
    user_name = request.POST.get('user_name')
    email = request.POST.get("email")
    password = request.POST.get('password')

    user_list = User.objects.filter(user_name=user_name)

    try:
        one_user = user_list[0]
    except:
        one_user = False

    if one_user:
        return JsonResponse({"code": 200, "msg": 'register, the account already exists', "status_code": 1})

    user_list = User.objects.filter(email=email)

    try:
        one_user = user_list[0]
    except:
        one_user = False

    if one_user:
        return JsonResponse({"code": 200, "msg": 'register, the account already exists', "status_code": 1})

    User.objects.create(user_name=user_name, password=password, email=email)
    return JsonResponse({"code": 200, "msg": 'register successfully', "status_code": 0})


@csrf_exempt
def login(request):
    # print(request.POST)
    user_name = request.POST.get('user_name')
    password = request.POST.get('password')
    user_list = User.objects.filter(user_name=user_name)
    try:
        one_user = user_list[0]
    except:
        one_user = False

    if one_user:

        if password == one_user.password:  # password == one_user.password
            user_dict = {
                'uid': one_user.uid,
                'sex': one_user.sex,
                'age': one_user.age,
                'password': one_user.password,
                'user_name': one_user.user_name,
                'email': one_user.email,
                'avatar': one_user.avatar,
                'balance': one_user.balance,

            }

            return JsonResponse({"code": 200, "msg": 'login success', "status_code": 0, "user": user_dict})
        else:
            return JsonResponse({"code": 200, "msg": 'login failed, wrong password', "status_code": 1})

    else:
        return JsonResponse({"code": 200, "msg": 'login failed, no such user', "status_code": 1})

@csrf_exempt
def getUserBalance(request):
    uid = request.POST.get('uid')
    user_list = User.objects.filter(uid=uid)
    try:
        one_user = user_list[0]
        return JsonResponse({"code": 200, 'balance': one_user.balance, "status_code": 0})
    except:
        return JsonResponse({"code": 200, 'balance': 0, 'msg': "error in balance retrieving", "status_code": 1})

@csrf_exempt
def updateUserInfo(request):
    uid = request.POST.get('uid')
    password = request.POST.get('password')
    email = request.POST.get('email')

    user_list = User.objects.filter(uid=uid)

    try:
        one_user = user_list[0]
    except:
        one_user = False

    if one_user:

        if password == one_user.password:  # password == one_user.password
            one_user.sex = request.POST.get('sex', one_user.sex)
            one_user.age = request.POST.get('age', one_user.age)
            one_user.avatar = request.POST.get('avatar', one_user.age)
            one_user.email = request.POST.get('email', one_user.email)






            one_user.save()
            user_dict = {
                'uid': one_user.uid,
                'sex': one_user.sex,
                'age': one_user.age,
                'user_name': one_user.user_name,
                'email': one_user.email,
                'avatar': one_user.avatar,
                'balance': one_user.balance,

            }

            return JsonResponse({"code": 200, "msg": 'update info success', "user": user_dict, "status_code": 0})
        else:
            return JsonResponse({"code": 200, 'msg': 'update info failed, wrong password', "status_code": 1})

    else:
        return JsonResponse({"code": 200, 'msg': 'update info failed, no such user', "status_code": 1})


@csrf_exempt
def getOneJob(request):
    job_id = request.POST.get('job_id')
    job_list = Jobs.objects.filter(jid=job_id)
    try:

        one_job = job_list[0]
    except:
        one_job = False
    if one_job:
        job_dict = {
            'jid': one_job.jid,
            'uid': one_job.uid,
            'title': one_job.title,
            'abstract': one_job.abstract,

            'date': one_job.date,
            'ddl': one_job.ddl,
            'title': one_job.title,
            'content': one_job.content,
            'fee': one_job.fee,
            'translated_title': one_job.translated_title,
            'translated_content': one_job.translated_content,
            'state': one_job.state,

            'ori_lang': one_job.ori_lang,
            'ore_lang': one_job.ore_lang,

        }
        return JsonResponse({"code": 200, "msg": 'SUC', "one_job": job_dict, 'status_code': 0})
    else:
        return JsonResponse({"code": 200, "msg": 'fail', 'status_code': 1})


@csrf_exempt
def postOneJob(request):
    job_id = request.POST.get('job_id')
    update_title = request.POST.get('translated_title')
    update_content = request.POST.get('translated_content')

    job_list = Jobs.objects.filter(jid=job_id)
    try:

        one_job = job_list[0]
    except:
        one_job = False
    if one_job:

        one_job.translated_title = update_title
        one_job.translated_content = update_content
        one_job.save()
        return JsonResponse({"code": 200, "msg": 'update SUC', 'status_code': 0})


    else:
        return JsonResponse({"code": 200, "msg": 'update fail', 'status_code': 1})


@csrf_exempt
def createAnOrder(request):
    uid = request.POST.get('uid')
    title = request.POST.get('title')
    content = request.POST.get('content')
    abstract = request.POST.get('abstract')
    ori_lang = request.POST.get('ori_lang')
    ore_lang = request.POST.get('ore_lang')
    ddl = request.POST.get('ddl')
    fee = request.POST.get('fee')
    tags = request.POST.get('tags')
    Orders.objects.create(uid=uid, title=title, content=content, abstract=abstract, \
                          ddl=ddl, fee=fee, tags=tags, ore_lang=ore_lang, ori_lang=ori_lang)
    user_order_list = list(Orders.objects.filter(uid=uid))
    oid = user_order_list[-1].oid

    return JsonResponse({"code": 200, "msg": 'successfully created order', 'oid': oid, 'status_code': 0})


@csrf_exempt
def getAllJobs(request):
    uid = request.POST.get("user_id")
    job_list = Jobs.objects.filter(uid=uid)
    user_list = User.objects.filter(uid=uid)
    try:
        one_user = user_list[0]
    except:
        one_user = False
    if one_user:
        return JsonResponse({"code": 200, "msg": 'SUC', 'jobs': list(job_list.values()), 'status_code': 0})
    else:
        return JsonResponse({"code": 200, "msg": 'fail no such user', 'status_code': 1})


@csrf_exempt
def getAllOrders(request):
    available_order_list = Orders.objects.filter(available=1)
    ord_list = list(available_order_list.values())
    # print(ord_list)
    # change tags
    for order in ord_list:
        order['tags'] = order['tags'].split(';')
    return JsonResponse({"code": 200, "msg": 'SUC', 'orders': ord_list, 'status_code': 0})
    return


@csrf_exempt
def getPostedOrders(request):
    uid = request.POST.get("user_id")
    order_list = Orders.objects.filter(uid=uid)
    order_list = list(order_list.values())
    user_list = User.objects.filter(uid=uid)
    try:
        one_user = user_list[0]
    except:
        one_user = False
    if one_user:
        # change tags
        for order in order_list:
            order['tags'] = order['tags'].split(';')
        return JsonResponse({"code": 200, "msg": 'SUC', 'orders': order_list, 'status_code': 0})
    else:
        return JsonResponse({"code": 200, "msg": 'fail no such user', 'status_code': 1})


@csrf_exempt
def takeOneOrder(request):
    oid = request.POST.get("oid")
    uid = request.POST.get("uid")
    user_list = User.objects.filter(uid=uid)
    try:

        one_user = user_list[0]
    except:
        one_user = False

    if one_user == False:
        return JsonResponse({"code": 200, "msg": 'fail, no such user', 'status_code': 1})

    order_list = Orders.objects.filter(oid=oid)
    try:

        one_order = order_list[0]
    except:
        one_order = False

    if one_order == False:
        return JsonResponse({"code": 200, "msg": 'fail, no such order', 'status_code': 1})

    if one_order.available == 0:
        return JsonResponse({"code": 200, "msg": 'fail, this order has been taken', 'status_code': 1})

    if int(one_order.uid) == int(uid):
        return JsonResponse({"code": 200, "msg": 'fail, this order is a newly created order that assigned to this user',
                             'status_code': 1})

    Jobs.objects.create(uid=uid, title=one_order.title, content=one_order.content, abstract=one_order.abstract, \
                        date=one_order.date, ddl=one_order.ddl, fee=one_order.fee, )

    user_job_list = list(Jobs.objects.filter(uid=uid))
    jid = user_job_list[-1].jid
    one_order.jid = jid
    one_order.available = 0
    one_order.save()

    return JsonResponse({"code": 200, "msg": 'successfully took order', 'jid': jid, 'status_code': 0})


@csrf_exempt
def completeOneOrder(request):
    oid = request.POST.get("oid")
    post_uid = request.POST.get("uid")

    order_list = Orders.objects.filter(oid=oid)
    try:

        one_order = order_list[0]
    except:
        one_order = False

    if one_order == False:
        return JsonResponse({"code": 200, "msg": 'fail, no such order', 'status_code': 1})

    if int(one_order.uid) != int(post_uid):
        return JsonResponse({"code": 200, "msg": 'fail, the order was not posted by this user', 'status_code': 1})
    # 1 is taken, 0 is not taken
    if one_order.available == 1:
        return JsonResponse({"code": 200, "msg": 'fail, this order has not been taken', 'status_code': 1})
    
    job = Jobs.objects.filter(jid=one_order.jid)[0]

    if job.state == 0:
        return JsonResponse({"code": 200, "msg": 'fail, this job has not completed', 'status_code': 1})
    if job.state == -1:
        return JsonResponse({"code": 200, "msg": 'fail, this job has been given up', 'status_code': 1})

    translated_uid = job.uid

    post_user = User.objects.get(uid=post_uid)
    translated_user = User.objects.get(uid=translated_uid)

    if post_user.balance < one_order.fee:
        return JsonResponse({"code": 200, "msg": 'fail, balance not enough', 'status_code': 1})
    post_user.balance -= one_order.fee
    post_user.save()
    translated_user.balance += one_order.fee
    translated_user.save()
    one_order.order_completed = 1
    one_order.save()
    return JsonResponse({"code": 200, "msg": 'complete success', 'status_code': 0})


@csrf_exempt
def completeOneJob(request):
    take_uid = request.POST.get("user_id")

    job_id = request.POST.get('job_id')
    job_list = Jobs.objects.filter(jid=job_id)
    ord_list = Orders.objects.filter(jid=job_id)
    try:

        one_job = job_list[0]
        one_order = ord_list[0]
    except:
        one_job = False
    if one_job:
        if one_job.state == -1:
            return JsonResponse({"code": 200, "msg": 'this job has already been canceled', 'status_code': 1})
        if one_job.state == 1:
            return JsonResponse({"code": 200, "msg": 'this job has already been completed', 'status_code': 1})
        if int(one_job.uid) != int(take_uid):
            return JsonResponse({"code": 200, "msg": 'this job was not taken by this user', 'status_code': 1})

        one_job.state = 1
        one_job.save()

        one_order.job_completed = 1
        one_order.save()

        return JsonResponse({"code": 200, "msg": 'Successfully completed the job', 'status_code': 0})
    else:
        return JsonResponse({"code": 200, "msg": 'fail no such job', 'status_code': 1})


@csrf_exempt
def cancelOneJob(request):
    job_id = request.POST.get('job_id')
    job_list = Jobs.objects.filter(jid=job_id)
    try:

        one_job = job_list[0]
    except:
        one_job = False
    if one_job:
        if one_job.state == -1:
            return JsonResponse({"code": 200, "msg": 'this job has already been canceled', 'status_code': 1})
        if one_job.state == 1:
            return JsonResponse({"code": 200, "msg": 'this job has already been completed', 'status_code': 1})

        one_job.state = -1
        one_job.save()
        one_order = Orders.objects.get(oid=one_job.oid)
        one_order = Orders.objects.get(oid=one_job.oid)
        if one_order.order_completed == -1:
            return JsonResponse({"code": 200, "msg": 'this order has already been canceled', 'status_code': 1})
        one_order.job_completed = -1
        one_order.available = 1
        one_order.save()
        return JsonResponse({"code": 200, "msg": 'Successfully canceled the job', 'status_code': 0})
    else:
        return JsonResponse({"code": 200, "msg": 'fail no such job', 'status_code': 1})


@csrf_exempt
def cancelOneOrder(request):
    order_id = request.POST.get('oid')
    print(order_id)
    order_list = Orders.objects.filter(oid=order_id)
    try:
        one_order = order_list[0]
    except:
        one_order = False
    if one_order:

        if one_order.order_completed == -1:
            return JsonResponse({"code": 200, "msg": 'this order has already been canceled', 'status_code': 1})
        if type(one_order.jid) == int:
            return JsonResponse(
                {"code": 200, "msg": 'this order has already been taken, you can not cancel it', 'status_code': 1})
        if one_order.job_completed == 1:
            if type(one_order.jid) == int:
                return JsonResponse(
                    {"code": 200, "msg": 'this order has already been taken, you can not cancel it', 'status_code': 1})

        one_order.order_completed = -1
        one_order.available = 0
        one_order.save()

        return JsonResponse({"code": 200, "msg": 'Successfully canceled the order', 'status_code': 0})
    else:
        return JsonResponse({"code": 200, "msg": 'fail no such order', 'status_code': 1})


@csrf_exempt
def checkTranslatedText(request):
    oid = request.POST.get("oid")
    post_uid = request.POST.get("uid")

    order_list = Orders.objects.filter(oid=oid)
    try:

        one_order = order_list[0]
    except:

        one_order = False

    if one_order == False:
        return JsonResponse({"code": 200, "msg": 'fail, no such order', 'status_code': 1})

    if int(one_order.uid) != int(post_uid):
        return JsonResponse({"code": 200, "msg": 'fail, the order was not posted by this user', 'status_code': 1})

    if one_order.available == 1:
        return JsonResponse({"code": 200, "msg": 'fail, this order has not been taken', 'status_code': 1})

    if one_order.job_completed == -1:
        return JsonResponse({"code": 200, "msg": 'corelared job has been canceled', 'status_code': 1})
    if one_order.order_completed == -1:
        return JsonResponse({"code": 200, "msg": 'order has been canceled', 'status_code': 1})

    one_job = Jobs.objects.get(jid=one_order.jid)
    translated_text = one_job.translated_content

    return JsonResponse({"code": 200, "msg": 'success', "translated_text": translated_text, 'status_code': 0})

@csrf_exempt
def getAllUserInfo(request):
    user_name = request.POST.get('user_name')
    user_list = User.objects.filter(user_name=user_name)
    try:
        one_user = user_list[0]
    except:
        one_user = False

    if one_user:

        user_dict = {

            'sex': one_user.sex,
            'age': one_user.age,
            'user_name': one_user.user_name,
            'email': one_user.email,

        }

        return JsonResponse({"code": 200, "msg": '请求成功', "user": user_dict})


    else:
        return JsonResponse({"code": 400, "msg": 'No such user'})
