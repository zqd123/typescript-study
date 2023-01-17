/**
 * 接口和对象别名
 * 1. 相同点：都可以为对象指定类型
 * 2. 不同点：
 *      接口只可以为对象指定类型
 *      类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名
 */
//接口
interface myPerson {
    name:string
    age:number
}

//类型别名
type myPerson1 = {
    name:string
    age:number
}
// 类型别名
type myType = string | number | string[]

const zs:myPerson = {
    name:'z',
    age:20
}