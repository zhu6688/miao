<template>
<div id="content">
    <div class="login_body">
        <div class="email">
            邮箱: <input v-model="email" type="text" class="login_text"> <button @touchstart="handleToVerify">发送验证码</button>
        </div>
        <div>
            新密码： <input v-model="password" type="password" class="login_text">
        </div>
        <div>
            验证码：<input v-model="verify" type="text" class="login_text">
        </div>
        <div class="login_btn">
            <button @touchstart="handleToPassword">修改</button>
        </div>
        <div class="login_link">
            <router-link to="/mine/login">登录</router-link>
            <router-link to="/mine/register">注册</router-link>
        </div>
    </div>
</div>
</template>

<script>
import {messageBox} from '@/components/js'
export default {
    name:'findpassword',
    data(){
        return {
            email:'',
            password:'',
            verify:''
        }
    },
    methods:{
        handleToVerify(){
            this.axios.get('/api2/users/verify?email='+this.email).then((res)=>{
                let status = res.data.status;
                if(status===0){
                    messageBox({
                        title:'验证码',
                        content:'验证码已发送',
                        ok:'确定'
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
        handleToPassword(){
            this.axios.post('/api2/users/findpassword',{
                email:this.email,
                password:this.password,
                verify:this.verify
            }).then((res)=>{
                let status = res.data.status;
                let that = this;
                if(status===0){
                    messageBox({
                        title:'修改密码',
                        content:'修改密码成功',
                        ok:'确定',
                        handleOk(){
                            that.$router.push('/mine/login');
                        }
                    })
                }else{
                    messageBox({
                        title:'修改密码',
                        content:'修改密码失败',
                        ok:'确定',
                    })
                }
            })
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