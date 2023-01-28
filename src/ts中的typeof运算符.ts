/**
 * typeof
 */

//js中
console.log(typeof 'hello ts'); // string

//ts也提供了typeof操作符：可以在类型上下文中引用变量或属性的类型（类型查询）
// 使用场景：根据已有变量的值，获取该值的类型，来简化类型书写。

let p = {x:1, y:2};
function formatPoint(point:{x:number,y:number}){}
formatPoint(p); 
//使用typeof
function formatPoint1(point:typeof p){}
formatPoint1({x:1,y:3})

/**
 * 解释：
 * 1.使用typeof操作符来获取变量p的类型，结果与第一种（对象字面量形式的类型）相同。
 * 2.typeof出现在类型注解的位置（参数名称的冒号后面）所处的环境就在类型上下文（区别于js代码）
 * 3.注意：typeof只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）。
 */