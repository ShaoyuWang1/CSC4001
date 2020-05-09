<template>
	<div>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
  
  <el-form-item label="Original Language">
    <el-select v-model="form.ori_lang" placeholder="Original Language">
      <el-option label="EN" value="EN"></el-option>
      <el-option label="CN" value="CN"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Oriented Language">
    <el-select v-model="form.ore_lang" placeholder="Oriented Language">
      <el-option label="EN" value="EN"></el-option>
      <el-option label="CN" value="CN"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="DDL">
    <el-date-picker
      v-model="form.ddl"
      type="datetime"
      placeholder="Choose Suitable DDl">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="Customized Tags">
    <el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
</el-form-item>
  <el-form-item label="Title">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="Content">
    <el-input type="textarea"
            :autosize="{ minRows: 5, maxRows: 30}"
            placeholder="Place Content here, using txt file or type."
            v-model="form.content" @input="cal_fee()"></el-input>
    <el-upload
        :auto-upload="false"
        :on-change="elInFile"
        ref="upload"
        class="upload-demo"
        accept="*/*">
    <el-button slot="trigger" size="mini" type="success" plain>Choose File</el-button>
    <i slot="tip" class="el-upload__tip el-icon-info">Please Choose .txt file</i>
    </el-upload>
        Number of words: {{form.content.length}}
  </el-form-item>
  <el-form-item label="Abstract">
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"  v-model="form.abstract"></el-input>
  </el-form-item>
  <el-form-item label="Fee">
    <el-tooltip class="item" effect="dark" content="6 dollars per 10 words" placement="top-start">
      <el-input  :disabled="true" v-model="form.fee"></el-input>
    </el-tooltip>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create An Order!</el-button>
    <el-button @click="resetPage()">Reset</el-button>
  </el-form-item>
</el-form>
    </div>
    
		
	</div>
</template>
<script>
import { createAnOrder } from '../../api/api';
import Qs from 'qs'
	export default {
		name: 'importTxt',
		data() {
			return {
                files: null,
                form_o: {
                title: '',
                ori_lang: '',
                ore_lang: '',
                ddl: '',
                tags: [],
                content: '',
                abstract: '',
                fee:0,
                },
                form: {
                title: '',
                ori_lang: '',
                ore_lang: '',
                ddl: '',
                tags: [],
                content: '',
                abstract: '',
                fee:0,
                },
                dynamicTags: ['news', 'tourism', 'en'],
                inputVisible: false,
                inputValue: ''
            
			};
		},
		methods: {
      resetPage(){
        let new_form = {...this.form_o}
        this.form = new_form;
      },
      // submit
      onSubmit(){
        var user = sessionStorage.getItem('user');
        user = JSON.parse(user);
        let uid = user.uid
        let param = this.form
        param['uid'] = uid; 
        param.tags = this.dynamicTags.join(';') // convert array to string
        param = Qs.stringify(param)
        createAnOrder(param).then(data => {
            let { msg,code,status_code, oid } = data;
            if (code !== 200) {
              this.$message.error(`Server Error`);
            } else {
              if(status_code === 0){
                this.$message({
                  message:msg + `, oid:${oid}`,
                  type: 'success'
                });
                this.$router.push({ name: 'HomePage'})
              }else{
                this.$message.error(msg);
              }
            }
          });
      },
      // tags
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      // how much per 100 words
      cal_fee(){
          let num = this.form.content.length
          this.form.fee = 0.6 * num
      },
			/**
			 * input-file调用此函数时，默认传入"$event"
			 * @param e {@link Object}：$event事件对象；
			 */
			inFile(e) {
				this.files = (e.target || e.srcElement).files;  //获取"input-file"的FileList对象
				if (!this.files || !this.files.length)
					return;
				for (let i = 0, len = this.files.length; i < len; i++)
					this.read(this.files[i]);
			},
			/**
			 * 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用。
			 * @param f {@link Object}：当前上传的文件；
			 * @param fs {@link Array}：当前文件列表；
			 */
			elInFile(f, fs) {
				this.read(f.raw);
			},
			/**
			 * 解析
			 * @param f {@link File}
			 */
			read(f) {
				let rd = new FileReader();
				rd.onload = e => {  //this.readAsArrayBuffer函数内，会回调this.onload函数。在这里处理结果
					let cont = rd.reading({encode: 'UTF-8'});
                    // console.log('文件内容：', cont);
                    this.form.content += '\n'
                    this.form.content += cont;
                    this.cal_fee()
				};
				rd.readAsBinaryString(f);
			}
    },
		beforeCreate() {
			/**
			 * 读取文件（自定义函数）
			 * @param pms {@link Object}：参数：
			 *  @param pms.encode {@link String}：编码格式：
			 * @return {@link String}：文本内容；
			 */
			FileReader.prototype.reading = function ({encode} = pms) {
				let bytes = new Uint8Array(this.result);    //无符号整型数组
				let text = new TextDecoder(encode || 'UTF-8').decode(bytes);
				return text;
			};
			/* 重写readAsBinaryString函数 */
			FileReader.prototype.readAsBinaryString = function (f) {
				if (!this.onload)       //如果this未重写onload函数，则创建一个公共处理方式
					this.onload = e => {  //在this.onload函数中，完成公共处理
                        let rs = this.reading();
                        this.content = rs;
						// console.log(rs);
					};
				this.readAsArrayBuffer(f);  //内部会回调this.onload方法
			};
		}
	}
</script>
<style scoped>
	.in-file {
		text-align: center;
	}
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .item {
      margin: 4px;
  }
</style>
