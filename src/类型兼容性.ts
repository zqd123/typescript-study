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
interface Point{x:number;y:number}
interface Point2d{x:number;y:number}
let p1:Point = {x:1,y:2}
let p2:Point2d = p1
interface Point3d{x:number;y:number;z:number}
let p3:Point3d = {x:1,y:2,z:3}
p2 = p3
// p3 = p1 //error：类型 "Point" 中缺少属性 "z"，但类型 "Point3d" 中需要该属性。

//class和interface之间的兼容性
class Point3d{x:number;y:number;z:number}
let pp2:Point2d = new Point3d() 


/**
 * 函数之间的兼容性：比较复杂，需要考虑，参数个数、参数类型、返回值类型
 * 1. 参数个数，参数多的兼容参数少的（或者说，参数少的可以赋值给多的，目的是使用时可以省略不必要参数）
 */
type F1 = (a:number) => void;
type F2 = (a:number, b:number) => void;
let f1:F1 = (a:number) => {console.log(a)};
let f2:F2 = f1;

let ff2:F2 = (a:number, b:number) => {console.log(a,b)};
// let ff1:F1 = ff2//error:不能将类型“F2”分配给类型“F1”

/**
 * 解释：
 * 1.参数少的可以赋值给参数多的，所以f1可以赋值给f2
 * 2.数据forEach方法的第一个参数是回调函数，该示例中类型为：(value: string, index: number, array: string[]) => void。
 * 3.在js中省略用不到的函数实际上是很常见的，这样的使用方式，促成了ts中函数类型之间的兼容性。
 * 4.并且因为函数是有类型的，所以，ts会自动推导出参数item、index、array的类型。
 */
const arr = ['a','b','c']
arr.forEach(()=>{})
arr.forEach(item=>{console.log(item)})


/**
 * 参数类型兼容性：相同位置的参数类型要相同（原始类型）或兼容（对象类型）
 */
type FF1 = (a:number) => void;
type FF2 = (b:number) => void;
let fff1:FF1 = (a:number) => {console.log(a)};
const fff2:FF2 = fff1

//对象类型
interface Point2D {x:number;y:number}
interface Point3D {x:number;y:number;z:number}
type F2D=(p:Point2D)=>void
type F3D=(p:Point3D)=>void
let f2d:F3D= (p:Point2D)=>{console.log(p)};
let f3d:F3D=f2d
// f3=f4 //error:let f3: F3不能将类型“F4”分配给类型“F3”。参数“p”和“p” 的类型不兼容。类型 "Point2D" 中缺少属性 "z"，但类型 "Point3D" 中需要该属性。
/**
 * 解释：
 * 1.注意，此处与前面讲到的接口兼容性冲突。
 * 2.技巧：将对象拆开，把每个属性看做一个个参数，则参数少的（f2d）可以赋值给参数多的（f3d）。
 */


/**
 * 返回值类型，只关注返回值类型本身即可
 * 1.如果返回值类型是原始类型，此时两个类型要相同，比如，左侧类型F5和F6。
 * 2.如果返回值类型是对象类型，此时成员多的可以赋值给成员少的，比如右侧类型F7和F8.
 */
type F5 = ()=>string
type F6 = ()=>string
let f5:F5 = ()=>"hello";
let f6:F6 = f5

type F7 = ()=>{name:string}
type F8 = ()=>{name:string;age:number}
let f7:F7
let f8:F8 = ()=>({name:"tom",age:20})
f7 = f8


