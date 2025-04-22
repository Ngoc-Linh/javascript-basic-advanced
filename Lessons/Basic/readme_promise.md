# Promise

trước khi tìm hiểu về promise, ta sẽ tìm hiểu các vấn đề sau
- sync(đồng bộ) và async (bất đồng bộ)
- nổi đau và callback hell
- giải quyết dùng promise

## sync và async

- như ta đã biết javascript thực hiện mã code theo thứ tự và tuần tự từ trên xuống dưới gọi là `sync` (đồng bộ)
```javascript
console.log("công việc 1");
console.log("công việc 2");
console.log("công việc 3");
// công việc 1
// công việc 2
// công việc 3
```
- nhưng trong thực tế, khi làm việc 1 số hàm như `setTimeout()`, `setInterval()`, `fetch api` thì xảy ra bất đồng bộ gọi là `async`

```javascript
setTimeout(function() {
    console.log("công việc 1");
},1000)
console.log("công việc 2");
console.log("công việc 3");
// công việc 2
// công việc 3
// công việc 1
```

để giải quyết vấn đề trên, người ta sử dụng call lồng nhau => nhưng lại dẫn đến khó maintant , khó đọc gọi là `callback hell`

```javascript
setTimeout(function() {
    console.log("công việc 1");
    setTimeout(function() {
        console.log("công việc 2");
        setTimeout(function() {
            console.log("công việc 3");
        },1000)
    },1000)
},1000)
```

lúc này ở phiên bản es6, ra đời `promise` để giải quyết vấn đề callback hell. còn nếu callback hell thì ta sử dụng callback bình thường

## promise
- giải quyết vấn đề khi gặp bất đồng bộ ( lời hứa được thực thi)
cú pháp
- promise có 3 trạng thái
    + Pending : khi k gọi resolve, reject
    + Fulfilled: khi  resolve được gọi
    + rejected: khi reject được gọi
```javascript
// dùng new Promise để khai báo
const promise = new Promise(
    // nhận vào đối số là 1 function executor
    // function này được thực thi ngay khi new Promise
    // nhận 2 tham số là resolve(giải quyết vấn đề thành công) và reject(vấn đề bị lỗi)
    function(resolve, reject) {
        // viết logic
        // nếu thành công thì gọi resolve()
        // nếu thất bại gọi reject()
        // nếu k gọi 1 trong 2 , resolve or reject thì sẽ bị tràn bộ nhớ "memory leak"
        if(true) {
            resolve("kết quả thành công")
        }else {
            reject("lỗi xảy ra")
        }
    }
)
// promise cung cấp 3 phương thức `then`, `catch`, `finally`
// có thể có nhiều then
promise
    .then(function(result){
        // khi resolve thì lọt vào đây
    })
    .catch(function(error){
        // khi reject thì lọt vào đây
    })
    .finally(function(){
        // khi xong , chỉ cần có 1 trong 2  resolve or reject thì lọt vào đây
    })
```

## asyn/await
ngoài dùng promise trên, ta cũng có thể dùng `async/await` để giải quyết bất đồng bộ
- mục đích: dễ đọc, dễ hiểu và k bị call hell
- `async` được dùng để khai báo 1 hàm bất đồng bộ. và hàm async luôn trả về 1 promise
- khi dùng async phải có await. `await` tạm dừng việc chạy cho đến phi promise hoàn thành.
- dùng `try ...catch` để bắt lỗi promise bị reject
cú pháp
```javascript
async function getData() {
    try {

    }catch(error) {

    }
}
```
