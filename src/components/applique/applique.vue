<template>
  <div>
    <div v-for="name in fileData">
      <v-file :name = 'name' class="file"></v-file>
    </div>
  </div>
</template>

<script>
  import file from 'components/file/file'
  export default{
    name:'model',
    data() {
      return  {
        fileData:[{
          name:'做旧效果资源库'
        },{
          name:'潮湿效果资源库'
        },{
          name:'损坏效果资源库'
        },{
          name:'锈迹资源库'
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
