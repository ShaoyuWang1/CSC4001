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
    one_job = job_list.values_list()[0]
    if one_job:
        return JsonResponse({"code": 200, "msg": '请求成功', "one_job":one_job})
    else:
        return JsonResponse({"code": 400, "msg": '未查询到记录', "one_job":one_job})

@csrf_exempt
def postOneJob(request):
    uid = request.POST.get('uid')
    usr = User.objects.get(id = uid)
    title = request.POST.get('title')
    abstract = request.POST.get('abstract')
    date = request.POST.get('date')
    ddl = request.POST.get('ddl')
    content = request.POST.get('content')
    fee = request.POST.get('fee')
    Jobs.objects.create(user = usr, title=title,abstract=abstract,date=date,ddl=ddl,content=content,fee=fee)
    return JsonResponse({"code": 200, "msg": 'SUC'})


@csrf_exempt
def deleteOneJob(request):
    job_id = request.POST.get('job_id')
    job = Jobs.objects.get(jid =job_id)
    job.delete()
    return JsonResponse({"code": 200, "msg": 'SUC'})


@csrf_exempt
def deleteOneUser(request):
    user_id = request.POST.get('id')
    usr = User.objects.get(id =user_id)
    usr.delete()
    return JsonResponse({"code": 200, "msg": 'SUC'})

@csrf_exempt
def postOneUser(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    User.objects.create(username =username,password = password)
    return JsonResponse({"code": 200, "msg": 'SUC'})


@csrf_exempt
def getOneUser(request):
    user_id = request.POST.get('id')
    user_list = User.objects.filter(id = user_id)
    one_job = user_list.values_list()[0]
    if one_job:
        return JsonResponse({"code": 200, "msg": '请求成功', "one_job":one_job})
    else:
        return JsonResponse({"code": 400, "msg": '未查询到记录', "one_job":one_job})
