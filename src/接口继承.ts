/**
 * 接口继承： 如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承实现复用。
 */

interface Point2D {x:number;y:number}

// extends（继承），Point3D就有了Point2D的所有属性和方法
interface Point3D extends Point2D {z:number}

const d3:Point3D = {x:12,y:22,z:34}