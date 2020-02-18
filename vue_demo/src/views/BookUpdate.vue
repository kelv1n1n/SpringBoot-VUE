<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="图书编号" prop="id">
        <el-input v-model="ruleForm.id" readonly></el-input>
      </el-form-item>

      <el-form-item label="图书名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="作者" prop="author">
        <el-input v-model="ruleForm.author"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id: "",
        name: "",
        author: ""
      },
      rules: {
        id: [{ required: true, message: "请输入编号", trigger: "blur" }],
        name: [
          { required: true, message: "请输入图书名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        author: [{ required: true, message: "请输入作者", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate(valid => {
        //判断表单是否通过检验 valid是boolean值
        if (valid) {
          //   console.log(_this.ruleForm);
          axios
            .put("http://localhost:8090/book/update", _this.ruleForm)
            .then(function(res) {
              console.log("返回结果---" + res.data);
              if (res.data == "success") {
                // alert("保存成功！")
                // _this.$message('添加成功！');
                //跳转到添加图书
                _this.$router.push("/bookManage");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    console.log("id-------" + this.$route.query.id);
    const _this = this;
    axios
      .get("http://localhost:8090/book/findById/" + this.$route.query.id)
      .then(function(res) {
        // console.log(res)
        _this.ruleForm = res.data;
      });
  }
};
</script>