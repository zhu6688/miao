<template>
<div id="content">
    <div class="login_body">
        <div class="email">
            邮箱: <input v-model="email" type="text" class="login_text"> <button :disabled="disabled" @touchstart="handleToVerify">{{verifyInfo}}</button>
        </div>
        <div>
            用户名： <input v-model="username" type="text" class="login_text">
        </div>
        <div>
            密码： <input v-model="password" type="password" class="login_text">
        </div>
        <div>
            验证码：<input v-model="verify" type="text" class="login_text">
        </div>
        <div class="login_btn">
            <button @touchstart="handleToReg">注册</button>
        </div>
        <div class="login_link">
            <router-link to="/mine/login">登录</router-link>
            <router-link to="/mine/findpassword">找回密码</router-link>
        </div>
    </div>
</div>
</template>

<script>
import {messageBox} from '@/components/js'
export default {
    name:'register',
    data(){
        return {
            email:'',
            username:'',
            password:'',
            verify:'',
            verifyInfo:'发送验证码',
            disabled:false
        }
    },
    methods:{
        handleToReg(){
            this.axios.post('/api2/users/register',{
                email:this.email,
                username:this.username,
                password:this.password,
                verify:this.verify
            }).then((res)=>{
                var that = this;
                if(res.data.status===0){
                    messageBox({
                        title:'注册',
                        content:'用户注册成功',
                        ok:'确定',
                        handleOk(){
                            that.$router.push('/mine/login');
                        }
                    })
                }else{
                    messageBox({
                        title:'注册',
                        content:res.data.msg+'请重新注册',
                        ok:'确定'
                    })
                }
            })
        },
        handleToVerify(){
            if(this.disabled){return}
            this.axios.get('/api2/users/verify?email='+this.email).then((res)=>{
                let status = res.data.status;
                var that = this;
                if(status===0){
                    messageBox({
                        title:'验证码',
                        content:'验证码已发送',
                        ok:'确定',
                        handleOk(){
                            that.countDown();
                        }
                    })
                }else{
                    messageBox({
                        title:'验证码',
                        content:'验证码发送失败',
                        ok:'确定'
                    })
                }
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            })
        },
        countDown(){
            this.disabled = true;
            var count = 60;
            var timer = setInterval(()=>{
                count--;
                this.verifyInfo = `剩余${count}秒`;
                if(count===0){
                    this.disabled = false;
                    count = 60;
                    this.verifyInfo = '发送验证码';
                    clearInterval(timer);
                }
            },1000)
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
        button{
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
    .email{
        position: relative;
        button{
            position: absolute;
            right:10px;
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