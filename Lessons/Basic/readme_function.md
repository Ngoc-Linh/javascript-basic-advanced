# function javascript

- là 1 khối mã code có thể tái sử dụng và thực hiện 1 công việc, chức năng cụ thể

## các loại function và cách khai báo

có 3 loại function như sau: 

### 1. Function Declaration (hàm khai báo)
- hàm được định nghĩa bằng từ khoá `function`
- gọi hàm có thể được đặt trước khai báo hàm
```javascript
// ở đây có thể call func trước khi khai báo được
// nameFunction();
function nameFuction() { // khai báo hàm
    // code here
}
// call() gọi hàm
nameFunction();
```

### 2. function expression ( hàm biểu thức)
- hàm được gán cho 1 biến
- khi call function trước khi khai báo sẽ báo lỗi. bắt buộc gọi sau khi khai báo
```javascript
// nameFunction() báo lỗi ngay
const nameFuc = function() {
    // code here
}
// call()
nameFunction(); // phải gọi dưới khai báo
```

### 3. arrow function
- cách viết ngắn gọn hơn, được giới thiệu trong es6
- k có this
```javascript
const nameFuc = () => {
    // code here
}
// call()
nameFunction(); 
```

## Tham số (parameters)
- có thể đặt giá trị mặc định cho tham số

```javascript
const greet = function(name) {
    return `hello, ${name}`;
}
console.log(greet("john"));// hello, john
console.log(greet("john", "an")); // lỗi 
```
ở trên ta thấy, console thứ 2 ta chưa khai tham số thứ 2 thì dẫn để lỗi. để tránh tình trạng phải thêm nhiều tham số ta dùng `arguments`

## sử dụng `arguments`
- chứa tất cả các đối số được truyền vào hàm
- k áp dụng cho arrow function
- là 1 object array
```javascript
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4)); // 10
```
## toán tử Rest(...)
- thu thập các đối số còn lại thành 1 mảng
```javascript
function sum(...numbers) {
    return number.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4))//10
```

## Call back function (hàm gọi lại)
- hàm được truyền làm đối số cho 1 hàm khác

```javascript
function greetUser(name, callback) {
  console.log("Xin chào " + name);
  callback();
}

function sayBye() {
  console.log("Tạm biệt!");
}

greetUser("Nam", sayBye);
/*
Xin chào Nam
Tạm biệt!
*/
```
## hàm tự gọi 
- hàm được gọi ngay lập tức sau khi định nghĩa

```javascript
(function() {
    // code here
})();
```

