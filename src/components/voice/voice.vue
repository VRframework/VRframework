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
          name:'UI音效资源库'
        },{
          name:'工具音效资源库'
        },{
          name:'场景音效资源库'
        },{
          name:'人声资源库'
        },{
          name:'专业音效资源库'
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
