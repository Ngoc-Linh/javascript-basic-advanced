# Làm việc với chuỗi trong JavaScript

## 1. Kiểm tra độ dài chuỗi: `length`
- trả về độ dài của chuỗi.

```javascript
let str = "hello, world!";
console.log(str.length); // 13
```
## 2. tìm kiếm vị trí chuỗi

### a. `indexOf(substring)`
- tìm kiếm `string` trong chuỗi và  trả về vị trí đầu tiên của chuỗi.
- nếu không có string trong chuỗi thì trả về `-1`;
- có thêm thuộc tính thứ 2, tìm kiếm chuỗi bắt đầu từ vị trí x.
- được bắt đầu đếm từ số 0.
```javascript
let str = "Hello, World!";
console.log(str.indexOf("World")); // 7
console.log(str.indexOf("anh")) // -1 do không tìm thấy chuỗi trong str
console.log(str.indexOf("World", 8)); // 14
```

### b. `lastIndexOf(substring)` 
- trả về vị trí cuối cùng của chuỗi con
- k có thuộc tính thứ 2
```javascript
let str = "Hello, World!";
console.log(str.lastIndexOf("o")); // 8
```

## 3. tìm kiếm chuỗi (return true, false)

### a. `includes(substring)`

- kiểm tra chuỗi có chứa chuỗi con hay không 
- trả về true or false

```javascript
let str = "Hello, World!";
console.log(str.includes("Hello")); // true
```
### b. `startWith(substring)`  & `endsWith(substring)`

- startWith(substring) : kiểm tra chuỗi bắt đầu bằng chuỗi con.
- endsWith(substring): Kiểm tra chuỗi kết thúc bằng chuỗi con.

```javascript
let str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
```
## cắt chuỗi 

### a. `slice(start,end)`
- trích xuất 1 phần của chuỗi ( k bao gồm end)
- chấp nhận giá trị âm.
```javascript
let str = "Hello, World!";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(1)); // ello, World!
```
### b. `substring(start,end)`
- tương tự như slice(), nhưng k chấp nhận giá trị âm
```javascript
let str = "Hello, World!";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(1)); // ello, World!
```
### c. `substr(start, length)`
- trích xuất chuỗi với độ dài `length` xác định
```javascript
let str = "Hello, World!";
console.log(str.substr(0, 5)); // "Hello"
```

## convert chuỗi thành chữ hoa `toUpperCase()` và chữ thường `toLowerCase()`
```javascript
let str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
```
## thay thế chuỗi 

- `replace(searchValue, newValue)` : thay thế chuỗi con đầu tiên tìm thấy
- `replaceAll(searchValue, newValue)`: thay thế tất cả chuỗi con tìm thấy.

```javascript
let str = "Hello, World! Hello!";
console.log(str.replace("Hello", "Hi")); // "Hi, World! Hello!"
console.log(str.replaceAll("Hello", "Hi")); // "Hi, World! Hi!"
```

## loại bỏ khoảng trắng

- `trim()`: loại bỏ khoảng trắng ở đầu và cuối chuỗi.
- `trimStart()` : loại bỏ khoảng trắng ở đầu chuỗi
- `trimEnd()` : loại bỏ khoảng trắng ở cuối chuỗi

```javascript
let str = "   Hello, World!   ";
console.log(str.trim()); // "Hello, World!"
console.log(str.trimStart()); // "Hello, World!   "
console.log(str.trimEnd()); // "   Hello, World!"
```

## tách chuỗi
- `split()`: chuyển chuỗi thành mảng dựa vào ký tự chung

```javascript
let str = "apple,banana,orange";
let fruits = str.split(",");
console.log(fruits); // ["apple", "banana", "orange"]
```

## nối chuỗi: 
- `concat()` : nối 2 hay nhiều chuỗi lại với nhau

```javascript
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"
// lúc này string gốc là str1. còn str2 là str được nối 
```

## lặp chuỗi
- `repeat()`: lặp lại chuỗi 1 số lần xác định

```javascript
let str = "Hello ";
console.log(str.repeat(3)); // "Hello Hello Hello "
```

## truy cập ký tự
- `charAt(index)`: trả về ký tự tại vị trị index
- `charCodeAt(index)`: trả về mã unicode của ký tự tại vị trí index

```javascript
let str = "Hello";
console.log(str.charAt(0)); // "H"
console.log(str.charCodeAt(0)); // 72
```

## so sánh chuỗi : localeCompare()
- so sánh 2 chuỗi theo thứ tự bảng chữ cái
- trả về 
    + -1 nếu chuỗi đầu nhỏ hơn chuỗi thứ hai.
    + 0 nếu hai chuỗi bằng nhau.
    + 1 nếu chuỗi đầu lớn hơn chuỗi thứ hai.

```javascript
let str1 = "apple";
let str2 = "banana";
console.log(str1.localeCompare(str2)); // -1
```