## Prerequisite

### Install xadmin: 
master branch xadmin does not support Django > 2.0, so we need to
 
```Bash
git clone -b django2 https://github.com/sshwsfc/xadmin.git

cd xadmin

python3 setup.py install
```

Note that when using this xadmin, an error would occur

TypeError: render() got an unexpected keyword argument 'renderer'

You need to find "site-packages/django/forms/boundfield.py" and comment line 93 

(my path is `/usr/local/lib/python3.7/site-packages/django/forms/boundfield.py`)


## Run
```bash
python3 manage.py runserver
```



