# Làm việc với number

## 1. `toString()`
- chuyển đối số thành string

```javascript
let num = 123;
console.log(typeof num) // number
console.log(typeof num.toString()); // string
console.log(num.toString()); // "123"
```
## 2. `toFixed(number)`
- làm tròn số đến số thập phân được chỉ định.
- tự động làm tròn số thập phân 
    + nếu sau `.` có giá trị bé hơn `0.5` thì làm tròn xuống(3.14 ~ 3)
    + nếu sau `.` có giá trị lớn hơn hoặc bằng `0.5` thì làm tròn lên(3.5 ~ 4)
- typeof nó sẽ tự động chuyển thành string
```javascript
const PI = 3.1456789;
console.log(PI.toFixed()) // 3
console.log(PI.toFixed(2)) // 3.14
console.log(typeof PI.toFixed()) // string
```

## chuyển đổi string thành number

- `parseInt()` chuyển đổi chuỗi thành số nguyên
- `parseFloat()` chuyển đổi chuỗi thành số thực

```javascript
let strNum = "123"
console.log(parseInt(strNum)); // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
```

## `isNaN()`
- kiểm tra giá trị k phải là số hoặc phép tính sai
- trả về kiểu boolean
```javascript
const x = 12 / "abc";
console.log(x) // NaN
console.log(isNaN(x))// true
console.log(isNaN("abc")); // true
```