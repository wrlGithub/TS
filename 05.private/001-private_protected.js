// TypeScript 是一个结构类型语言
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public 属性可以在类的内部和外部自由访问。
// protected 属性可以在类的内部和继承自该类的子类中访问，但在类的外部无法访问。
// private 属性只能在类的内部访问，在类的外部和继承自该类的子类中都无法访问。
var Person = /** @class */ (function () {
    function Person(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, isMarried, employeeId) {
        var _this = _super.call(this, name, age, isMarried) || this; // 调用父类的构造函数
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getEmployeeId = function () {
        return this.employeeId.toString();
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    return Employee;
}(Person));
// 生成一个实例
var employee = new Employee('wang', 23, false, 11);
console.log(employee.getAge());
var Tesla = /** @class */ (function () {
    function Tesla() {
        this.maxMileage = 500;
    }
    return Tesla;
}());
var Nio = /** @class */ (function () {
    function Nio() {
        this.maxMileage = 500;
    }
    return Nio;
}());
function drive(car) {
    console.log(car.maxMileage);
}
var tesla = new Tesla();
var nio = new Nio();
drive(tesla); // ✔️
drive(nio); // ✔️
