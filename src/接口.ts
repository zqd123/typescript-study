/**
 * 当一个对象类型被多次使用时，一般会使用接口（interface）来描述对象类型，达到复用的目的。
 */

//定义接口
interface IPerson{
    name:string
    age:number
    sayHi():void
}
interface IPerson1{name:string;age:number}

//使用
let person:IPerson={
    name:'zhang',
    age:20,
    sayHi() {},
}
let person1:IPerson={
    name:'zqd',
    age:22,
    sayHi() {},
}

console.log(person)