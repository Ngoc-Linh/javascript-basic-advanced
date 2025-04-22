# Các hàm được javascript cung cấp 

## nhóm hàm xử lý web API (trình duyệt hỗ trợ)

là những hàm có sẵn trong môi trường trình duyệt, giúp bạn tương tác với người dùng

1. `alert()`

hiển thị `hộp thoại` với button `ok`

```javascript
alert("hello!");
```

2. `confirm()`

hiển thị `hộp thoại` với 2 button `ok` và `cancel`

```javascript
const result = confirm("Bạn có chắc chắn muốn xoá?");
if (result) {
  console.log("Đã xác nhận xoá."); // click ok
} else {
  console.log("Đã huỷ."); // click cancel
}
```

3. `prompt()`

hiển thị hộp thoại nhập dữ liệu từ người dùng

```javascript
const name = prompt("Bạn tên gì?");
alert(`Xin chào, ${name}!`);
// trả về chuỗi người dùng nhập vào, nếu click cancel thì trả về null
```

4. `setTimeout()`

thực hiện 1 đoạn code `sau khoảng thời gian` ( tính bằng mili-giây- ms). 
chỉ thực hiện chạy 1 lần duy nhất sau khoảng thời gian chờ.
nhận 2 thông số là function và thời gian chờ.

```javascript
setTimeout(function() {
    console.log('thông báo sau 1s');
}, 1000)
// say 1s thì consolog hiện `Thông báo sau 1 giây`
// or arrow function

setTimeout(() => {
    console.log('thông báo sau 1s');
}, 1000)
```

5. `setInterval() & clearInterval()`
setInterval() cũng như setTimeout nhưng nó được lặp lại nhiều lần sau khoảng thời gian chờ
clearInterval() để dừng lại setInterval
```javascript
const setIntervalId = setInterval(() => {
    console.log('lặp lại sau mỗi 1s');
}, 1000)
// cú liên tục sau 1s thì console hiện thông báo 
// sau 5s thì dừng hoạt động
setTimeout(() => {
    clearInterval(setIntervalId); // để dừng lặp
    console.log('dừng hoạt động');
},5000)
```

6. `console`

dùng để debug

```javascript
console.log("Ghi log thông thường");
console.warn("Cảnh báo");
console.error("Lỗi nghiêm trọng");
```



