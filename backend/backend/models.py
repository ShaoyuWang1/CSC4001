from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=64)
    password = models.CharField(max_length=64)

    class Meta:
        verbose_name = 'User'  # 这个是修改增加xx 按钮名字
        verbose_name_plural = 'User'  # 这个是修改显示Users文字
    def __str__(self):
        return self.username

class Jobs(models.Model):

    jid = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, verbose_name='User', on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=20)
    abstract = models.CharField(max_length=128)
    date = models.DateField()
    ddl = models.DateField()
    content = models.TextField(max_length=1024)
    fee = models.DecimalField(decimal_places=2, max_digits=10)
    translate_title = models.TextField(max_length=1024, default="")
    translate_text = models.TextField(max_length=1024, default="")


    class Meta:
        verbose_name = 'Jobs'  # 这个是修改增加xx 按钮名字
        verbose_name_plural = 'Job'  # 这个是修改显示Users文字



class Trans(models.Model):
    tid = models.IntegerField(primary_key=True)