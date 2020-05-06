<template>
    <div class="login-container">
        <br>
        <div id="innerLayer">
            <br>
            <h2 style="text-align: center;">输入注册信息</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="region">
                    <el-select v-model="ruleForm.sex" placeholder="请选择性别">
                        <el-option label="男" value="shanghai"></el-option>
                        <el-option label="女" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday"
                                            style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {requestLogin} from '../api/api';
    import {refreshcode} from '../api/api';
    import Qs from 'qs'

    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    name: '',
                    sex: '',
                    birthday: '',
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    birthday: [
                        {type: 'date', required: true, message: '请选择生日', trigger: 'change'}
                    ],
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        // add post request here
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .login-container {
        background: url("../assets/login_1.jpg") no-repeat fixed;
    }

    #innerLayer {
        background: #ffffff;
        margin-top: 5%;
        margin-left: 30%;
        margin-right: 30%;
        border-radius: 20px;
        height: 70%;
    }

    .demo-ruleForm {
        margin-top: 3%;
        margin-left: 5%;
        margin-right: 5%;
    }

    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }

    label.el-button.forget {
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        outline: none;
    }

    #register {
        display: inline;
        margin: 0%;
        align: right;
        right: 0%;
        line-height: 0%;
    }
</style>