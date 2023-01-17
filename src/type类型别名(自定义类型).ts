/** 类型别名（自定义类型）：为任意类型起别名。
 * 使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名，简化代码。
 * 关键字：type
 */

type CustomArray = (string|number)[];

let arr1:CustomArray = [1,'2']
let arr2:CustomArray = ['1','2']
console.log(arr1, arr2); 

type obj = {
    name:string
    age:number
    sayHi():void
}