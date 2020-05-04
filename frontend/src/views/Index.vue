<template>
    <el-container>
        <div id="upper">
            <el-header id="header1">
                <el-row type="flex" id="Navigator">
                    <el-col :span="3">
                        <div><span id="We">We</span><span id="Trans">Trans</span>
                        </div>
                    </el-col>
                    <el-col :span="2" push=10>
                        <el-button type="text">Home</el-button>
                    </el-col>
                    <el-col :span="2" push=10>
                        <el-button type="text">Market</el-button>
                    </el-col>
                    <el-col :span="2" push=10>
                        <el-button type="text">Panel</el-button>
                    </el-col>
                    <el-col :span="2" push=10>
                        <el-button type="text">Upload</el-button>
                    </el-col>
                </el-row>
            </el-header>
            <div id="mask">
                <el-container id="container1">
                    <el-header height="600px">
                        <el-container id="intro">
                            <div class="intro-text">
                                <el-header>
                                    <div id="intro2">
                                        <div id="intro1">Get together, translate together</div>
                                        <h2>BEST ONLINE PLATFORM<br>FOR TRANSLATION COLLABORATION</h2>
                                    </div>
                                    <div id="intro3">
                                        <p>Experience the most convenient and economic solution of translation with our
                                            amazing online platform WeTrans</p>
                                    </div>
                                    <el-button @click="goLogin" type="success" round=true>Go Explore more</el-button>
                                </el-header>
                            </div>
                        </el-container>
                    </el-header>
                    <el-footer></el-footer>
                </el-container>
            </div>
        </div>
        <el-footer id="page_footer" height="300px">
            <el-row gutter="40">
                <el-col :span="8" class="grid-content">
                    <div>
                        <div class="function">
                            <i class="el-icon-user-solid"/>
                            <h3>Personal Center</h3>
                            <p class="icon-intro">Go to your personal center and check orders you've uploaded or undertaken</p>
                            <el-link>Go Now<i class="el-icon-position el-icon--right"/></el-link>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="grid-content">
                    <div id="border">
                        <div class="function">
                            <i class="el-icon-s-order"/>
                            <h3>Market</h3>
                            <p class="icon-intro">Browse available translation orders and check out what's new on our market</p>
                            <el-link>Go Now<i class="el-icon-position el-icon--right"/></el-link>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="grid-content">
                    <div>
                        <div class="function">
                            <i class="el-icon-upload"/>
                            <h3>Create Order</h3>
                            <p class="icon-intro">Create your own translation request and submit it to our market</p>
                            <el-link>Go Now<i class="el-icon-position el-icon--right"/></el-link>
                        </div>
                    </div>
                </el-col>
            </el-row>




        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "temp",
        methods:{
            goLogin(){
            this.$router.push({ path: '/homepage' });
            }
        }
    }
</script>

<style scoped>
    #upper {
        background-image: url("./hero-bg.jpg");
        /*opacity: 0.7;*/
    }

    #Navigator {
        height: auto;
        background-color: #oooooo;
    }

    .el-button {
        color: #ffffff;
        font-weight: bolder;
        font-size: 20px;
    }

    #We {
        color: #65bdff;
        font-size: 32px;
        font-weight: bolder;
        font-family: "Helvetica Neue", serif;
    }

    #Trans {
        color: rgba(104, 226, 135, 1);
        font-size: 32px;
        font-weight: bolder;
        font-family: "Helvetica Neue", serif;
    }

    #mask {
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .2);
    }

    .intro-text {
        margin-top: 3%;
        margin-left: 10%;
        margin-right: 50%;
    }

    #intro1 {
        color: rgba(104, 226, 135, 1);
    }

    #intro2 {
        color: #ffffff;
        font-size: 4vh;
        text-align: left;
    }

    #intro3 {
        text-align: left;
        color: #ffffff;
        line-height: 150%;
        font-size: 20px;
    }

    .el-header, .el-footer {
        background-color: #oooooo;
        /*color: #333;*/
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #oooooo;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    #page_footer {
        height: 200px;
    }

    #border {
        border-left: 3px solid #B3C0D1;
        border-right: 3px solid #B3C0D1;
    }

    .function {
        text-align: left;
        margin: 20%;
        height: 100%;
        line-height: 120%;
    }

    .function h3 {
        font-size: 24px;
    }

    .function p {
        font-size: 16px;
        line-height: 100%;
    }

    .el-icon-user-solid {
        color: rgba(104, 226, 135, 1);
        font-size: 36px;
    }

    .el-icon-s-order {
        color: rgba(104, 226, 135, 1);
        font-size: 36px;
    }

    .el-icon-upload {
        color: rgba(104, 226, 135, 1);
        font-size: 36px;
    }

    .icon-intro {
        color: dimgray;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }


</style>