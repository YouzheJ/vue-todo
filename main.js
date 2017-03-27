//初始化根实例之前注册组件
Vue.component('my-component', {
    template: '<div>{{ textMessage }} counter:{{ counter }}</div>',
    props: ['textMessage', 'counter'],
    data: function () {
        return {
            message: ''
        }
    }
})
//局部注册
var Child = {
    template: '<div>A child template!</div>'
}
//初始化根实例
var app = new Vue({
    el: '.app',
    data: {
        message: 'hello vue',
        todos: []
    },
    components: {
        'child-component': Child
    },
    methods: {
        createItem: function () {
            console.log(this.message);
            this.todos.push(this.message)
            this.message = ''
        },
        deleteItem: function  ( index ) {
            this.todos = this.todos.filter(function(item,i){
                return i !== index
            })
        }
    }
})