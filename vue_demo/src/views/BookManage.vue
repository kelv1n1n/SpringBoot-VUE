<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
      <el-table-column prop="name" label="名称" width="120"></el-table-column>
      <el-table-column prop="author" label="作者" width="120"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      @current-change="pageChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    deleteBook(row){
      const _this = this
      axios.delete('http://localhost:8090/book/delete/'+row.id).then(function(res){
        _this.$alert('删除成功','ok',{
          confirmButtonTest:'确定',
          callback:action => {
            // _this.$router.push('/BookManage')
            window.location.reload();
          }
        })
      })
    },
    edit(row) {
      // console.log(row);
      //  this.$router.push('/update');
      // row.id
      this.$router.push({
        path:'/update',
        query:{
          id:row.id
        }
      })
    },
    pageChange(currentPage) {
      const _this = this;
      axios.get('http://localhost:8090/book/findAll/'+(currentPage-1)+'/4').then(function(res) {
        console.log(res);
        _this.tableData = res.data.content;
        _this.pageSize = res.data.size;
        _this.total = res.data.totalElements;
      });
    }
  },

  data() {
    return {
      pageSize: 0,
      total: 0,
      tableData: [
        {
          id: "1",
          name: "王小虎",
          author: "上海"
        },
        {
          id: "2",
          name: "王小虎",
          author: "上海"
        },
        {
          id: "3",
          name: "王小虎",
          author: "上海"
        }
      ]
    };
  },
  created() {
    const _this = this;
    axios.get("http://localhost:8090/book/findAll/0/4").then(function(res) {
      // console.log(res);
      _this.tableData = res.data.content;
      _this.pageSize = res.data.size;
      _this.total = res.data.totalElements;
    //   console.log(_this.tableData);
    });
  }
};
</script>