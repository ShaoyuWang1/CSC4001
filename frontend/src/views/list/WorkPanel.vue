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
                        v-model="translate_text">
                    </el-input>
            <el-row>
                <el-button type="primary" icon="el-icon-upload">上传</el-button>
                <el-button type="primary" icon="el-icon-search">机器翻译</el-button>
            </el-row>
            </div>
        </el-col>
    </el-row>
    <div class="in-file">
			<input type="file" @change="inFile" multiple="multiple" accept="*/*" />
		</div>
    <div>
            <!-- ElementUI上传 -->
            <el-upload
                :auto-upload="false"
                :on-change="elInFile"
                ref="upload"
                class="upload-demo"
                accept="*/*">
              <el-button slot="trigger" size="mini" type="success" plain>选取文件</el-button>
              <i slot="tip" class="el-upload__tip el-icon-info">请选取文本文件</i>
            </el-upload>
    </div>
</el-row>
</template>



<script>
import { getOneJob } from '../../api/api';
export default {
  data() {
    return {
      content:'',
      translate_text: '',
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
              let {abstract,content,date,ddl,title,translate_title,translate_text} = one_job
              this.content = content
              this,translate_title = translate_title
              this.translate_text = translate_text
            }
          });
      },
  }
}
</script>

<style>
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