<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li>
                    <div class="img">
                        <img src="http://p0.meituan.net/128.180/movie/84096cd4b98c929c5959ac99a90efb15587032.jpg" alt="">
                    </div>
                    <div class="info">
                        <p><span>老师·好</span><span>9.3</span></p>
                        <p>Song of Youth</p>
                        <p>剧情,喜剧</p>
                        <p>2019-03-22</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'search'
}
</script>

<style lang="less" scoped>
#content .search_body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
}
#content .search_body .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
#content .search_body .search_input_wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 20px;
}
#content .search_body .search_input_wrapper i {
  font-size: 16px;
  padding: 4px 0;
}
#content .search_body .search_input_wrapper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
#content .search_body .search_result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
}
#content .search_body .search_result li {
  border-bottom: 1px dashed #c9c9c9;
  padding: 10px 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
#content .search_body .search_result .img {
  width: 60px;
  float: left;
}
#content .search_body .search_result .img img {
  width: 100%;
}
#content .search_body .search_result .info {
  float: left;
  margin-left: 15px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
#content .search_body .search_result .info p {
  height: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 22px;
  font-size: 12px;
}
#content .search_body .search_result .info p:first-of-type span:first-of-type {
  font-size: 18px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
#content .search_body .search_result .info p:first-of-type span:nth-of-type(2) {
  font-size: 16px;
  color: #fc7103;
}
</style>