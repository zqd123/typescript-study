/**
 * 类型兼容性：
 * 1.对于对象类型来说，y的成员至少与x相同，则x兼容y（成员多的可以赋值给少的）
 */

class X{name:string;age:number}
class Y{name:string;age:number;gender:string}
const x:X = new Y()

/**
 * 除了class之外，ts中的其他类型也存在相互兼容的情况，包括：1.接口兼容性 2.函数兼容性等。
 * 接口之间的兼容性，类似于class。并且，class和interface之间也可以兼容。
 */