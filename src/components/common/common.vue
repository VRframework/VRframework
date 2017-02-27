<template>
  <div>
    <div v-for="name in effectData">
      <v-file :name="name" class="file"></v-file>
    </div>
  </div>
</template>

<script>
  import file from 'components/file/file'
  export default{
    data() {
      return {
        effectData:[{
          name:'模型资源库'
        },{
          name:'特效资源库'
        },{
          name:'贴花资源库'
        },{
          name:'声音资源库'
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
