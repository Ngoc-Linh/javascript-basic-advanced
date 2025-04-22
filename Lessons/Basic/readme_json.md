# JSON (javascript object notation)

- là `định dạng dữ liệu` (k phải là 1 kiểu dữ liệu) dùng để lưu trữ và truyền dữ liệu dạng text, có tương tự như object trong javascript
- JSON k hỗ trợ hàm function  -> vì nó chỉ chứa dữ liệu tĩnh
- JSON key phải nằm trong dấu `""`
- JSON có giá trị có thể là `string`, `number`, `null`, `object`, `array`, `boolean`
- đặc biệt trong việc trao đổi dữ liệu giữa client và server
## cấu trúc
- cấu trúc dưới dạng cặp `key-value` và có file `.json`
ví dụ
```json
{
    "name": "john",
    "age": 30,
    "isActive": true,
    "skills": ["JavaScript", "HTML", "CSS"],
    "address": {
      "city": "New York",
      "zip": "10001"
    }
}
```
## các phương thức
- `JSON.stringify(obj)` chuyển 1 object or array trong javascript thành chuỗi json (chuyển từ type javascript thành type string)
```javascript
const obj = { name: "John", age: 30, isActive: true }; // type javascript
const jsonString = JSON.stringify(obj);
console.log(jsonString);// type json
// '{"name":"John","age":30,"isActive":true}'
```
- `JSON.parse(string)` chuyển 1 chuỗi json thành object or array trong javascript (chuyển từ type json thành type javascript)

```javascript
const jsonString = '{"name":"John","age":30,"isActive":true}';
const obj = JSON.parse(jsonString);
console.log(obj); // { name: "John", age: 30, isActive: true }
```

ví dụ kết hợp api
- gửi dự liệu json
```javascript
const data = { name: "John", age: 30 }; // dữ liệu object trong javascript
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data), // chuyển object thành dạng json
});
```

- nhận dữ liệu json

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json()) // chuyển dữ liệu từ json thành object trong javascript
  .then((data) => console.log(data)); // truy cập dữ liệu json

```

- lưu trữ dữ liệu json trong localStorage
```javascript
const obj = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(obj));
```

- lấy dữ liệu trong localStorage
```javascript
const user = JSON.parse(localStorage.getItem("user"));
console.log(user); // { name: "John", age: 30 }
```