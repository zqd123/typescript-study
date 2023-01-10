/** 类型推断 */

//1. 声明变量并赋值，可以省略类型注解
let a = 12

//类型检查依然生效
//错误：a='123' 

//2. 函数返回值
function add(num1:number,num2:number){
    return num1+num2;
}
add(1,2)

