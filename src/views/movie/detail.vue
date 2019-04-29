<template>
<div id="detailContrainer" class="slide-enter-active">
    <Header title="影片详情">
        <span @touchstart="back">←</span>
    </Header>
    <div id="content" class="contentDetail">
        <div class="detail_list">
            <div class="detail_list_bg" :style="{ 'background-image':'url('+ detailMovie.img.replace(/w\.h/,'240.180') +')' }"></div>
            <div class="detail_list_filter"></div>
            <div class="detail_list_content">
                <div class="detail_list_img">
                    <img :src="detailMovie.img | setWH('140.180')">
                </div>
                <div class="detail_list_info">
                    <div class="detail_list_info">
                        <h2>{{ detailMovie.nm }}</h2>
                        <p>{{ detailMovie.enm }}</p>
                        <p>{{ detailMovie.sc }}</p>
                        <p>{{ detailMovie.cat }}</p>
                        <p>{{ detailMovie.src }} / {{ detailMovie.dur }}</p>
                        <p>{{ detailMovie.pubDesc }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail_intro">
            <p>{{detailMovie.dra}}</p>
        </div>
        <div class="detail_player swiper-container" ref="wrapper">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item,index) in detailMovie.photos" :key="index">
                    <div>
                        <img :src="item | setWH('140.127')">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components:{
        Header
    },
    data(){
        return {
            detailMovie:{},
        }
    },
    props:['movieId'],
    mounted(){
        this.axios.get('/api/detailmovie?movieId='+this.movieId).then(res=>{
            let msg = res.data.msg;
            if(msg==='ok'){
                this.detailMovie = res.data.data.detailMovie;
                this.$nextTick(()=>{
                    new Swiper (this.$refs.wrapper, {
                        slidesPerView:'auto'
                    });        
                });
            }
        })
    },
    methods: {
        back(){
            this.$router.back()
        }
    },
}
</script>

<style lang="less" scoped>
#detailContrainer{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background: #fff;
}
#content{
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
}
.contentDetail{
    display: block;
    margin-bottom: 0;
    .detail_list{
        height: 200px;
        width: 100%;
        position: relative;
        overflow: hidden;
        .detail_list_bg{
            width: 100%;
            height: 100%;
            background: 0 40%;
            -webkit-filter: blur(20px);
            filter: blur(20px);
            background-size: cover;
            position: absolute;
            left: 0;
            top: 0;
        }
        .detail_list_filter{
            width: 100%;
            height: 100%;
            background-color: #40454d;
            opacity: .55;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
        }
        .detail_list_content{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
        }
        .detail_list_img{
            width: 108px;
            height: 150px;
            border: 1px solid #f0f2f3;
            margin: 20px;
        }
        img{
            width: 100%;
            height: 100%;
        }
        .detail_list_info{
            margin-top: 20px;
            h2{
                font-size: 20px;
                color: #fff;
                font-weight: 400;
                line-height: 40px;
            }
            p{
                color: #fff;
                line-height: 20px;
                font-size: 14px;
                color: #ccc;
            }
        }
    }
    .detail_intro{
        padding: 10px;
    }
    .detail_player{
        margin: 20px;
    }
}
.detail_player .swiper-slide{
    width: 70px;
    margin-right: 20px;
    text-align: center;
    font-size: 14px
}

.detail_player .swiper-slide img{
    width: 100%;
    margin-bottom: 5px
}
.slide-enter-active{
    animation: .3s slideMove;
}
@keyframes slideMove {
    0%{
        transform: translateX(100%),
    }
    100%{
        transform: translateX(0);
    }
}
</style>