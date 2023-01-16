/**
 * 参数类型
 * 返回值类型
 */
// 1. 单独为参数和返回值指定类型
function add(number1:number,number2:number):number{
    return number1+number2
}
//  函数表达式形式
const add1 = (number1:number,number2:number) => {
    return number1+number2
}
// 2. 同时为参数和返回值指定类型（这种形式只适用于函数表达式形式）
const add2:(number1:number,number2:number)=>number = (number1,number2)=>{
    return number1+number2
}

// 3. 函数没有返回值，返回类型是void
function reVoid():void{
    console.log('返回void')
}

// 4. 函数可选参数，使用?,（可选参数只能出现在参数列表的最后，也就是可选参数后面不能再有必选参数）
function mySlice(start?:number,end?:number):void{
    console.log(start,end)
}
mySlice()
mySlice(1)
mySlice(1,3)