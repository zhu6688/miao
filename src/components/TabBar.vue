<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cnema">
                <i class="iconfont icon-yingyuana"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="mine">
                <i class="iconfont icon-daohanglan-05"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name:'tabBar'
}
</script>

<style lang="less" scoped>
#footer {
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  height: 50px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
#footer ul li {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 40px;
}
#footer ul li i {
  font-size: 20px;
}
#footer ul li p {
  font-size: 12px;
  line-height: 18px;
}
#footer ul li.router-link-active {
  color: #f03d37;
}
</style>