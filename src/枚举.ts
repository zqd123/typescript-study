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