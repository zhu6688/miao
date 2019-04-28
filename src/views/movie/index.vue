<template>
    <div id="main">
        <Header title="电影"/>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/movie/city" class="city_name">
                    <span>{{ $store.state.city.nm }}</span>
                    <i class="iconfont">&#xe6bd;</i>
                </router-link>
                <div class="hot_swtich">
                    <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
                    <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search_entry">
                    <i class="iconfont">&#xe621;</i>
                </router-link>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import { messageBox } from '@/components/js';
export default {
    components:{
        Header,
        TabBar
    },
    mounted(){
      this.axios.get('/api/getLocation').then(res=>{
        let msg = res.data.msg;
        let data = res.data.data;
        if(msg==='ok'){
          if(this.$store.state.city.id==data.id){return}
          var that = this;
          setTimeout(()=>{
            messageBox({
              title:'当前定位城市',
              content:data.nm,
              cancel:'取消',
              ok:'确定切换',
              handleOk(){
                localStorage.setItem('nm',data.nm);
                localStorage.setItem('id',data.id);
                location.reload();
              }
            })
          },1500)
        }
      })
      
    }
}
</script>

<style lang="less" scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  z-index: 10;
}
#content .movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
#content .movie_menu .city_name i {
  font-size: 14px;
}
#content .movie_menu .hot_swtich {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  line-height: 45px;
}
#content .movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
#content .movie_menu .router-link-active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
#content .movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
#content .movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>