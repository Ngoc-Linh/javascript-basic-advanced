# Object
- là tập hợp các cặp `key-value`,

## cú pháp
- c1: sử dụng dấu ngoặc nhọn `{}`
```javascript
const objectName = {
    keyName: "value",// keyName là thuộc tính - property
    ["key-name2"]: "value2" // string sử dụng dấu ngoặc [] dùng khi tên thuộc tính là 1 chuỗi hoặc chứa ký tự đặc biệt
    getName: function() { // gọi là phương thức - method
        return this.keyName;
    },
    2: value3 // or number
}
// truy cập thuộc tính 
// c1. sử dụng dấu chấm `.`
console.log(objectName.keyName) // value
// c2. sử dụng dấu ngoặc vuông []
console.log(objectName["key-name2"]) // value2
```
- c2: sử dụng từ khoá `new Object()` nhưng ít sử dụng hơn
```javascript
    const objectName = new Object();
    objectName.keyName = value;
```
## thêm sửa xoá thuộc tính

```javascript
const person = { name: "John" };
person.age = 30; // thêm thuộc tính
person.name = "Doe"; // sửa thuộc tính
console.log(person); // { name: "Doe", age: 30 }
// xoá thuộc tính ta sử dụng từ khoá `delete`
delete.age;
console.log(person); // { name: "Doe" }
```

## Constructor object (hàm tạo đối tượng)

- hàm đặc biệt để `tạo nhiều đối tượng cùng loại`, giống như khuôn mẫu tạo ra các object
- sử dụng `this.keyName` và `new nameOject` để tạo đối tượng
- tưởng tượng nó như bản thiết kế 1 ngôi nhà
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const user1 = new Person("ngoc", 30);
const user2 = new Person("linh", 30);
console.log(user1)// Person {name: "ngoc", age: 30}
console.log(user2)// Person {name: "linh", age: 30}

```

## Object prototype 

như ta thấy để tạo constructor object , thì ta sử dụng `this` để tạo thuộc tính, phương thức và phạm vi nằm trong hàm khởi tạo. Nếu muốn tạo bên ngoài ta phải sử dụng thuộc tính ẩn `[[Prototype]]`

### 1. Thêm phương thức vào Prototype
- Bạn có thể thêm các phương thức hoặc thuộc tính vào prototype của một constructor để tất cả các đối tượng được tạo từ constructor đó có thể sử dụng.
- Ví dụ:
  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  // Thêm phương thức vào prototype
  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };

  const user1 = new Person("Ngoc", 30);
  const user2 = new Person("Linh", 25);

  console.log(user1.greet()); // "Hello, my name is Ngoc and I am 30 years old."
  console.log(user2.greet()); // "Hello, my name is Linh and I am 25 years old."
  ```

### 2. Kế thừa prototype
- Bạn có thể kế thừa prototype từ một constructor khác để tạo ra một constructor mới.
- Ví dụ:
  ```javascript
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    return `${this.name} makes a noise.`;
  };

  function Dog(name, breed) {
    Animal.call(this, name); // Gọi constructor của Animal
    this.breed = breed;
  }

  // Kế thừa prototype từ Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;

  Dog.prototype.speak = function () {
    return `${this.name} barks.`;
  };

  const dog = new Dog("Rex", "German Shepherd");
  console.log(dog.speak()); // "Rex barks."
  ```

### 3. Kiểm tra prototype của một đối tượng
- Bạn có thể kiểm tra prototype của một đối tượng bằng cách sử dụng phương thức `Object.getPrototypeOf`.
- Ví dụ:
  ```javascript
  const obj = {};
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
  ```

### 4. Thêm phương thức vào Object prototype
- Bạn có thể thêm phương thức vào prototype của Object để tất cả các đối tượng có thể sử dụng.
- Ví dụ:
  ```javascript
  Object.prototype.sayHello = function () {
    return "Hello from Object prototype!";
  };

  const obj = {};
  console.log(obj.sayHello()); // "Hello from Object prototype!"
  ```

### 5. Sử dụng phương thức từ Object prototype
- Bạn có thể sử dụng các phương thức có sẵn trong Object prototype.
- Ví dụ:
  ```javascript
  const obj = {};
  console.log(obj.toString()); // Tìm thấy trong Object.prototype
  ```

## object methods

### 1. lấy key / value / key-value

- `Object.keys(obj)`: trả về 1 mảng chứa tất cả các key của obj
- `Object.values(obj)`: trả về 1 mảng chứa tất cả các value của obj
- `Object.entries(obj)`: trả về 1 mảng chứa các cặp [key, value] của obj

```javascript
const person = { name: "John", age: 30, city: "New York" };
console.log(Object.keys(person)) // ["name", "age", "city"];
console.log(Object.values(person)) // ["John", 30, "New York"]
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["city", "New York"]]
```

### 2. Gộp object `Object.assign()`
- sao chép các thuộc tính từ 1 hoặc nhiều object thành 1 object

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.asign(target,source);
console.log(target) // { a: 1, b: 2, c: 3 }
```
### 3. tạo object kế thừa `Object.create()`
```javascript
const parent = { greet: () => console.log("Hello") };
const child = Object.create(parent);

child.greet(); // "Hello"
```

### 4. chuyển mảng thành object `Object.fromEntries()`

```javascript
const arr = [["name", "An"], ["age", 25]];
const obj = Object.fromEntries(arr);

console.log(obj); // { name: "An", age: 25 }
```
### 5. khoá object 
- `Object.freeze()` : ngăn k cho thay đổi object( k thể thêm, sửa, xoá thuộc tính)

```javascript
const obj = { name: "John" };
Object.freeze(obj);
obj.name = "Doe"; // Không thay đổi được
console.log(obj.name); // "John"
```
- `Object.seal()`: ngăn k cho thêm hoặc xoá thuộc tính. nhưng có thể sửa giá trị thuộc tính hiện có

```javascript
const obj = { name: "John" };
Object.seal(obj);
obj.name = "Doe"; // Thay đổi được
delete obj.name; // Không xóa được
console.log(obj); // { name: "Doe" }
```

### 6. 1 số hàm kiểm tra khác

- `Object.hasOwnProperty()` : kiểm tra xem object có chứa 1 thuộc tính cụ thể hay k? trả về kiểu boolean
- `Object.getPrototypeOf()` trả về prototype của 1 object. 
- `Object.setPrototypeOf()`  Đặt prototype cho một object.

```javascript
const obj = { name: "John" };
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("age")); // false
// get prototype
const obj2 = {};
console.log(Object.getPrototypeOf(obj2) === Object.prototype); // true
// set prototype
const obj3 = {};
const proto = { greet: function () { return "Hello!"; } };
Object.setPrototypeOf(obj3, proto);
console.log(obj3.greet()); // "Hello!"
```

- ` Object.defineProperty()` Thêm hoặc sửa 1 thuộc tính của object với các thuộc tính chi tiết (như writable, enumerable, configurable).

```javascript
const obj = {};
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false, // Không thể thay đổi giá trị
  enumerable: true, // Có thể liệt kê
  configurable: false, // Không thể xóa hoặc sửa thuộc tính
});
console.log(obj.name); // "John"
obj.name = "Doe"; // Không thay đổi được
console.log(obj.name); // "John"
```

- `Object.defineProperties()` Thêm hoặc sửa nhiều thuộc tính của object cùng lúc.

```javascript
const obj = {};
Object.defineProperties(obj, {
  name: {
    value: "John",
    writable: true,
  },
  age: {
    value: 30,
    writable: false,
  },
});
console.log(obj); // { name: "John", age: 30 }
```