# làm việc với array

## 1. `length` kiểm tra độ dài của mảng
- trả về số lượng phần tử trong mảng
- đếm từ vị trí (index) số 0

```javascript
let arr = [1, 2, 3, 4];
console.log(arr.length); // 4
```

## 2. `toString()` 
- chuyển array thành chuỗi, tự động thêm `,` để phân tách các phần tử
- còn muốn thay đổi ký tự `,` thì ta dùng `join()`
```javascript
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
console.log(typeof dogNames.toString()) // string
```
## 3. `join()`

- tương tự như toString(), gộp các phần tử trong mảng thành chuỗi, nhưng lại cho phép ngăn cách bởi ký tự chỉ định

```javascript
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.join('-'); // Rocket-Flash-Bella-Slugger
console.log(typeof dogNames) // string
```
## 4. Tìm kiếm vị trí phần tử
- `indexOf(array)`: tương tự như indexOf(substring) trong tìm kiếm string, ở mảng cũng trả về vị trí đầu tiên của phần tử trong mảng (hoặc -1 nếu k tìm thấy)
- `lastIndexOf(array)`: trả về vị trí cuối cùng của phần tử trong mảng

```javascript
const arr = [1, 2, 3, 4, 2];
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(5)); // -1
console.log(arr.lastIndexOf(2)); // 4
```
## 5. `includes()` kiểm tra phần tử
- kiểm tra xem mảng có chứa phần tử hay k(trả về true or false)

```javascript
const arr = [1, 2, 3, 4, 2];
console.log(arr.includes(4))// true
console.log(arr.includes(5))// false
```

## 6. xoá phần tử
- `pop()` : xoá phần tử cuối cùng của mảng và trả về phần tử đã xoá
- `shift()`: xoá phần tử đầu tiên của mảng và trả về phần tử đã xoá

```javascript
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
const index = dogNames.indexOf("Flash"); // kiểm tra mảng có chứa phần tử Flash hay k?
if(index !== -1) { // true
    dogNames.pop(); // xoá phần tử cuối cùng Slugger và hiển thị phần tử đã xoá Slugger
    console.log(dogNames) // ["Rocket", "Flash", "Bella"];
}
console.log(dogNames.shift()) // Rocket
console.log(dogNames)//["Flash", "Bella"];
```

## 7. thêm phần tử

- `push()` thêm 1 hoặc nhiều phần tử vào cuối mảng
- `unshift()` thêm 1 hoặc nhiều phần tử vào đầu mảng

```javascript
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.push("dogEnd");
console.log(dogNames) // ["Rocket", "Flash", "Bella", "Slugger", "dogEnd"];
dogNames.unshift("dogBegin"); 
// ["dogBegin", "Rocket", "Flash", "Bella", "Slugger", "dogEnd"];
```

## 8. thay thế hoặc xoá phần tử : `splice()`

- thay thế , thêm, hoặc xoá phần tử trong mảng
- gồm 3 thông số : array.splice(start, deleteCount, item1, item2, ...)
    + `start`: Vị trí bắt đầu (index) trong mảng để thao tác
    + `deleteCount`: Số lượng phần tử muốn xóa từ vị trí start
    + `item1, item2`: (tuỳ chọn) Các phần tử muốn chèn vào vị trí start
```javascript
const arr = [1, 2, 3, 4];
arr.splice(1, 2);// xoá từ index 1, xoá 2 phần tử
console.log(arr); // [1, 2]
// thêm phần tử
const numbers = [1, 4, 5];
numbers.splice(1, 0, 2, 3); // Tại index 1, xóa 0 phần tử, thêm 2, 3
console.log(numbers); // [1, 2, 3, 4, 5]
// thay thế phần tử
const colors = ["red", "blue", "green"];
colors.splice(1, 1, "yellow"); // Xóa 1 phần tử tại index 1, thêm "yellow"
console.log(colors); // ["red", "yellow", "green"]
// trả về phần tử đã xoá
const nums = [10, 20, 30];
const removed = nums.splice(1, 1); 
console.log(removed); // [20]
console.log(nums);    // [10, 30]
```

## 9. Nối mảng `concat()`
- nối 2 hoặc nhiều mảng lại với nhau

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]
```


## 10. trích xuất phần tử `slice()`
- trích xuất 1 phần tử của mảng( k làm thay đổi mảng gốc)
- array.slice(start, end)
    + `start`: vị trí index bắt đầu cắt
    + `end`:(tuỳ chọn) vị trí kết thúc, k bao gồm vị trí tại index này
```javascript
const arr = [1, 2, 3, 4];
const sliced = arr.slice(1,3); 
console.log(sliced) //[2,3] cắt bắt đầu từ vị trí số 1 có giá trị là 2, và kết thúc tại vị trí số 3 có giá trị là 4 (nhưng k bao gồm vị trí kết thúc) nên chỉ cắt có giá trị là 2 và 3
console.log(arr); // [1, 2, 3, 4]
```

## 11. các hàm quan trọng
- các hàm này đều có tham số truyền vào là 1 callback function
forEach, every, some, find, filter, map, reduce
- callbackfn đều có 3 tham số (element, index, currentArray)
- `callback` là hàm được truyền qua đối số
### 1. `forEach()` : thực thi 1 hàm cho từng phần tử của mảng

cú pháp
```javascript
forEach(callbackFn) // tham số là 1 function callback
forEach(callbackFn, thisArg)
/* trong callbackFn nhận vào 3 tham số :
* elment: giá trị của từng phần tử của mảng
* index: vị trị index của từng item ( bắt đầu từ số 0)
* currentArray: mảng ban đầu
*/
```
or xây dựng 1 phương thức mới giống như forEach sử dụng  `Array.prototype`
```javascript
// xây dựng phương thức forEach2 giống như forEach
Array.prototype.forEach2 = function(callback){
    for(let index in this) {
        // kiểm tra xem index có phải là thuộc tính của mảng hay không
        // nếu không phải thì bỏ qua
        // vì trong mảng có thể có các thuộc tính khác không phải là phần tử của mảng như forEach2 nằm trong _proto_
        if(this.hasOwnProperty(index)){
            callback(this[index],index,this)
        }
    }
}
```
ví dụ

```javascript
const courses = [
    {
        id: 1,
        name: "javascript",
        price: 200
    },
    {
        id:2,
        name: "Java",
        price: 300
    },
    {
        id: 3,
        name: "python",
        price: 0
    }
]
courses.forEach(function(item,index){
    console.log(index,item) 
    /*
    * 0 {id: 1, name: 'javascript', price: 200}
    * 1 {id: 2, name: 'Java', price: 300}
    * {id: 3, name: 'python', price: 0}
    */
})
```
### 2. `every()`
- kiểm tra tất cả mảng phải thoả mãn 1 điều kiện nào đó. trả về dạng `boolean`
- điều kiện ở đây dạng (&)- tất cả phải thoả mãn thì trả về `true`. còn chỉ cần 1 cái sai or chỉ 1 cái đúng thì nó trả về `false`
- cú pháp

```javascript
every(callbackFn) 
every(callbackFn, thisArg)
// or tự xây dựng phương thức
Array.prototype.every2 = function(callback){
    for(let index in this) {
        if(this.hasOwnProperty(index)){
           const result = callback(this[index],index,this);
           if(!result) {
            return false;
            break;
           }
        }
    }
    return true;
}
```

ví dụ: kiểm tra tất cả courses trên có price = 0 k?

```javascript
const isFree = courses.every(function(item,index){
    return item.price === 0; // thực hiện so sánh &. nếu nó chạy lần đầu tiên mà điều kiện sai thì trả về false luôn. k cần chạy hết vòng lặp
})
console.log(isFree) // false
```

### 3. `some()`
- tương tự như `every` nhưng nó so sánh theo dạng `or`. chỉ cần 1 điều kiện đúng thì sẽ trả về true.
cú pháp
```javascript
every(callbackFn) 
every(callbackFn, thisArg)
// or tự xây dựng phương thức
Array.prototype.some2 = function(callback){
    for(let index in this) {
        if(this.hasOwnProperty(index)){
           const result = callback(this[index],index,this);
           if(result) {
            return true;
            break;
           }
        }
    }
    return false;
}
```
ví dụ
```javascript
const isFree = courses.some(function(item,index){
    return item.price === 0;
})
console.log(isFree) // true
```

### 4. `find()`
- trả về `phần tử đầu tiên` thoả mãn điều kiện dưới dạng. nếu k tìm thấy trả về `underfined`
- `findIndex()`: trả về vị trí của phần tử đầu tiên thoả mãn điều kiện
cú pháp
```javascript
find(callbackFn) 
find(callbackFn, thisArg)
// or tự xây dựng phương thức
Array.prototype.myFind = function(callback){
    for(let index in this) {
        if(this.hasOwnProperty(index)){
            const result = callback(this[index], index, this);
            if(result) {
                return this[index];
                break;
            }
        }
    }
    return undefined;
}
```

ví dụ

```javascript
const isFree = courses.find(function(item,index){
    return item.price === 0;
})
console.log(isFree);// {id: 3, name: 'python', price: 0}
```
### 5. `filter()`
- tương tự như `find` nhưng sẽ tạo ra 1 mảng mới chứa tất cả các phần tử thoả mãn điều kiện
cú pháp
```javascript
filter(callbackFn) 
filter(callbackFn, thisArg)
// or tự xây dựng phương thức
Array.prototype.filter2 = function(callback){
    const newArray = [];
    for(let index in this) {
        if(this.hasOwnProperty(index)){
            const result = callback(this[index], index, this);;
            if(result) {
                newArray.push(this[index]);
            }
        }
    }
    return newArray;
}
```
ví dụ

```javascript
const isFree = courses.find(function(item,index){
    return item.price === 0;
})
console.log(isFree);// {id: 3, name: 'python', price: 0}
```
## 12. duyệt qua mảng

- `map()`: duyệt qua từng phần tử mảng và tạo 1 mảng mới bằng cách áp dụng hàm cho từng phần tử
- có thể thêm sửa cho từng phần tử.
cú pháp 

```javascript
map(callbackFn)
map(callbackFn, thisArg)
// or xây dựng phương thức
Array.prototype.map2 = function(callback){
    const result = [];
    for(let index in this){
        if(this.hasOwnProperty(index)){
            result[index] = callback(this[index],index,this);
        }
    }
    return result;
}
```
ví dụ 
```javascript
const arr = [2,3,4];
const squared = arr.map((item) => item * item);
console.log(squared) // [4,9,16];
// or
const courseHandler = function(course,index){
    return {
        id: course.id,
        name: "Khoá học: " + course.name,
        price: course.price,
    }
}

const newCourse = courses.map(courseHandler);
console.log(newCourse);
```
## 13. sắp xếp mảng: `sort()`
- sắp xếp các phần tử trong mảng và sẽ thay đổi mảng gốc
- cú pháp `array.sort([compareFunction])`
    + nếu k truyền tham số `compareFunction` thì các phần tử string  so sánh theo thứ tự Unicode(a-z)
    + nếu các phần tử number thì phải bắt buộc truyền tham số `compareFunction` để so sánh. nếu k truyền sort sẽ sai
    + number thì `arr.sort((a, b) => a - b) (tăng dần)` & ``arr.sort((a, b) => b - a) (giảm dần)``
    + object thì 	`arr.sort((a, b) => a.key - b.key)`
    + Chuỗi nâng cao thì `arr.sort((a, b) => a.localeCompare(b))`

```javascript
// mặc định
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

// dạng số number
const numbers = [10, 5, 20, 1];

numbers.sort((a, b) => a - b); // tăng dần
console.log(numbers); // [1, 5, 10, 20]

numbers.sort((a, b) => b - a); // giảm dần
console.log(numbers); // [20, 10, 5, 1]

// sort k phân biệt chữ hoa, chữ thường
const names = ["Nam", "nam", "An", "an"];
names.sort((a, b) => a.localeCompare(b, 'vi', { sensitivity: 'base' }));
console.log(names); // ["An", "an", "Nam", "nam"]

// object
const users = [
  { name: "Nam", age: 20 },
  { name: "An", age: 18 },
  { name: "Bình", age: 22 }
];

// Tăng dần theo tuổi
users.sort((a, b) => a.age - b.age);

console.log(users);
/*
[
  { name: "An", age: 18 },
  { name: "Nam", age: 20 },
  { name: "Bình", age: 22 }
]
*/
```

## 14. đảo ngược mảng `reverse()`
- đảo ngược thứ tự các phần tử trong mảng

```javascript
const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```
## 15. tính toán mảng
- `reduce()` : tính toán giá trị duy nhất bằng cách lặp qua từng phần tử
- `array.reduce(callback, initialValue)` trong đó 
    + `callback` hàm chạy cho mỗi phần tử, nhận 4 tham số `(accumulator, currentValue, currentIndex, array)`
    + `initialValue`: khởi tạo giá trị cho accumulator
- dùng khi cần rút gọn 1 mảng về 1 giá trị duy nhất
- có thể là number, string, array, object...
cú pháp

```javascript
reduce(callbackFn)
reduce(callbackFn, initialValue)
// or tự xây dựng phương thức
Array.prototype.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    for(let index in this) {
        if(this.hasOwnProperty(index)){
            accumulator = callback(accumulator, this[index], index, this);
        }
    }
    return accumulator;
}
```
ví dụ
```javascript
// với bài toán courses trên ta tính tổng giá price. nếu k dùng reduce
// biến lưu trữ
let totalPrice = 0;
// duyệt qua từng phần tử trong mảng courses
for(const course of courses) {
    // thực hiện việc lưu trưữ giá trị của price vào biến totalPrice
    // cộng dồn giá trị của price vào biến totalPrice
    totalPrice += course.price;
}
console.log(totalPrice); // 500

// or dùng reduce thì code ngắn gọn hơn
const totalPrice2 = courses.reduce(function(totalPrice, course) {
    return totalPrice += course.price;
}, 0)
console.log(totalPrice2); // 500
```
```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, item) => acc + item, 0);
console.log(sum); // 10
```