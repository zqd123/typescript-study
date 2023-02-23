/**
 * 映射类型：基于旧类型创建新类型（对象类型），减少重复、提升开发效率。
 * 关键字：in
 * 常搭配关键字：keyof
 */

/**
 * 使用一：
 * 根据组合类型映射生成对象类型
 */
type Keys = 'x'|'y'|'z';
type Type1 = {[k in Keys]:number}
const t1:Type1 = {
    x:1,y:2,z:3
}

/**
 * 使用二：
 * 将原接口中的属性映射为只读可选的新类型
 */
interface OldFace{
name:string,
age:number
}
type MappingFace<T> = {
    readonly [P in keyof T]?:T[P]
}
type NewType = MappingFace<OldFace>;
const tt1:NewType={}