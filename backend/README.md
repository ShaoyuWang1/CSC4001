## Instructions
### Install xadmin: 
master branch xadmin does not support Django > 2.0, so we need to
```bash
pip/pip3 install https://codeload.github.com/sshwsfc/xadmin/zip/django2
```
## Run
```bash
python3 manage.py runserver
```

## create superUser(if needed)
python3 manage.py createsuperuser
## visit
http://127.0.0.1:8000/xadmin
Account
- name: admin_back
- psw: back123456

## Data Base migrations
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Structure
Django is a MVT framework. 
- M: model, operations on data. (The data manager)
  - Define all types of data here. Each model actually a table in the database.
- V: operation controller. (The middle between the M and T)
- T: template. The view and the data binder.


### Notice
Note that when using this xadmin, an error would occur

TypeError: render() got an unexpected keyword argument 'renderer'

You need to find "site-packages/django/forms/boundfield.py" and comment line 93 

(my path is `/usr/local/lib/python3.7/site-packages/django/forms/boundfield.py`)



