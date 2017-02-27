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
          name:'天气效果资源库'
        },{
          name:'场景特效资源库'
        },{
          name:'动态天空效果'
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
