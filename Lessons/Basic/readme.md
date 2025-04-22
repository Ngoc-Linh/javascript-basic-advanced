# Javascript

JavaScript là một ngôn ngữ lập trình phổ biến được sử dụng để phát triển web. Nó cho phép bạn tạo ra các trang web tương tác và năng động.

**chúng ta tìm hiểu các vấn đề sau:**
- Biến
- Toán tử
## Biến - Variables

Tên các biến nên đặt theo chuẩn `camelCase`

Trong JavaScript, bạn có thể khai báo biến bằng các từ khóa `var`, `let`, và `const`. Dưới đây là sự khác nhau giữa chúng:

### 1. `var`
- được sử dụng từ các phiên bản javascript cũ
- có **phạm vi hàm** (function scope)
- có thể khai báo lại trong cùng 1 phạm vi

```javascript
function exVar() {
  var x = 10;
  var isActive = true;
  if(isActive){
    var x = 20; // cùng 1 phạm vi nhưng giá trị bị ghi đè lại : 20
    console.log(x) // 20
  }
  console.log(x) // 20
}
exVar()
```
### 2. `let`
- Được giới thiệu trong ES6 (ECMAScript 2015).
- có **phạm vi khối** (block scope)
- k được khai báo lại trong cùng 1 phạm vi
- Ví dụ:
  ```javascript
  function exLet() {
    let x = 10;
    const isActive = true;
    if(isActive){
      let x = 20; // cùng 1 phạm vi nhưng k bị ảnh hưởng bên ngoài
      console.log(x) // 20
    }
    console.log(x) // 10 => là giá trị ban đầu 
  }
  exLet()
  ```

### 3. `const`
- Được giới thiệu trong ES6 (ECMAScript 2015).
- Có **phạm vi khối** (block scope).
- Không thể được khai báo lại hoặc k thể gán lại giá trị trong cùng một phạm vi.
- Ví dụ:
  ```javascript
  const PI = 3.14;
  console.log(PI); // 3.14

  // PI = 3.15; // Lỗi: Assignment to constant variable
  ```

### So sánh var, let, và const

| Đặc điểm             | `var`                  | `let`                 | `const`               |
|----------------------|------------------------|------------------------|------------------------|
| **Phạm vi (Scope)**  | Hàm                    | Khối (`{}`)           | Khối (`{}`)           |
| **Khai báo lại**     | Có thể                 | Không thể             | Không thể             |
| **Gán lại giá trị**  | Có thể                 | Có thể                | Không thể             |

> 📌 **Ghi chú:**
> - `const`: Dùng cho **hằng số**, không thể gán lại. Tuy nhiên, nếu là object hoặc array thì vẫn có thể thay đổi **giá trị bên trong**.


### variable types

gồm các kiểu giá trị sau:
- `Number` : `let myArge = 17`
- `String`: `let myName = 'hello'`
- `Boolean` : `let isActive = true`
- `Array`: `let myArray = [20,10,10]`
- `Object`: `let myObject = {name: "Spot", breed: "Dalmatian"}`


## Toán tử
Toán tử trong JavaScript giúp bạn thực hiện các phép tính, so sánh, và các thao tác logic. Dưới đây là các loại toán tử cơ bản:

### 1. Toán tử số học (Arithmetic Operators)
Dùng để thực hiện các phép tính toán học.

| Toán tử | Mô tả              | Ví dụ              | Kết quả |
|---------|--------------------|--------------------|---------|
| `+`     | Cộng               | `5 + 2`           | `7`     |
| `-`     | Trừ                | `5 - 2`           | `3`     |
| `*`     | Nhân               | `5 * 2`           | `10`    |
| `/`     | Chia               | `5 / 2`           | `2.5`   |
| `%`     | Chia lấy dư        | `5 % 2`           | `1`     |
| `++`    | Tăng 1 đơn vị      | `let x = 5; x++`  | `6`     |
| `--`    | Giảm 1 đơn vị      | `let x = 5; x--`  | `4`     |

### 2. Toán tử gán (Assignment Operators)
Dùng để gán giá trị cho biến.

| Toán tử | Mô tả                     | Ví dụ         | Kết quả |
|---------|---------------------------|---------------|---------|
| `=`     | Gán                      | `x = 10`      | `10`    |
| `+=`    | Cộng và gán               | `x += 5`      | `x = x + 5` |
| `-=`    | Trừ và gán                | `x -= 5`      | `x = x - 5` |
| `*=`    | Nhân và gán               | `x *= 5`      | `x = x * 5` |
| `/=`    | Chia và gán               | `x /= 5`      | `x = x / 5` |
| `%=`    | Chia lấy dư và gán        | `x %= 5`      | `x = x % 5` |

### 3. Toán tử so sánh (Comparison Operators)
Dùng để so sánh hai giá trị và trả về kiểu dữ liệu dạng Boolean 

| Toán tử | Mô tả                     | Ví dụ          | Kết quả |
|---------|---------------------------|----------------|---------|
| `==`    | Bằng                      | `5 == '5'`     | `true`  |
| `===`   | Bằng (cả giá trị và kiểu) | `5 === '5'`    | `false` |
| `!=`    | Không bằng                | `5 != '5'`     | `false` |
| `!==`   | Không bằng (cả giá trị và kiểu) | `5 !== '5'` | `true`  |
| `>`     | Lớn hơn                   | `5 > 3`        | `true`  |
| `<`     | Nhỏ hơn                   | `5 < 3`        | `false` |
| `>=`    | Lớn hơn hoặc bằng         | `5 >= 5`       | `true`  |
| `<=`    | Nhỏ hơn hoặc bằng         | `5 <= 3`       | `false` |

### 4. Toán tử logic (Logical Operators)
Dùng để thực hiện các phép toán logic và trả về kiểu dữ liệu dạng Boolean 

| Toán tử | Mô tả                     | Ví dụ                  | Kết quả |
|---------|---------------------------|------------------------|---------|
| `&&`    | Và (AND)                  | `true && false`        | `false` |
| `||`    | Hoặc (OR)                 | `true || false`        | `true`  |
| `!`     | Phủ định (NOT)            | `!true`                | `false` |

### 5. Toán tử điều kiện 3 ngôi (Ternary Operator)
Dùng để viết gọn câu lệnh điều kiện `if-else`.

Cú pháp:
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

ví dụ

```javascript
let age = 18;
let message = age >= 18 ? "Bạn đủ tuổi" : "Bạn chưa đủ tuổi";
console.log(message); // "Bạn đủ tuổi"
```

### 6. Toán tử chuỗi (String Operators)

Toán tử chuỗi được sử dụng để nối chuỗi hoặc thực hiện các thao tác liên quan đến chuỗi.

| Toán tử | Mô tả                     | Ví dụ                        | Kết quả         |
|---------|---------------------------|------------------------------|-----------------|
| `+`     | Nối chuỗi                 | `'Hello' + ' World'`         | `'Hello World'` |
| `+=`    | Nối và gán chuỗi          | `let x = 'Hello'; x += ' World';` | `'Hello World'` |

Ví dụ:
```javascript
let greeting = "Hello";
let name = "John";
let message = greeting + ", " + name + "!";
console.log(message); // "Hello, John!"
```

### 7. Toán tử khác (Miscellaneous Operators)

#### a. `typeof`
- Dùng để kiểm tra kiểu dữ liệu của một giá trị hoặc biến.
- Ví dụ:
  ```javascript
  console.log(typeof 42); // "number"
  console.log(typeof "Hello"); // "string"
  console.log(typeof true); // "boolean"
  ```

#### b. `instanceof`
- Dùng để kiểm tra một đối tượng có thuộc kiểu cụ thể hay không.
- Ví dụ:
  ```javascript
  let arr = [];
  console.log(arr instanceof Array); // true
  console.log(arr instanceof Object); // true
  ```

#### c. Toán tử dấu phẩy (Comma Operator `,`)
- Dùng để đánh giá nhiều biểu thức và trả về giá trị của biểu thức cuối cùng.
- Ví dụ:
  ```javascript
  let x = (1, 2, 3);
  console.log(x); // 3
  ```

#### d. Toán tử xóa (Delete Operator)
- Dùng để xóa một thuộc tính của đối tượng.
- Ví dụ:
  ```javascript
  let obj = { name: "John", age: 30 };
  delete obj.age;
  console.log(obj); // { name: "John" }
  ```

#### e. Toán tử destructuring  3 chấm (Spread/Rest Operator `...`)
- Dùng để sao chép hoặc gộp các phần tử của mảng hoặc đối tượng.
- Ví dụ:
  ```javascript
  let arr1 = [1, 2, 3];
  let arr2 = [...arr1, 4, 5];
  console.log(arr2); // [1, 2, 3, 4, 5]

  let obj1 = { name: "John" };
  let obj2 = { ...obj1, age: 30 };
  console.log(obj2); // { name: "John", age: 30 }
  ```

## Điều kiện (Conditional Statements)

dùng để thực thi các đoạn code khác nhau dựa vào điều kiện khác nhau

### 1. `if`, `else if`, `else`
- dùng để kiểm tra điều kiện và trả về code tương ứng
- điều kiện thuộc dạng `Boolean`
- Cú pháp:
  ```javascript
  if (condition) {
    // Thực thi nếu điều kiện đúng
  } else if (anotherCondition) {
    // Thực thi nếu điều kiện khác đúng
  } else {
    // Thực thi nếu tất cả các điều kiện đều sai
  }
  ```
- Ví dụ:
  ```javascript
  let age = 20;

  if (age < 18) {
    console.log("Bạn chưa đủ tuổi.");
  } else if (age === 18) {
    console.log("Bạn vừa đủ tuổi.");
  } else {
    console.log("Bạn đủ tuổi.");
  }

  ```
- có 6 giá trị là  `0`, `'' or ""` , `false`, `NaN`,`underfine`, `null` khi javascript phiên dịch thì sẽ tự động chuyển sang kiểu boolean là `false`. 

```javascript
let x = '';
/* với x = ''
 x = ""
x = 0 
x = false
x = NaN
x = underfine
x = null

thì luôn trả về điều kiện sai
khác 6 kiểu dữ liệu trên thì luôn trả về true
vd x = 1 or x = "hello"
thì trả về điều kiện đúng
*/
if(x) {
  console.log('điều kiện đúng');
}else {
  console.log('điều kiện sai');
}

```

### 2. `switch` câu lệnh rẻ nhánh
- Dùng để kiểm tra giá trị của một biến hoặc biểu thức với nhiều trường hợp (case). còn dưới 3 case thì chuyển qua dùng `if else`.
- nếu k dùng `break` thì nó sẽ tính từ khi giá trị đúng và thực hiện các case sau đó.
- ví dụ:
```javascript
  const value = 2; 
  switch(value) {
    case 2: //dùng phép toàn so sánh === để kiểm tra true or false
      // nếu đúng thì thực hiện code 
      console.log("giá trị là 2");
      break; // ngăn không thực hiện case tiếp theo và thoát khỏi điều kiện. 
    case 3: 
      console.log("giá trị là 3");
      break; 
    case 4: 
      console.log("giá trị là 4");
      break; 
    case 5: 
      console.log("giá trị là 5");
      break; 
    default: 
      console.log("không có giá trị nào đúng");
  }
// trường hợp k dùng break
let value = 3;
switch(value) {
  case 2:
    console.log("giá trị là 2");
      break; 
  case 3:
    console.log("giá trị là 3");
  case 4: 
    console.log("giá trị là 4");
  case 5: 
      console.log("giá trị là 5");
  default: 
      console.log("không có giá trị nào đúng");
}
// lúc nào console sẽ thực hiện các câu lệnh từ case đến hết. gồm giá trị là 3,giá trị là 4,giá trị là 5...
```
### 3. Toán tử điều kiện 3 ngôi (Ternary Operator)
- Dùng để viết gọn câu lệnh `if-else`.
- Cú pháp:
  ```javascript
  condition ? expressionIfTrue : expressionIfFalse;
  ```
- Ví dụ:
  ```javascript
  let age = 18;
  let message = age >= 18 ? "Bạn đủ tuổi" : "Bạn chưa đủ tuổi";
  console.log(message); // "Bạn đủ tuổi"
  ```

### 4. `try...catch`
- Dùng để xử lý lỗi trong quá trình thực thi mã.
- Cú pháp:
  ```javascript
  try {
    // Đoạn mã có thể gây lỗi
  } catch (error) {
    // Xử lý lỗi
  } finally {
    // Đoạn mã luôn được thực thi (không bắt buộc)
  }
  ```
- Ví dụ:
  ```javascript
  try {
    let result = 10 / 0;
    console.log(result);
  } catch (error) {
    console.log("Có lỗi xảy ra:", error.message);
  } finally {
    console.log("Kết thúc xử lý.");
  }
  ```
## các kiểu dữ liệu

  javascript hỗ trợ nhiều kiểu dữ liệu khác nhau, nhưng được chia thành 2 nhóm chính `dữ liệu nguyên thuỷ` và `dữ liệu tham chiếu`

### 1. kiểu dữ liệu nguyên thuỷ (prinitive)

  các kiểu dữ liệu nguyên thuỷ lưu trữ giá trị trực tiếp trong bộ nhớ của máy tính

#### a. `Number`
- dùng để lưu trữ các số bao gồm cả số nguyên và số thực
```javascript
let age = 25; // số nguyên
Const PI = 3.14; // số thực
console.log(typeof age) // "number"
```

#### b. `String`
- dùng để lưu trữ chuỗi ký tự, có thể sử dụng dấu nháy đơn `'`, nháy kép `""` hoặc temple string` `

```javascript
let name = "Join";
let greeting = `hello, ${name}`;
```

#### c. `Boolean`

- dùng để lưu trữ giá trị true, false
- có thể đặt tên theo chuẩn `isName`

```javascript
const isActive = true;
console.log(isActive) // boolean
```

#### d. `undefined`
- là 1 biến được khai báo nhưng k có giá trị
```javascript
let x;
console.log(x) // undefined
```

#### e. `null`
- là biến có giá trị null hoặc trống '';
```javascript
let y = null;
console.log(y) // null
console.log(typeof y) // object ( đây là 1 lỗi trong javascript)
```

#### f. `Symbol` (es6)
- dùng để tạo ra các giá trị duy nhất.
- nhận 1 đối số là mô tả giá trị `description`
```javascript
let symbol1 = Symbol("description");
let symbol2 = Symbol("description");
console.log(symbol1 === symbol2) // false
```

#### g. `BigInt` (es11)
- dùng để lưu trữ các số nguyên lớn hơn giới hạn của `number`

```javascript
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"
```

### 2. kiểu dữ liệu tham chiếu (reference)

#### a. `Object`
- dùng lưu trữ các cặp `key-value`

```javascript
const person = {
  name: 'john',
  age: 30,
  isActive: true;
}
console.log(person.name) // john
```

#### b. `Array`
- dùng lưu trữ danh sách các giá trị. 
- key là các số tự động tăng , bắt đầu 0

```javascript
const info = ["john",30, true];
console.log(info[0])// john
console.log(typeof info) // object (Array cũng là 1 object)
```

#### c. `function`
- là 1 đối tượng đặt biệt có thể được gọi để thực thi mã.
- giống như khai báo biến, thì khai báo biến = function

```javascript
const greet = (name) => {
  return `hello, ${name}`;
}
console.log(greet("john")) // hello, john
```

#### d. `Date`
- dùng làm việc với ngày và giờ

```javascript
let nowDate = new Date();
console.log(nowDate) // hiển thị ngày giờ hiện tại của hệ thống
```

#### e. `RegExp`
- dùng làm việc với biểu thức chính quy

```javascript
let pattern = /hello/i;
console.log(pattern.test("hello world")) // true
```

### 3. Phân biệt kiểu dữ liệu nguyên thủy và tham chiếu
| Đặc điểm                  | Kiểu nguyên thủy (Primitive) | Kiểu tham chiếu (Reference) |
|---------------------------|-----------------------------|-----------------------------|
| **Lưu trữ**               | Lưu giá trị trực tiếp       | Lưu địa chỉ tham chiếu      |
| **Thay đổi giá trị**       | Không ảnh hưởng đến bản sao | Ảnh hưởng đến bản sao       |
| **Ví dụ**                 | `let x = 10;`              | `let obj = { key: "value" };` |


## Vòng lặp (loop)

### 1. `for` 
- dùng để lặp qua 1 đoạn mã với số lần xác định
- dùng cho array

```javascript
/* initialization: giá trị khởi tạo, thường dùng để tạo biến đếm (vd: const index = 0;)
  condition: điều kiện kiểm tra, nếu true thì vòng lặp tiếp tục, nếu false thì dừng vòng lặp
  afterthought: bước nhảy, thường dùng để tăng hoặc giảm giá trị biến đếm (i++ or i--)
*/
for(initialization; condition; afterthought) {
  // code here
}
```
- hoạt động của vòng lặp for
  + b1. thực hiện `initialization` khởi tạo giá trị. chỉ thực hiện 1 lần đầu tiên.
  + b2. kiểm tra điều kiện `condition`, nếu true thì thực hiện khối mã bên trong vòng lặp. nếu `false` thì thoát khỏi vòng lặp
  + b3. thực hiện khối mã trong vòng lặp
  + b4. thực hiện `afterthought` bước nhảy và quay lại kiểm tra điều kiện `condition`
  + b5. lặp lại các bước trên (k tính b1) cho đến khi điều kiện `false`

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4 // lúc này sẽ in ra từ 0 -> 4
}
```
**lưu ý** điều kiện `condition` nên khai báo biến và đưa vào vòng lặp for để tăng hiệu suất tải trang(ex: const myLength = array.length)
### 2. `for...in`
- dùng để lặp qua các thuộc tính (key) của 1 object, array, string
- có bao nhiêu key thì sẽ lặp qua bấy nhiêu lần
- Dùng object[key] để lấy value tương ứng
cú pháp 

```javascript
for (variable in object)
  statement
```
```javascript
// với object
const person = {
  name: "john",
  age: 30
}
for (let key in person) {
  console.log(key); // hiển thị gồm các key name, age
  // có key rồi ta có thể lấy value của key
  console.log(person[key]); // john, 30
}

// với array
const languages = ["java","python"];
for (let key in languages) {
  console.log(key); //lấy key:  0 ,1 là các index 
  console.log(languages[key]); // lấy giá trị: java, python
}
// với string
// thì sẽ tách text thành các chữ cái
const myString = "java";
for (let key in myString) {
  console.log(key) // tương tự như array, string sẽ hiện các index là 0, 1, 2, 3
  console.log(myString[key]); // hiển thị từng chứ cái: j, a, v, a
}
```

### 3. `for...of`
- dùng để lặp qua các giá trị của array, string
- đối với object thì ta sẽ convert qua dùng `Object.keys(obj)` hoặc `Object.values(obj)` rồi mới sử dụng for of

```javascript

// với array
const languages = ["java","python"];
for (let value of languages) {
  console.log(value); //java, python
}
// với string
const myString = "java";
for (let value of myString) {
  console.log(value) // hiển thị từng chứ cái: j, a, v, a
}

// với object
const person = {
  name: "john",
  age: 30
}
for (let value of Object.keys(person)) {
  console.log(value); // hiển thị gồm các key name, age
  // có key rồi ta có thể lấy value của key
  console.log(person[value]); // john, 30
}

// or 
for (let value of Object.values(person)) {
  console.log(value); //  john, 30
}
```

### 4. `while `
- dùng để lặp khi điều kiện là true
- như for, bắt buộc phải khai báo `initialization` khởi tạo giá trị và bước nhảy `afterthought` để k bị đứng trang
```javascript
while (condition) {
  // code thực thi khi condition còn đúng
}
```

```javascript
const i = 0; // initialization
while(i < 5) {
   console.log(i); // 0, 1, 2, 3, 4 // lúc này sẽ in ra từ 0 -> 4
   i++; // afterthought
}
```

### 5. `do ... while`

- tương tự như while nhưng đoạn mã luôn thực hiện ít nhất 1 lần trước khi kiểm tra điều kiện.
cú pháp: 
```javascript
do {
  // code thực thi ít nhất 1 lần
} while (condition);
```
ví dụ
```javascript
const i = 5; // initialization
do {
  console.log(i); // tuy sai nhưng vẫn in ra lần đầu tiên : 5
  i++;
}while(i < 3) // điều kiện sai, nhưng vẫn chạy 1 lần
```
### 6.  `break` & `continue`
- `break` dừng vòng lặp ngay lập tức
- `continue` bỏ qua lần lặp hiện tại và tiếp tục vòng lặp tiếp theo

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Dừng vòng lặp khi i = 3
  console.log(i); // 0, 1, 2
}

for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // Bỏ qua i = 3
  console.log(i); // 0, 1, 2, 4
}
```

## Đệ quy (recursion)
 là 1 kỹ thuật trong lập trình, trong đó 1 hàm tự gọi lại chính nó.

### cấu trúc của hàm đệ quy
1 hàm đệ quy cần có
- `xác định điểm dừng- base case`
- `logic handle => tạo ra điểm dừng - recursive call`

mục đích
- `ưu điểm`: mã code ngắn gọn, dễ đọc hơn so với sử dụng vòng lặp
- `nhược điểm`: có thể gây lỗi `stack overflow` nếu k có điểm dừng. nên cần phải chú ý khi dùng để tránh vòng lặp vô hạn

cú pháp

```javascript
function dequy(param) {
  if(baseCaseCondition) {
    // xác định điểm dừng
    return result;
  }else {
    // handle call
    return dequy(smallerProblem)
  }
}
```

ví dụ
```javascript
// input: [2,3,4,5,2,3]
// output: [2,3,4,5]
// dùng đệ quy
const numbers = [2,3,4,5,2,3];
const handleNumber = function(arr,result= [],index = 0){
    const _Length = arr.length;
    // xác định điểm dừng
    if(index >= _Length) return result;
    // kiểm tra trong mảng có phần tử nào hay k
    if(!result.includes(arr[index])){
        // nếu k có thì thêm vào mảng kết quả
        result.push(arr[index]);
    }
    // gọi đệ quy với index + 1
    return handleNumber(arr,result,index + 1);
}
console.log(handleNumber(numbers)); //[2, 3, 4, 5]
// or dùng vòng lặp
const newArr = [];
for(let index in numbers){
  // nếu k có giá trị thì mới push vào mảng mới
    if(!newArr.includes(numbers[index])) {
        newArr.push(numbers[index]);
    }
}
console.log(newArr); // [2, 3, 4, 5]
```