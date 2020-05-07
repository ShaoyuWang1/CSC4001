<template>
    <div class="login-container">
        <br>
        <div id="innerLayer">
            <br>
            <h2 style="text-align: center;">Enter Personal Information</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="Username" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="Enter Username"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" placeholder="Enter Password"
                              autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Confirm" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" placeholder="Repeat Password"
                              autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Sex" prop="Sex">
                    <el-select v-model="ruleForm.sex" placeholder="Select sex">
                        <el-option label="Male" value="shanghai"></el-option>
                        <el-option label="Female" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Birthday" prop="Birthday">
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="Select date" v-model="ruleForm.birthday"
                                            style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="Email" prop="Email">
                    <el-input v-model="ruleForm.email" placeholder="Enter Mail Address"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {registerUser} from '../api/api';
    import Qs from 'qs'

    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter password'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please re-enter password'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('Two passwords are different!'));
                } else {
                    callback();
                }
            };
            return {
                registering: false,
                ruleForm: {
                    name: '',
                    sex: '',
                    birthday: '',
                    pass: '',
                    checkPass: '',
                    email: ''
                },
                rules: {
                    name: [
                        {required: true, message: 'Username can\'t be empty', trigger: 'blur'},
                        {min: 1, max: 15, message: 'The length should be less than 15 characters', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: 'Please select sex', trigger: 'change'}
                    ],
                    birthday: [
                        {type: 'date', message: 'Please select birthday', trigger: 'change'}
                    ],
                    pass: [
                        {required: true, message: 'Password can\'t be empty', trigger: 'blur'},
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {required: true, message: 'Password can\'t be empty', trigger: 'blur'},
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: 'Email address can\'t be empty', trigger: 'blur'},
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        var registerParams = {
                            user_name: this.ruleForm.name,
                            password: this.ruleForm.pass,
                            email: this.ruleForm.email,
                        }
                        registerParams = Qs.stringify(registerParams)
                        registerUser(registerParams).then(data => {
                            this.registering = false;
                            let {msg, code, status_code} = data;
                            console.log(data);
                            if (code !== 200) {
                                this.$message.error("Server Error");
                            } else {
                                this.$message.success('Register successful')
                                this.$router.push({path: '/login'});
                            }
                        });
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