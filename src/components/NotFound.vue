<template>
<div class="body">
    <div id="err404">
        <img class="png404" src="../../public/img/404.png" />
        <div class="text">:( 抱歉，您访问的页面不存在！ </div>
        <p>
            <router-link to="/" class="go-home">返回首页</router-link> 
        </p>
    </div>
    <div id="cloud"></div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.body {
    width:100%;
    height: 100%;;
  background: #67ACE4;
}
#err404 {
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
}
#err404 .png404 {
  margin: 0 auto 50px;
  width: 192px;
}
#err404 .text {
  color: #fff;
  font-size: 16px;
  margin-bottom:20px;
}
#err404 .go-home {
  text-decoration: none;
  color: #5d4f4f;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background: #f5f5f5;
  display: block;
  width: 100px;
  border-radius: 20px;
  margin: 0 auto;
  font-size:16px;
}
#cloud {
  background: url("../../public/img/error_cloud.png") repeat-x 0 0 transparent;
  bottom: 0;
  height: 170px;
  position: absolute;
  width: 100%;
}

</style>