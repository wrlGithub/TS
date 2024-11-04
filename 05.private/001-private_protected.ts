// TypeScript 是一个结构类型语言

// public 属性可以在类的内部和外部自由访问。
// protected 属性可以在类的内部和继承自该类的子类中访问，但在类的外部无法访问。
// private 属性只能在类的内部访问，在类的外部和继承自该类的子类中都无法访问。
class Person {
    public name: string;
    protected age: number;
    private isMarried: boolean;

    constructor(name: string, age: number, isMarried: boolean) { 
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }

}

class Employee extends Person {
    public employeeId: number;
    constructor(name: string, age: number, isMarried: boolean, employeeId: number) {
        super(name, age, isMarried); // 调用父类的构造函数
        this.employeeId = employeeId;
    }
    public getEmployeeId(): string {
        return this.employeeId.toString();
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    // public getIsMarried(): boolean {
    //     return this.isMarried;
    // }
}
// 生成一个实例
let employee = new Employee('wang', 23, false, 11);
console.log(employee.getAge());

interface Car {
    maxMileage: number;
  }
  
  class Tesla implements Car {
     maxMileage: number = 500;
  }
  
  class Nio implements Car {
     maxMileage: number = 500;
  }
  
  function drive(car :Tesla) {
     console.log(car.maxMileage)
  }
  
  let tesla = new Tesla();
  let nio = new Nio();
  drive(tesla); // ✔️
  drive(nio); // ✔️