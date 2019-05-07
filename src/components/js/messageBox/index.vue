<template>
<div class="messageBox">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div class="btns">
        <div v-if="cancel" @touchstart="handleCancel">{{cancel}}</div>
        <div v-if="ok" @touchstart="handleOk">{{ok}}</div>
    </div>
</div>
</template>

<script>
export default {
    name:'messageBox'
}
</script>

<style lang="less" scoped>
.messageBox{
    width: 200px;
    height: 120px;
    border:1px solid #ccc;
    border-radius: 4px;
    background: white;
    box-shadow: 0 0 10px ;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate3d(-50%,-50%,0);
    h2{
        text-align: center;
        line-height: 40px;
        font-size:18px;
    }
    p{
        line-height: 40px;
        text-align: center;
    }
    .btns{
        display:flex;
        border-top:1px solid #ccc;
        div{
            flex:1; text-align: center; line-height: 30px;
            border-right:1px solid #000;
        }
        div:nth-child(2){
            border:none;
        }
    }
}
</style>