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
        <tr v-for="item in books" v-bind:key="item">
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
    }
};
</script>


<style>
</style>