<template>
    <div class="city_body">
      <Loading v-if="isLoading"></Loading>
        <div v-else class="city_list">
          <Scroller ref="cityList">
            <div>
              <div class="city_hot">
                  <h2>热门城市</h2>
                  <ul class="clearfix">
                      <li v-for="item in hotList" :key="item.id" @tap="handleToCity(item.nm,item.id)">{{ item.nm }}</li>
                  </ul>
              </div>
              <div class="city_sort" ref="city_sort">
                  <div v-for="city in cityList" :key="city.index">
                      <h2>{{ city.index }}</h2>
                      <ul>
                        <li v-for="item in city.list" :key="item.id" @tap="handleToCity(item.nm,item.id)">{{ item.nm }}</li>
                      </ul>
                  </div>
              </div>
            </div>
          </Scroller>
        </div>
        <div class="city_index">
          <ul>
            <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)" >{{item.index}}</li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name:'city',
  data(){
    return{
      cityList:[],
      hotList:[],
      isLoading:true
    }
  },
  mounted(){

    var cityList = localStorage.getItem('cityList');
    var hotList = localStorage.getItem('hotList');
    if(cityList&&hotList){
      this.cityList = JSON.parse(cityList);
      this.hotList = JSON.parse(hotList);
      this.isLoading = false;
    }else{
      this.axios.get('/api/cityList').then(res=>{
        if(res.data.msg==='ok'){
          this.isLoading = false;
          let cities = res.data.data.cities;
          let {cityList,hotList} = this.formatCityList(cities);
          this.cityList = cityList;
          this.hotList = hotList;
          localStorage.setItem('cityList',JSON.stringify(cityList));
          localStorage.setItem('hotList',JSON.stringify(hotList));
        }
      })
    }
  },
  methods:{
    formatCityList(cities){
      let cityList = [];
      let hotList = [];
      cities.forEach((item)=>{
        if(item.isHot===1){
          hotList.push(item)
        }
      })

      // [{index:A,list:[{nm:'上海',id:12},...]}]
      cities.forEach(item => {
        let firstLetter = item.py.substring(0,1).toUpperCase();
        if(toCom(firstLetter)){ // 添加新的index
          cityList.push({index:firstLetter,list:[{nm:item.nm,id:item.id}]});
        }else{ // 累加到已有index中
          for(let j=0;j<cityList.length;j++){
            if(cityList[j].index===firstLetter){
              cityList[j].list.push({nm:item.nm,id:item.id})
            }
          }
        }
      });
      cityList.sort((n1,n2)=>{
        if(n1.index>n2.index){
          return 1;
        }
        else{
          return -1;
        }
      })
      function toCom(firstLetter){
        for(let i=0;i<cityList.length;i++){
          if(cityList[i].index===firstLetter){
            return false;
          }
        }
        return true;
      }
      return {
        cityList,
        hotList
      }
    },
    handleToIndex(index){
      var h2 = this.$refs.city_sort.getElementsByTagName('h2');
      //this.$refs.city_sort.parentNode.scrollTop  = h2[index].offsetTop;
      //this.$refs.cityList 这个得到的就是组件的对象，那么它下面的方法就能用
      this.$refs.cityList.toScrollTop(-h2[index].offsetTop);
    },
    handleToCity(nm,id){
      this.$store.commit('city/CITY_INFO',{nm,id});
      localStorage.setItem('nm',nm);
      localStorage.setItem('id',id);
      this.$router.push('/movie/nowPlaying');
    }
  }
}
</script>

<style lang="less" scoped>
#content .city_body {
  margin-top: 45px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
#content .city_body .city_list {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
#content .city_body .city_hot {
  margin-top: 20px;
}
#content .city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: 400;
}
#content .city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#content .city_body .city_sort div {
  margin-top: 20px;
}
#content .city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: 400;
}
#content .city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
#content .city_body .city_sort ul li {
  line-height: 30px;
}
#content .city_body .city_index {
  width: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #e6e6e6;
}
</style>