<template>
    <el-container style="height: 500px; border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

    <!-- <el-menu :default-openeds="['1']" :default-active="'1-1'">

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>

        </el-menu> -->

        <el-menu router :default-openeds="['0']">
          <el-submenu v-if="item.show" v-for="(item, index) in $router.options.routes" v-bind:key="index" :index="index+''">
            <template slot="title">
              <i class="el-icon-message"></i>{{index}}-{{item.name}}
            </template>
            <el-menu-item 
                v-for="(item_chil, index_chil) in item.children" 
                v-bind:key="index_chil" :index="item_chil.path" 
                :class="$route.path==item_chil.path?'is-active':''">{{index_chil+'-'+index}}-{{item_chil.name}}</el-menu-item>
          </el-submenu>
        </el-menu>

      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view/>
        </el-main>
      </el-container>

    </el-container>
</template>


<script>
export default {
    
}
</script>

<style>

</style>