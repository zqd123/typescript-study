/** 枚举 =  字面量类型+组合类型*/


enum Direction {
    up, right, down, left
}

function changeDirection(direction:Direction){
    console.log(direction);    
}
changeDirection(Direction.up)

/**
 * 枚举成员是有值的，默认为：从0开始自增的数值
 */
enum ErrorShowType {
    SILENT,
    WARN = 1<<1,
    ERROR = 1<<2,
    Notification = 1<<3,
    REDIRECT = 1<<4
}
console.log(5 << 1)
console.log(1 << 2)
console.log(ErrorShowType.ERROR)
/** 枚举 =  字面量类型+组合类型*/

// 数字枚举
enum Direction {
    up, right, down, left
}

function changeDirection(direction:Direction){
    console.log(direction);    
}
changeDirection(Direction.up)

//指定前一个值，后面递增
enum startNum{
    first = 1,
    second,
    third,
}
enum secondNum{
    first,
    second = 3,
    third
}

//给枚举成员初始化值
enum ErrorShowType {
    SILENT,
    WARN = 1<<1,
    ERROR = 1<<2,
    Notification = 1<<3,
    REDIRECT = 1<<4
}
console.log(5 << 1)
console.log(1 << 2)
console.log(ErrorShowType.ERROR)

/**
 * 字符串枚举
 */

// 字符串枚举没有自增行为，每个成员必须都要赋值
enum DirectionStr {
    UP = 'up',
    DOWN = 'down',
    RIGHT = 'right',
    LEFT = 'left'
}

/**
 * 枚举的特点及原理
 * 枚举是ts为数不多的非JavaScript类型级拓展（不仅仅是类型）的特性之一。
 * 因为：其他类型仅仅被当做类型，而枚举不仅用作类型，还提供值（枚举成员都是有值的）。
 * 也就是说，其他的类型会在便以为js代码时自动移除，但是，枚举类型会被编译为js代码。
 */
//  var DirectionStr;
//  (function (DirectionStr) {
//      DirectionStr["UP"] = "up";
//      DirectionStr["DOWN"] = "down";
//      DirectionStr["RIGHT"] = "right";
//      DirectionStr["LEFT"] = "left";
//  })(DirectionStr || (DirectionStr = {}));

// 说明：枚举与前面讲到的字面量类型+联合类型组合的功能类似，都用来表示一组明确的可选值列表。
// 一般情况下，推荐使用字面量类型+联合类型组合的方式，因为相比枚举，这种方式更加直观、简洁、高效。
