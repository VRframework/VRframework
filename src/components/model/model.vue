<template>
  <div>
    <!--<router-link>-->
      <div v-for="name in fileData">
        <v-file :name = 'name' class="file"></v-file>
       </div>
    <!--</router-link>-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import file from 'components/file/file'
  export default{
    name:'model',
    data() {
      return  {
        fileData:[{
          name:'大型机器模型库'
        },{
          name:'大型工具模型库'
        },{
          name:'小型工具模型库'
        },{
          name:'场景素材模型库'
        },{
          name:'专业素材模型库'
        }]
      }
    },
    components:{
      'v-file':file
    }
  }
</script>

<style>
  .file{
    float: left;
    padding: 10px;
  }

</style>
