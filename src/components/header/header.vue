<template>
  <div id="header">
    <div class="logo">
      <a href="/">VRframework</a>
    </div>
    <div class="user">
      <div class="avatar"></div>
      <div class="user_info">Name</div>
      <button class="exit">
        <span>退出系统</span>
      </button>
    </div>
  </div>
</template>

<script>
export default{


}
</script>

<style>
  #header{
    height:100px;
    width: 100%;
    background: rgb(239,244,248);
  }
  .logo{
    float: left;
    padding:40px;
    font-size: 20px;
    color: deepskyblue;
    font-weight: bold;
  }
  .logo>a{
    color: deepskyblue;
  }
  .user{
    float: right;
    line-height: 100px;
  }
  .avatar{
    width: 60px;
    height:60px;
    border-radius: 50%;
    background: url(../../assets/avatar.jpg) no-repeat -50px -40px;
    display: inline-block;
    vertical-align: middle;
  }
  .user_info{
    display: inline-block;
    font-size: 20px;
  }
  .exit{
    display: inline-block;
    font-size: 14px;
  }


</style>
