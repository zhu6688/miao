import Vue from 'vue';
import MessageBox from './messageBox';

export let messageBox = (function(){
    let defaults = {
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handleCancel:null,
        handleOk:null
    };

    let MyComponent = Vue.extend(MessageBox);
    return function(opt){
        let options = Object.assign({},defaults,opt);
        console.log(options);
        let vm = new MyComponent({
            el:document.createElement('div'),
            data:{
                title:options.title,
                content:options.content,
                cancel:options.cancel,
                ok:options.ok
            },
            methods:{
                handleCancel(){
                    options.handleCancel && options.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    options.handleOk && options.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });

        document.body.appendChild(vm.$el);
    }

})();


