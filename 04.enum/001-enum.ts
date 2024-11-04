// typescript 枚举
// 枚举中的值都是常量

enum Color {
  Red,
  Green = "green",
  Blue = "blue",
}

let color = Color.Red

enum Code {
    success = 200,
    error = 500
}
let code = Code.success

// 数值枚举
enum CarType {
    Honda = 999,
    BMW,
    Toyota,
}

console.log(CarType.Honda)

// 字符串枚举
// 字符串枚举值需要单独初始化
enum CarBrand {
    Honda = "Honda",
    BMW = "BMW",
    Toyota = "Toyota",
}
console.log(CarBrand.Honda)

// 枚举反向映射
enum CarBrand2 {
    Honda = 1,
    BMW,
    Toyota,
}
console.log(CarBrand2.Honda)
console.log(CarBrand2['BMW'])
console.log(CarBrand2[3])

// 计算枚举
function getCarTypeCode(carName: string): number {
    if (carName === 'toyota') {
        return 5;
    }
}
enum CarType2 {
    Honda = 1,
    Toyota = getCarTypeCode('toyota'),
    Subaru = Toyota * 3,
    Hyundai = 10
}
