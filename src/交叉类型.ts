/**
 * 交叉类型（&）：功能类似于接口继承（extends），用于组合多个类型为一个类型（常用于对象类型）
 */
interface Person{name:string}
interface Contact{phone:string}
type PersonDetail = Person & Contact //相当于 {name:string,phone:string}
let obj:PersonDetail = {
    name:'Tom',
    phone:'1234567890',
}
/**
 * 解释：使用交叉类型后，新的类型PersonDetail就同时具备了Person和Contact的所有属性类型。
 */


/**
 * 交叉类型（&）和接口继承（extends）的对比：
 * 相同点：都可以实现对象类型的组合。
 * 不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同。
 */

interface A{
    fn:(value:number)=>string
}
//error：接口“B”错误扩展接口“A”。
// interface B extends A{
//     fn:(value:string)=>string 
// }

interface B{
    fn:(value:string)=>string 
}
type C = A & B

//说明：以上代码，接口继承会报错（类型不兼容）；交叉类型没有错误，可以简单的理解为：
// fn:(value:number | string)=>string
let obj1:C = {
    fn:(value:number | string)=>"test"
}
obj1.fn(10)
obj1.fn("10")
