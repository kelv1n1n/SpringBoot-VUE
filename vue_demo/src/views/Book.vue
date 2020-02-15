<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>编号</td>
          <td>图书名称</td>
          <td>作者</td>
        </tr>
      </thead>
      <tbody>
          <!-- {{msg}} -->
        <tr v-for="(item,index) in books" v-bind:key="index">
          <!-- <td>{{books[0].id}}</td>
          <td>{{books[0].name}}</td>
          <td>{{books[0].author}}</td> -->
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.author}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name:"Book",
    data(){
        return {
            msg:"Hello,vue",
            books:[
                {
                    id:1,
                    name:'Java',
                    author:'Lee'
                },
                {
                    id:1,
                    name:'Vue',
                    author:'Lee'
                },
                {
                    id:1,
                    name:'Springboot',
                    author:'Lee'
                }
            ]
        }
    },
    created(){
      const _this = this
      axios.get('http://localhost:8090/book/findAll').then(function(res){
        console.log(res)
        _this.books = res.data
      })
    }
};
</script>


<style>
</style>