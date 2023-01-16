/** 联合类型：两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种，使用‘|’(竖线)表示。 */
//1. 添加小括号，表示：首先是数组，然后，数组元素可以是number或string
let arr:(number|string)[] = [1,'2',3];
arr.push(123)
arr.push("hello")
// 错误：arr.push(false)

// 2. 不加小括号，表示是number或string类型数组
let arr1:number |string[] = ['2'];
arr1 =1

