<template>
    <div class="movie_body">
        <Scroller :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
            <ul>
                <li>{{pullDownMsg}}</li>
                <li v-for="item in movieList" :key="item.id">
                    <div class="pic_show" @tap="handleToDetail">
                        <img :src="item.img | setWH('128.180')">
                    </div>
                    <div class="info_list">
                        <h2>{{item.nm}} <em v-if="item.version" style="color:red;">3D</em> </h2>
                        <p>观众评 <span class="grade">{{item.sc}}</span></p>
                        <p>{{item.star}}</p>
                        <p>{{item.showInfo}}</p>
                    </div>
                    <div class="btn_pre">预售</div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>
//import BScroll from 'better-scroll';
export default {
    name:"nowPlaying",
    data(){
      return {
        movieList:[],
        pullDownMsg:''
      }
    },
    methods:{
      handleToDetail(){
        console.log('atb');
      },
      handleToScroll(pos){
        if(pos.y>30){
          this.pullDownMsg = '正在刷新'
        }
      },
      handleToTouchEnd(pos){
        if(pos.y>30){
          this.axios.get('/api/movieOnInfoList?cityId=11').then(res=>{
            let msg = res.data.msg;
            if(msg === 'ok'){
              this.pullDownMsg = '更新成功'
              setTimeout(()=>{
                this.movieList = res.data.data.movieList;
                this.pullDownMsg = ''
              },1000)
            }
          })
        }
      }
    },
    mounted(){
      this.axios.get('/api/movieOnInfoList?cityId=10').then(res=>{
        let msg = res.data.msg;
        if(msg === 'ok'){
          this.movieList = res.data.data.movieList;
          /* this.$nextTick(()=>{
            let scroll = new BScroll(this.$refs.wrapper,{
              tap:true,
              probeType:1
            })
            scroll.on('scroll',(pos)=>{
              if(pos.y>30){
                this.pullDownMsg = '正在刷新'
              }
            })
            scroll.on('touchEnd',(pos)=>{
              if(pos.y>30){
                this.axios.get('/api/movieOnInfoList?cityId=11').then(res=>{
                  let msg = res.data.msg;
                  if(msg === 'ok'){
                    this.pullDownMsg = '更新成功'
                    setTimeout(()=>{
                      this.movieList = res.data.data.movieList;
                      this.pullDownMsg = ''
                    },1000)
                  }
                })
              }
            })
          }) */
        }
      })
    },
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
#content .movie_body .info_list .grade{
      font-weight: 700;
    color: #faaf00;
    font-size: 15px;
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