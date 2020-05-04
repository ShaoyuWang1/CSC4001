from django.contrib import admin
from .models import Jobs
from .models import User
from .models import Orders
import xadmin
# Register your models here.
class JobAdmin(object):
    # 用户管理的图标， 默认是圆圈，丑
    model_icon = 'fa fa-home' #icons 地址：
    # 显示的列，对应model相应字段名
    list_display = ['jid', 'title', 'abstract', 'date', 'ddl', 'content', 'fee', 'translated_title', 'translated_content']
    # 过滤器，用于查找，这是xadmin的强大之处
    list_filter = ['date', 'ddl',  'fee']
    # 搜索字段
    search_fields = ['title','abstract','translate_title', 'translate_text','date', 'ddl',  'fee']
    # 每页显示的数据行数
    list_per_page = 20
    # 类似<a 的href
    list_display_links = ['jid']
    # for the graph
    data_charts = {
        "fee_count_bar":{
            'title':'订单金额（柱状图）',"x-field":'date', "y-field":('fee',),"order":('date',),
            'option':{
                "series":{"bars":{"align":"center", "barWidth":0.8, "show":True}}
            }
        },
        "fee_count_num":{'title':'订单金额',"x-field":'date', "y-field":('fee',),"order":('date',)},
    }



class UserAdmin(object):
    # 用户管理的图标， 默认是圆圈，丑
    model_icon = 'glyphicon glyphicon-paperclip'
    list_display = ['user_name']
    list_filter = ['user_name',"sex","age"]
    search_fields = ['user_name',"sex","age"]

    # 每页显示的数据行数
    list_per_page = 20

class OrderAdmin(object):
    model_icon = 'glyphicon glyphicon-list-alt'

    list_display = ['uid','jid', 'title', 'abstract', 'date', 'ddl', 'content', 'fee', 'tags','available']
    list_filter = ['date', 'ddl', 'fee']
    search_fields = ['title', 'abstract', 'date', 'ddl', 'content','tags','available']
    list_per_page = 20

    list_display_links = ['uid']



xadmin.site.register(Jobs, JobAdmin)
xadmin.site.register(User, UserAdmin)
xadmin.site.register(Orders, OrderAdmin)