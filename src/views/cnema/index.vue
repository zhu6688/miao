<template>
    <div id="main">
        <Header title="我的影院"/>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城
                    <i class="iconfont icon-sanjiaoxing"></i>
                </div>
                <div class="brand_swtich">
                    品牌
                    <i class="iconfont icon-sanjiaoxing"></i>
                </div>
                <div class="feature_switch">
                    特色
                    <i class="iconfont icon-sanjiaoxing"></i>
                </div>
            </div>
            <Loading v-if="isLoading"></Loading>
            <div v-else class="cinema_body">
                <div class="wrapper">
                    <ul>   
                        <li v-for="item in cinemasList" :key="item.id">
                            <div>
                                <span>{{ item.nm }}</span>
                                <span class="q"><span class="price">{{ item.sellPrice }}</span>元起</span>
                            </div>
                            <div class="address">
                                <span>{{ item.addr }}</span>
                                <span>{{ item.distance }}</span>
                            </div>
                            <div class="card">
                                <div class="or" v-for="(i,index) in item.tag"  v-if="i===1" :key="index">
                                    {{ index | formatCard }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
    components:{
        Header,
        TabBar
    },
    filters:{
        formatCard(index){
            let card = [
                {index:'allowRefund',value:'改签'},
                {index:'endorse',value:'退'},
                {index:'sell',value:'折扣卡'},
                {index:'snack',value:'小吃'}
            ];
            for(let i=0;i<card.length;i++){
                if(card[i].index ===index){
                    return card[i].value;
                }
            }
            return '';
        }
    },
    data(){
      return {
        cinemasList:[],
        isLoading:true,
        prevCityId:-1
      }
    },
    activated(){
        let cityId = this.$store.state.city.id;
        if(this.prevCityId===cityId){return;}
        this.isLoading = true;
        this.axios.get('/api/cinemaList?cityId='+cityId).then(res=>{
            let msg = res.data.msg;
            if(msg==='ok'){
                this.isLoading = false;
            this.cinemasList = res.data.data.cinemas;
            this.prevCityId  = cityId;
            }
        })
    }
}
</script>

<style lang="less" scoped>
#content{
    .cinema_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: #fff;
        .iconfont{
            font-size:10px;
        }
    }
    .cinema_body{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: auto;
        div{
            margin-bottom: 10px;
        }
        ul{
            padding: 20px;
        }
        li{
            border-bottom: 1px solid #e6e6e6;
            margin-bottom: 20px;
        }
        .q{
            font-size: 11px;
            color: #f03d37;
        }
        .price{
            font-size:18px;
        }
        .address{
            font-size: 13px;
            color: #666;
            span:nth-of-type(2){
                float: right;
            }
        }
        .card{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            div{
                padding: 0 3px;
                height: 15px;
                line-height: 15px;
                border-radius: 2px;
                color: #f90;
                border: 1px solid #f90;
                font-size: 13px;
                margin-right: 5px;
            }
            .or{
                color: #f90;
                border: 1px solid #f90;
            }
        }
    }
}
</style>