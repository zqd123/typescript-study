/** 字面量类型就是将具体的作为类型使用
 * 可以是具体数字、字符串、对象
 * 但一般会配合联合类型使用，即一组可选值
 */

// str1是一个变量（let），它的值可以是任何字符串，所以类型为string
let str1 = 'hello ts'


//str2是一个常量，他的值只能是'hello ts',所以，它的类型是'hello ts'
const str2 = 'hello ts'


/**
 * 某个特定的字符串也可以作为ts中的类型
 * 任意的字面量（对象，数字）都可以作为类型使用
 */
// 字符串
let str3:'hello ts' = 'hello ts'

// 数字
const num1 = 123
const num2:321 = 321

// 对象
const obj1:{name:"ts",age:32} = {name: 'ts', age: 32}

/**
 * 字面量类型一般配合联合类型使用
 * 用来标识一组明确的可选值
*/
//贪吃蛇，改变方向函数
function changeDirection(direction:'up'|'down'|'left'|'right') {
    console.log(direction)
}

//改变方向
changeDirection('up')
changeDirection('down')
changeDirection('left')
changeDirection('right')
// 错误changeDirection('up1')

