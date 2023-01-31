/**
 * 泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用，常用于：函数、接口、class中。
 * 需求：创建一个id函数，传入什么数据就返回该数据本身（也就是说，参数和返回值类型相同）。
 */
function id(value:any):any{return value}//如果将参数类型设置为any，就失去了ts类型保护。

// 创建泛型函数：
function id1<T>(v:T):T{return v}
// 调用泛型函数：
const nun = id1<number>(10)
const str = id1<string>('123')
//简化调用泛型函数（使用类型参数推断）
/**
 * 推荐：使用这种简化的方式调用泛型函数，使代码更短，更易于阅读。
 * 说明：当编译器无法推断类型或者推断的类型不准确时，就需要显式的传入类型参数。
 */
const num1 = id1(10)
/**
 * 解释：
 * 1.语法：在函数名称的后面添加<>（尖括号），尖括号中添加类型变量，比如此处的T。
 * 2.类型变量T，是一种特殊类型的变量，他处理类型而不是值。
 * 3.该类型变量相当于一个类型容器，能够捕获用户提供的类型（具体是什么类型由用户调用该函数时指定）。
 * 4.因为T是类型，因此可以将其作为函数参数和返回值的类型
 * 5.类型变量T，可以是任意合法的变量名称。
 */

//-----------------------------------------------------------------------------------------

/**
 * 泛型约束：默认情况下，泛型函数的类型变量T可以代表多个类型，这导致无法访问任何属性。
 */
// 比如：id2('a')使用函数时获取参数的长度：
function id2<T>(value:T):T{
    // console.log(value.length)//错误:T可以代表任意类型，无法保证一定存在length属性，比如number类型就没有length
    return value
}
id2('a')
/**
 * 为泛型添加约束来收缩类型（缩窄类型取值范围）
 * 两种方式：1.指定更加具体的类型，添加约束 
 */
//1.指定更加具体的类型
function id3<T>(v:T[]):T[]{
     console.log(v.length)
     return v
}
//比如，将类型修改为Type[](Type类型的数组)，因为只要是数组就一定存在length属性，因此就可以访问了。

//2.添加约束
interface ILength{length:number}
function id4<T extends ILength>(v:T):T{
    console.log(v.length)
    return v
}
id4("12")
// id4(123) //error:类型“number”的参数不能赋给类型“ILength”的参数
id4({length:10,name:'z'})//只要有length属性就可以
/**
 * 解释：
 * 1.创建描述约束的接口Ilength，该接口要求提供length属性。
 * 2.通过extends关键字使用该接口，为泛型（类型变量）添加约束。
 * 3.该约束标识：传入的类型必须具有length属性。
 * 注意：传入的实参（比如，数组）只要有length属性即可，这也符合前面讲到的接口的兼容性。
 */


//------------------------------------------------------------------------------------------------

/**
 * 多个泛型类型变量
 */
// 比如，创建一个函数来获取对象中属性的值：
function getPerson<T,K extends keyof T>(obj:T,key:K):void{
    console.log(obj[key])
}
const per1 = {name:'zz',age:22}
getPerson(per1,'name')
// getPerson(per1,'name1')//error:类型“"name1"”的参数不能赋给类型“"name" | "age"”的参数。
//一下补充内容，了解就可以
getPerson(18,'toFixed')
getPerson('abc','toString')
getPerson('abc',1)
getPerson(['a','v','d'],2)
getPerson([1,3,4],3)

/**
 * 解释：
 * 1.添加了第二个类型变量key，两个类型变量之间使用（，）逗号分隔。
 * 2.keyof关键字接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型。
 * 3.本示例中keyof T实际上获取的是person对象所有键的联合类型，也就是：'name' | 'age'。
 * 4.类型变量K受T约束，可以理解为：K只能是T所有键中的任意一个，或者说只能访问对象中存在的属性。
 */