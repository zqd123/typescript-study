/**
 * readonly:
 * 1.使用readonly关键字修饰该属性是只读的，注意只能修饰属性不能修饰方法。
 * 2.注意：属性age后面的类型注解（比如，此处的number）如果不加，则age的类型为18（字面量类型）。
 * 3.接口或者{}表示的对象类型，也可以使用readonly。
 */
/**1.在class类中使用readonly */
class SuperMan{
    readonly name:string = 'Tom'
    // readonly fun():void //"readonly" 修饰符仅可出现在属性声明或索引签名中。
}
const man = new SuperMan()
// man.name = 'M'//无法分配到 "name" ，因为它是只读属性。

/**2.在type类型别名中使用readonly */
type People = {
    readonly name:string
}
const zqd:People = {
    name:'zqd'
}
// zqd.name = 'qdz'//无法分配到 "name" ，因为它是只读属性。

/**3.在interface接口中 */
interface OldMan{
    readonly name:string
}
const old:OldMan = {
    name:'qq'
}
// old.name = 'wx' //无法分配到 "name" ，因为它是只读属性。

//------------------------------------------------------------------
/**
 * 将class、type、interface中仅读属性修改为可写属性
 */
/**首先使用映射定义工具type，使用-号去掉readonly */
/**解释：
 * 下面表示把T类型中的每个字段去掉readonly修饰符
 */
type Writeable<T> = {
    -readonly [P in keyof T] : T[P]
}
/**为变量指定Writeable类型 */
const man1:Writeable<SuperMan> = new SuperMan()
man1.name = 'A'

const zqd1:Writeable<People> = {
    name:'zqd'
}
zqd1.name = 'qdz'

const old1:Writeable<OldMan> = {
    name:'qq'
}
old1.name = 'wx'