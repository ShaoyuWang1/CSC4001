from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

#
from .models import Jobs
from .models import User
# Create your views here.
@csrf_exempt
def getOneJob(request):
    job_id = request.POST.get('job_id')
    job_list = Jobs.objects.filter(jid__icontains=job_id)
    try:

        one_job = job_list.values_list()[0]
    except:
        one_job = False
    if one_job:
        return JsonResponse({"code": 200, "msg": '请求成功', "one_job":one_job})
    else:
        return JsonResponse({"code": 400, "msg": '未查询到记录'})

@csrf_exempt
def postOneJob(request):
    user_name = request.POST.get('user_name')
    usr = User.objects.get(user_name = user_name)

    title = request.POST.get('title')
    abstract = request.POST.get('abstract')
    date = request.POST.get('date')
    ddl = request.POST.get('ddl')
    content = request.POST.get('content')
    fee = request.POST.get('fee')
    Jobs.objects.create(user = usr ,title=title,abstract=abstract,date=date,ddl=ddl,content=content,fee=fee)
    return JsonResponse({"code": 200, "msg": 'SUC'})


# @csrf_exempt
# def deleteOneJob(request):
#     job_id = request.POST.get('job_id')
#     job = Jobs.objects.get(jid =job_id)
#     job.delete()
#     return JsonResponse({"code": 200, "msg": 'SUC'})


# @csrf_exempt
# def deleteOneUser(request):
#     user_id = request.POST.get('id')
#     usr = User.objects.get(id =user_id)
#     usr.delete()
#     return JsonResponse({"code": 200, "msg": 'SUC'})

@csrf_exempt
def registerOneUser(request):
    user_name = request.POST.get('user_name')
    user_list = User.objects.filter(user_name = user_name)

    try:
        one_user = user_list[0]
    except:
        one_user = False



    if one_user:
        return JsonResponse({"code": 400, "msg": 'repeat user name', "one_user":one_user})

    # usex = request.POST.get('sex')
    # if usex == "male" or usex == "男":
    #     sex = ("male","男")
    # else:
    #     sex = ("femal","女")
    sex =  request.POST.get('sex')
    age = request.POST.get("age")
    email = request.POST.get("email")


    password = request.POST.get('password')
    User.objects.create(user_name = user_name,password = password,sex = sex,age = age,email = email)
    return JsonResponse({"code": 200, "msg": 'SUC'})


@csrf_exempt
def login(request):
    user_name = request.POST.get('user_name')
    password = request.POST.get('password')
    user_list = User.objects.filter(user_name = user_name)
    try:
        one_user = user_list[0]
    except:
        one_user = False

    if one_user:



        if password == one_user.password :# password == one_user.password
            user_dict = {

                'sex':one_user.sex,
                'age':one_user.age,
                'password': one_user.password,
                'user_name':one_user.user_name,
                'email':one_user.email,



            }


            return JsonResponse({"code": 200, "msg": '请求成功', "user":user_dict})
        else:
            return JsonResponse({"code": 400, "msg": 'Wrong password'})

    else:
        return JsonResponse({"code": 400, "msg": 'No such user'})


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


@csrf_exempt
def modifyUserInfo(request):
    user_name = request.POST.get('user_name')
    password = request.POST.get('password')
    user_list = User.objects.filter(user_name = user_name)
    try:
        one_user = user_list[0]
    except:
        one_user = False

    if one_user:



        if password == one_user.password :# password == one_user.password
            one_user.sex = request.POST.get('sex', one_user.sex)
            one_user.age = request.POST.get('age', one_user.age)

            one_user.password = request.POST.get('password', one_user.password)
            one_user.email = request.POST.get('email', one_user.email)
            one_user.save()
            return JsonResponse({"code": 200, "msg": '请求成功'})
        else:
            return JsonResponse({"code": 400, "msg": 'Wrong password'})

    else:
        return JsonResponse({"code": 400, "msg": 'No such user'})
