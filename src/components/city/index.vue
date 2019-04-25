<template>
    <div class="city_body">
        <div class="city_list">
            <div class="wrapper">
                <div>
                    <div class="city_hot">
                        <h2>热门城市</h2>
                        <ul class="clearfix">
                            <li>北京</li>
                            <li>北京</li>
                            <li>北京</li>
                            <li>北京</li>
                            <li>北京</li>
                            <li>北京</li>
                        </ul>
                    </div>
                    <div class="city_sort">
                        <div>
                            <h2>A</h2>
                            <ul data-v-483a290e="" data-v-02c5313c=""><li data-v-483a290e="" data-v-02c5313c="">阿拉善盟</li><li data-v-483a290e="" data-v-02c5313c="">鞍山</li><li data-v-483a290e="" data-v-02c5313c="">安庆</li><li data-v-483a290e="" data-v-02c5313c="">安阳</li><li data-v-483a290e="" data-v-02c5313c="">阿坝</li><li data-v-483a290e="" data-v-02c5313c="">安顺</li><li data-v-483a290e="" data-v-02c5313c="">安康</li><li data-v-483a290e="" data-v-02c5313c="">阿勒泰</li><li data-v-483a290e="" data-v-02c5313c="">阿克苏</li><li data-v-483a290e="" data-v-02c5313c="">安吉</li><li data-v-483a290e="" data-v-02c5313c="">安丘</li><li data-v-483a290e="" data-v-02c5313c="">安岳</li><li data-v-483a290e="" data-v-02c5313c="">安平</li><li data-v-483a290e="" data-v-02c5313c="">安宁</li><li data-v-483a290e="" data-v-02c5313c="">安溪</li><li data-v-483a290e="" data-v-02c5313c="">安化</li><li data-v-483a290e="" data-v-02c5313c="">阿勒泰市</li><li data-v-483a290e="" data-v-02c5313c="">安福</li><li data-v-483a290e="" data-v-02c5313c="">阿荣旗</li><li data-v-483a290e="" data-v-02c5313c="">安陆市</li><li data-v-483a290e="" data-v-02c5313c="">安州区</li><li data-v-483a290e="" data-v-02c5313c="">阿城区</li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul data-v-483a290e=""><li data-v-483a290e="">A</li><li data-v-483a290e="">B</li><li data-v-483a290e="">C</li><li data-v-483a290e="">D</li><li data-v-483a290e="">E</li><li data-v-483a290e="">F</li><li data-v-483a290e="">G</li><li data-v-483a290e="">H</li><li data-v-483a290e="">J</li><li data-v-483a290e="">K</li><li data-v-483a290e="">L</li><li data-v-483a290e="">M</li><li data-v-483a290e="">N</li><li data-v-483a290e="">P</li><li data-v-483a290e="">Q</li><li data-v-483a290e="">R</li><li data-v-483a290e="">S</li><li data-v-483a290e="">T</li><li data-v-483a290e="">W</li><li data-v-483a290e="">X</li><li data-v-483a290e="">Y</li><li data-v-483a290e="">Z</li></ul>
        </div>
    </div>
</template>

<script>
export default {
    
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