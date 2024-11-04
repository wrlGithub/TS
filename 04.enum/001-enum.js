// typescript 枚举
// 枚举中的值都是常量
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var color = Color.Red;
var Code;
(function (Code) {
    Code[Code["success"] = 200] = "success";
    Code[Code["error"] = 500] = "error";
})(Code || (Code = {}));
var code = Code.success;
// 数值枚举
var CarType;
(function (CarType) {
    CarType[CarType["Honda"] = 999] = "Honda";
    CarType[CarType["BMW"] = 1000] = "BMW";
    CarType[CarType["Toyota"] = 1001] = "Toyota";
})(CarType || (CarType = {}));
console.log(CarType.Honda);
// 字符串枚举
// 字符串枚举值需要单独初始化
var CarBrand;
(function (CarBrand) {
    CarBrand["Honda"] = "Honda";
    CarBrand["BMW"] = "BMW";
    CarBrand["Toyota"] = "Toyota";
})(CarBrand || (CarBrand = {}));
console.log(CarBrand.Honda);
// 枚举反向映射
var CarBrand2;
(function (CarBrand2) {
    CarBrand2[CarBrand2["Honda"] = 1] = "Honda";
    CarBrand2[CarBrand2["BMW"] = 2] = "BMW";
    CarBrand2[CarBrand2["Toyota"] = 3] = "Toyota";
})(CarBrand2 || (CarBrand2 = {}));
console.log(CarBrand2.Honda);
console.log(CarBrand2['BMW']);
console.log(CarBrand2[3]);
// 计算枚举
function getCarTypeCode(carName) {
    if (carName === 'toyota') {
        return 5;
    }
}
var CarType2;
(function (CarType2) {
    CarType2[CarType2["Honda"] = 1] = "Honda";
    CarType2[CarType2["Toyota"] = getCarTypeCode('toyota')] = "Toyota";
    CarType2[CarType2["Subaru"] = CarType2.Toyota * 3] = "Subaru";
    CarType2[CarType2["Hyundai"] = 10] = "Hyundai";
})(CarType2 || (CarType2 = {}));
