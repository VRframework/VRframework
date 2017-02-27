<template>
  <div id="file">
    <div class="img">
      <img src="../file/file.png">
    </div>
    <div class="description">
      <span>{{name.name}}</span>
    </div>
  </div>
</template>

<script>
    export default{
      props:{
        name:{
          type:Object
        }
      }
    }
</script>

<style>
  #file{
    width: 200px;
    height: 200px;
    text-align: center;

  }
  img{
    width: 80px;
    height: 80px;
  }

</style>
