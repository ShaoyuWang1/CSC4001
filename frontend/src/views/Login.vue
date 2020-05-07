<template>
    <div class="login-container">
        <br>
        <el-form :model="ruleForm2" :rules="rules2"
                 status-icon
                 ref="ruleForm2"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">Login Page</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model="ruleForm2.username"
                          auto-complete="off"
                          placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="ruleForm2.password"
                          auto-complete="off"
                          placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">Login
                </el-button>
            </el-form-item>
            <el-form-item>
                <el-checkbox
                        v-model="checked"
                        class="rememberme">Remember Password
                </el-checkbox>
                <el-button type="text" @click="forgetpassword">Forget Password</el-button>
                <div id="register">
                    <div class="align">
                        <p>No Account？</p>
                    </div>
                    <div class="align">
                        <el-button type="text" @click="register">Register</el-button>
                    </div>
                </div>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import {requestLogin} from '../api/api';
    import {refreshcode} from '../api/api';
    import Qs from 'qs'

    export default {
        data() {
            return {
                logining: false,
                ruleForm2: {},
                rules2: {
                    account: [
                        {required: true, message: 'Username can\'t be empty', trigger: 'blur'},
                    ],
                    checkPass: [
                        {required: true, message: 'Password can\'t be empty', trigger: 'blur'},
                    ]
                },
                checked: true
            };
        },
        methods: {
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },
            handleSubmit(ev) {
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        this.logining = true;

                        var loginParams = {
                            user_name: this.ruleForm2.username,
                            password: this.ruleForm2.password,
                            identifycode: this.ruleForm2.identifycode
                        };
                        loginParams = Qs.stringify(loginParams)
                        requestLogin(loginParams).then(data => {
                            this.logining = false;
                            let {msg, code, status_code, user} = data;
                            console.log(user)
                            if (code !== 200) {
                                this.$message.error("Server Error");
                            } else {
                                if (status_code === 0) {
                                    sessionStorage.setItem('user', JSON.stringify(user));
                                    this.$router.push({path: '/homepage'});
                                } else {
                                    this.$message.error(msg);
                                }
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            refreshcode() {
                this.uuid = this.getuuid()
                var refreshParams = {code: this.ruleForm2.identifycode};
                refreshcode(refreshParams).then(data => {
                    this.imgUrl = serverUrl + "" + this.uuid
                }).catch((error) => {
                    this.$message({
                        message: "Error while requesting server，please retry！",
                        type: 'error'
                    });
                });
            },
            forgetpassword() {
                this.$alert('Please contact website administrator to retrieve password', 'Message', {
                    confirmButtonText: 'OK',
                    type: 'warning'
                })
            },
            register() {
                this.$router.push('/register');
            }
        }
    }
</script>

<style scoped>
    .login-container {
        background: url("../assets/login_1.jpg") no-repeat fixed
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