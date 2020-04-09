<template>
    <div>
    <el-row>
        <el-col :span="8">
            <el-input
            type="text"
            placeholder="输入搜索内容"
            v-model="text"
            maxlength="10"
            show-word-limit
        ></el-input>
        </el-col>
        <el-col :span="8">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
        <el-col :span="8">
            <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            <el-button type="primary" icon="el-icon-refresh-left">换一批</el-button>
            </el-button-group>
        </el-col> 
    </el-row>

    <el-row>
        <el-col :span="8" v-for="item in items" :key="item">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{item.title}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">接单!</el-button>
        </div>
        <div>
            {{item.abstract}}
        </div>
        <div>
            报酬:{{item.fee}}元
        </div>
        <div>
            DDL:{{item.ddl}}
        </div>
        </el-card>
    </el-col>
    </el-row>
    </div>
</template>


<script>
export default {
    data: () => ({
    items: [
        // test data
      { title: 'title_1', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      { title: 'title_2', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      { title: 'title_3', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      { title: 'title_1', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      { title: 'title_2', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      { title: 'title_3', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      { title: 'title_1', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      { title: 'title_2', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      { title: 'title_3', abstract: 'This is the translation abstract', fee:4 , ddl:"N月N号"},
      
    ]
  }),
}
</script>




<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
