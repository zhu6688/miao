<template>
    <div class="movie_body">
      <Loading v-if="isLoading"></Loading>
      <div v-else class="wrapper" ref="wrapper">
        <ul>
          <li v-for="item in comingList" :key="item.id">
              <div class="pic_show">
                  <img :src="item.img | setWH('120.180')">
              </div>
              <div class="info_list">
                  <h2>{{item.nm}}</h2>
                  <p>
                      <span>{{item.wish}}</span> 人想看
                  </p>
                  <p>{{item.star}}</p>
                  <p>{{item.showInfo}}</p>
              </div>
              <div class="btn_pre">预售</div>
          </li>
      </ul>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:"comingSoon",
    data(){
      return {
        comingList:[],
        isLoading:true,
        prevCityId:-1
      }
    },
    activated(){
      let cityId = this.$store.state.city.id;
      if(this.prevCityId===cityId){return;}
      this.isLoading = true;
      console.log(11);
      this.axios.get('/api/movieComingList?cityId='+cityId).then(res=>{
        let msg = res.data.msg;
        if(msg==='ok'){
          this.isLoading = false;
          this.prevCityId = cityId;
          this.comingList = res.data.data.comingList;
          this.$nextTick(()=>{
            new BScroll(this.$refs.wrapper,{});
          })
        }
      })
    }
}
</script>

<style lang="less" scoped>
#content .movie_body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
}
#content .movie_body .wrapper {
  height: 100%;
}
#content .movie_body .wrapper ul {
  margin: 0 12px;
  overflow: hidden;
}
#content .movie_body .wrapper ul li {
  margin-top: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
#content .movie_body .pic_show {
  width: 64px;
  height: 90px;
}
#content .movie_body .pic_show img {
  width: 100%;
}
#content .movie_body .info_list {
  margin-left: 10px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
}
#content .movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .btn_mall,
#content .movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
#content .movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>