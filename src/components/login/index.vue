<template>
<div id="content">
    <div class="login_body">
        <div>
            <input v-model="username" type="text" class="login_text" placeholder="账户名/email">
        </div>
        <div>
            <input v-model="password" type="password" class="login_text" placeholder="请输入您的密码">
        </div>
        <div>
            <input type="text" v-model="verifyImg" class="login_text" placeholder="请输入验证码"> <img src="/api2/users/verifyImg" @touchstart="handleToImg">
        </div>
        <div class="login_btn">
            <input type="submit" value="登录" @touchstart="handleToLogin">
        </div>
        <div class="login_link">
            <router-link to="/mine/register">立即注册</router-link>
            <router-link to="/mine/findpassword">找回密码</router-link>
        </div>
    </div>
</div>
</template>

<script>
import {messageBox} from '@/components/js';
export default {
    name:'login',
    data(){
        return {
            username:'',
            password:'',
            verifyImg:''
        }
    },
    methods:{
        handleToLogin(){
            this.axios.post('/api2/users/login',{
                username:this.username,
                password:this.password,
                verifyImg:this.verifyImg
            }).then((res)=>{
                var that = this;
                if(res.data.status===0){
                    messageBox({
                        title:'登录',
                        content:'登陆成功',
                        ok:'确定',
                        handleOk(){
                            that.$router.push('/mine/center');
                        }
                    })
                }else{
                    messageBox({
                        title:'登录',
                        content:res.data.msg,
                        ok:'确定'
                    })
                }
            })
        },
        handleToImg(ev){
            ev.target.src="/api2/users/verifyImg?"+Math.random();
        }
    }
}
</script>

<style lang="less" scoped>
#content{
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    .login_body{
        width:100%;
    }
    .login_text{
        width: 100%;
        height: 40px;
        border: none;
        border-bottom: 1px solid #ccc;
        margin-bottom: 5px;
        outline: none;
        text-indent: 10px;
    }
    .login_btn{
        height: 50px;
        margin: 10px;
        input{
            width: 100%;
            height: 100%;
            background: #e54847;
            border-radius: 3px;
            border: none;
            display: block;
            color: #fff;
            font-size: 20px;
        }
    }
    .login_link{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        a{
            text-decoration: none;
            margin: 0 5px;
            font-size: 12px;
            color: #e54847;
        }
    }
}
</style>