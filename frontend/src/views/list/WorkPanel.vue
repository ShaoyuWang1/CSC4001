<template>
 <el-row>
    <el-row :gutter="40">
        <el-col :span="8">
            <div class="grid-content tx-back">
                {{content}}
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content">
                <el-input
                    type="textarea"
                    autosize
                    placeholder="标题内容"
                    v-model="translate_title">
                    </el-input>
                    <div style="margin: 20px 0; wk-back"></div>
                        <el-input
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 16}"
                        placeholder="文本内容"
                        v-model="translate_content">
                    </el-input>
            <el-row>
                <el-button type="primary" icon="el-icon-upload">上传</el-button>
                <el-button type="primary" icon="el-icon-search">机器翻译</el-button>
            </el-row>
            </div>
        </el-col>
    </el-row>
</el-row>
</template>



<script>
import { getOneJob } from '../../api/api';
import Qs from 'qs'
export default {
  data() {
    return {
      content:'',
      translate_content: '',
      translate_title:'',
    }
  },
  mounted(){
    this.id = this.$route.params.id
    this.getOneJob(this.id)
  },
  methods:{
    getOneJob(id){
        var that = this
        var Params = {job_id: id}
        // console.log(Params)
        getOneJob(Params).then(data =>{
          let { msg, code, one_job } = data;
          if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
              let {abstract,content,date,ddl,title,translate_title,translate_content} = one_job
              this.content = content
              this,translate_title = translate_title
              this.translate_content = translate_content
            }
          });
      },
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

.tx-back{
    height: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.wk-back{
    height: 400px;
}
</style>