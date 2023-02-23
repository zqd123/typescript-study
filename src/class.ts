/**
 * 1. 成员初始化（比如，age:number）后，才可以通过this.age来访问实例成员。
 * 2.需要为构造函数指定类型注解，否则会被隐式推断为any;构造函数不需要返回值类型。
 */

/**
 * 基本使用
 */
class Person{
    age:number
    gender:string = '男'
    //构造函数不能指定返回类型
    constructor(age:number,gender:string){
        this.age = age
        this.gender = gender
    }
}
//普通的对象
var person = new Person(1,'男')
person.age
person.gender


/**
 * 实例方法
 */
class Point{
    x = 10
    y = 20
    scale(n:number):void{
        this.x *= n
        this.y *= n
    }
}

const point = new Point()
point.scale(3)
console.log(point.x,point.y)

/**
 * 类的继承：
 * 1. extends（继承父类）
 * 2. implements （实现接口）
 * 说明：js中只有extends，而implements是ts提供的。
 */
class Animal{
    move():void{
        console.log('走');
    }
}
class Dog extends Animal{
    run():void{
        console.log('跑')
    }
}

const d = new Dog()
d.move()

/**
 * implements实现接口：接口更像是对子类的约束，子类必须定义哪些属性和实现哪些方法。
 * 1.通过implements关键字让class实现接口
 * 2.Person1类实现接口singable意味着，Person1类中必须提供/实现Singable接口中指定的所有方法和属性。
 */


interface Singable{
    name:string
    sing():void
}

class Person1 implements Singable{
    name: string
    sing(): void {
        console.log('唱歌')
    }
}

const p1 = new Person1()
p1.sing()

/**
 * 类成员可见性：可以使用ts来控制class的方法或属性对于class外的代码是否可见。
 * 可见性修饰符包括：1.public（共有的） 2.protected（受保护的） 3.private（私有的）
 * 1. public：表示公有的、公开的，公有成员可以被任何地方访问，默认可见性（public）
 */

/**
 * 解释：
 * 1.在类属性或方法前面添加public关键字，来修饰该属性或方法是公有的。
 * 2.因为public是默认可见性，所以，可以直接省略。
 * 3.protected：表示受保护的，仅对其声明的所在类和子类中可见，父类和子类的实例中都不可见。
 * 4.private：表示私有的，只在当前类中可见，对实例对象以及子类都不可见。
 * 5.readonly：表示只读，只能在构造函数中进行赋值。只能修饰属性，不能修饰方法
 */
{
class Animal1{
    public name:string
    readonly age:number = 18
    // 只要是readonly修饰的属性，必须手动提供明确的类型。
    readonly num = 18 // 如果不加类型注解，num的类型为18（字面量类型）
    readonly obj:{x:number,y:number} = {x:18,y:18}
    constructor(age:number){
        this.age = age
    }
    protected move():void{
        console.log('走（protected）');
    }
    private privFun():void{
        console.log('私有的（private）')
    }
    paramentFun():void{
        this.move()//可以访问所在类protected修饰的move方法
        this.privFun()//可以访问所在类private修饰的privFun方法
    }
}
class Dog1 extends Animal1{
    constructor(age:number){
        super(age)
    }
    run():void{
        this.move()// 可以访问父类protected修饰的move方法
        // this.privFun()//error：属性“privFun”为私有属性，只能在类“Animal1”中访问。
        console.log('跑')
    }
}
const a1 = new Animal1(20)
// a1.move() //报错
const d1 = new Dog1(30)
// d1.move() //报错
// a1.age = 18 //无法分配到 "age" ，因为它是只读属性。
} 

/**
 * 解释：
 * 1.使用readonly关键字修饰该属性是只读的，注意只能修饰属性不能修饰方法。
 * 2.注意：属性age后面的类型注解（比如，此处的number）如果不加，则age的类型为18（字面量类型）。
 * 3.接口或者{}表示的对象类型，也可以使用readonly。
 */