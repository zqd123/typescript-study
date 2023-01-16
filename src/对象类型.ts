/**
 * 对象类型
 */
const obj:{name:string;age:number;sayHello(str:string):void;greet(name:string):void} = {
    name:'bob',
    age:10,
    sayHello() {
        console.log('hello ts')
    },
    greet(name){}
}

// 换行可以省略分号,函数也可以使用箭头函数
const obj1:{
    name:string
    age:number
    sayHello:()=>void
} = {
    name:'bob',
    age:10,
    sayHello(){}
}

// 对象可选属性
function myAxios(config:{url:string;method:string}){
    console.log(config)
}