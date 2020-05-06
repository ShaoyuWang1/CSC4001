from django.db import models
import django.utils.timezone as timezone
# Create your models here.
class User(models.Model):
    SEX = (
        ('male', '男'),
        ('female', '女')
    )
    uid = models.IntegerField(primary_key=True)

    sex = models.CharField(choices=SEX,verbose_name='性别', max_length=50,null=True)
    age = models.IntegerField(verbose_name='年龄',default=18,null=True)
    user_name = models.CharField(max_length=64,unique=True)
    password = models.CharField(max_length=64)
    email = models.CharField(max_length=64)
    avatar = models.CharField( max_length=64,null=True)
    balance = models.DecimalField(default=0.0,decimal_places=2, max_digits=10)

    class Meta:
        verbose_name = 'User'  # 这个是修改增加xx 按钮名字
        verbose_name_plural = 'User'  # 这个是修改显示Users文字
    def __str__(self):
        if self.user_name:
            return self.user_name
        else:

            return "user"

class Jobs(models.Model):

    jid = models.IntegerField(primary_key=True)
    uid = models.IntegerField()
    title = models.CharField(max_length=21)
    abstract = models.CharField(max_length=128)
    ori_lang = models.CharField(max_length=128)
    ore_lang = models.CharField(max_length=128)
    date = models.DateTimeField(default = timezone.now)
    ddl = models.DateTimeField()
    content = models.TextField(max_length=1024)
    fee = models.DecimalField(decimal_places=2, max_digits=10)
    translated_title = models.TextField(max_length=1024, default="")
    translated_content = models.TextField(max_length=1024, default="")
    state = models.IntegerField(default=0)


    class Meta:
        verbose_name = 'Jobs'  # 这个是修改增加xx 按钮名字
        verbose_name_plural = 'Job'  # 这个是修改显示Users文字

class Orders(models.Model):

    oid = models.IntegerField(primary_key=True)
    uid = models.IntegerField()
    available = models.IntegerField(default=1)

    order_completed = models.IntegerField(default=1)
    job_completed = models.IntegerField(default=0)
    jid = models.IntegerField(null=True)

    title = models.CharField(max_length=21)
    abstract = models.CharField(max_length=128)
    ori_lang = models.CharField(max_length=128)
    ore_lang = models.CharField(max_length=128)
    date = models.DateTimeField(default = timezone.now)
    ddl = models.DateTimeField()
    content = models.TextField(max_length=1024)
    fee = models.DecimalField(decimal_places=2, max_digits=10)
    tags = models.CharField(max_length=128, default="")


