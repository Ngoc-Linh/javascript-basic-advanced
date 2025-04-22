# HTML DOM (document object model)

- là 1 mô hình dạng cây đại diện cho cấu trúc html của trang web theo quy chuẩn w3c.
- gồm 3 thành phần chính `element`, `attribute`, `text`. và mỗi thành phần nối với nhau bằng `node` ( là các điểm giao nhau)

- cách thức hoạt động:
    + mỗi thẻ html sẽ được biểu diễn dưới dạng 1 `node` trong DOM
    + trình duyệt tạo ra DOM khi tải trang html
    + javascript có thể `truy cập - thêm - xoá - sửa` các phần tử thông qua DOM
## phân biệt DOM và javascript
- DOM `k phải` là ngôn ngữ javascript (HTML -> DOM -> API)
- DOM là 1 api(application Programming Interface) do trình duyệt cung cấp. và javascript sử dụng nó để tương tác với trang web.
- javascript có 2 phần chính javascript browser và javascript server(nodejs)

| **Tiêu chí**                     | **JavaScript trên Browser**                        | **JavaScript trên Server (Node.js)**               |
|----------------------------------|----------------------------------------------------|----------------------------------------------------|
| **Môi trường chạy**             | Trình duyệt (Chrome, Firefox, v.v.)               | Máy chủ (backend, CLI)                             |
| **Đối tượng toàn cục (`global`)** | `window` hoặc `document`                          | `global`, `process`, `__dirname`, v.v.             |
| **Truy cập DOM**                | ✅ Có (`document.getElementById`)                 | ❌ Không có DOM                                     |
| **Dùng để**                     | front end                   | Xử lý backend, API, CSDL                           |
| **Module system**               | Trước đây dùng `<script>`, giờ có ES6 Modules     | Dùng CommonJS (`require`) hoặc ESM                 |
| **Web API (alert, fetch,...)**  | ✅ Có (do browser cung cấp)                       | ✅ Một phần (Node tự implement hoặc qua `node-fetch`) |
| **Hệ thống tệp (`fs`)**         | ❌ Không có quyền truy cập                        | ✅ Có thể đọc/ghi file                              |
| **Package manager**             | ❌ Không cần (code nhúng vào HTML)                | ✅ Dùng `npm`/`yarn` để quản lý thư viện           |

## Document
- là đối tượng gốc (root object) đại diện cho toàn bộ nội dung html được trình duyệt tải.
- nó là cổng chính để javascript truy cập tương tác với DOM . 
- để tương tác với element, attribute, text trong dom thì phải đi từ gốc `document`

## Element
- element là 1 node trong cây dom. đại diện cho 1 thẻ html cụ thể.
- truy cập element thông qua Id, class, tag name, css selector, html collection
### 1. truy cập(finding) element

- `document.getElementById(id)`: trả về 1 element có chứa `id` được chỉ định
- `document.getElementsByTagName(name)`: trả về 1 danh sách `HTMLCollection` dạng array các element chung tag name
- `document.getElementsByClassName(nameClass)`: trả về 1 danh sách `HTMLCollection` dạng array các element chung class name
- truy cập bằng css selector(tương tự như style css)
    +  `document.querySelector('.nameClass')`: trả về element đầu tiên khớp với selector
    + `document.querySelectorAll('.nameClass')`: trả về danh sách array `NodeList` tất cả các element khớp với selector
- truy cập thông qua `HTMLCollection` như
    + `document.images` lấy tất cả element có tag img 
    + `document.form` lấy tất cả element có tag form
    + `document.links`

### 2. thay đổi nội dung html `innerHTML` và `outerHTML`
- hay còn gọi là thêm element bên trong element. hay còn gọi là `element node` dưới dạng object
- ở đây ta có thể vừa get , set element được. cũng có thể get,set Attribute, text node.
- `innerHTML`: Lấy hoặc thay đổi nội dung HTML bên trong element. (cập nhật nội dung bên trong element)
- `outerHTML`: truy cập. chỉnh sửa cả `element` chính phần tử đó luôn + nội dung element. ( thay thế hoàn toàn element đang có)

```javascript
const element = document.getElementById("myElement");
element.innerHTML = "<strong>Hello, World!</strong>"; // <p id="myElement"><strong>Hello, World!</strong></p>;
element.outerHTML = "<strong>Hello, World!</strong>"; // <strong>Hello, World!</strong> ( lúc nảy myElement bị thay thế)
```

### 3. thay đổi style của element
sử dụng `element.style` để thay đổi `inline css` của element.
ví dụ
```javascript
const elementHeading = document.querySelector('h1');
elementHeading.style.width = "200px";
elementHeading.style.backgroundColor = "red";
```
thấy trên, mỗi lần style sẽ phải viết nhiều `element.style`. do `element.style` là 1 object nên sẽ có phương thức như object. ta dùng `Object.assign(target,...soure)` để sao chép hoặc gộp object.

```javascript
const elementHeading = document.querySelector('h1');
/*
target: object đích nơi muốn copy, gộp vào
soure: object nguồn , có thể 1 hoặc nhiều
*/
Object.assign(elementHeading.style, {
    width: "200px",
    backgroundColor: "red"
})
```

### 4. thay đổi bằng class: `classList`
- `add(className)` or `add(className, className2)` : thêm 1 hoặc nhiều class vào element
- `contains(className)` : kiểm tra xem element có class đó hay không? trả về boolean
- `remove(className)` : xoá class khỏi element
- `toggle(className)` : kiểm tra xem class có trong element hay k? nếu có thì sẽ remove class đó. còn nếu k có thì sẽ thêm vào

```javascript
const elementsTag = document.querySelector('.heading');
// thêm 1 class
elementsTag.classList.add('heading1');
// thêm nhiều class, cách nhau bằng dấu `,`
elementsTag.classList.add('heading2, heading 3');
// kiểm tra class có trong element hay không
console.log(elementsTag.classList.contains('heading')); // true
// xoá class khỏi element
elementsTag.classList.remove('heading2'); 
// toggle class
elementsTag.classList.toggle('heading1');// lúc nảy heading1 có trong element do add trước. nên khi render element sẽ bị xoá class `heading1`
```

### 5. thêm, xoá và thay thế element từ document

#### a. thêm element: `appendChild()` và `insertBefore()`
- `document.createElement(element)` tạo mới 1 element dạng tag. chứ k có attribute, text node
- `document.appendChild(element)` thêm 1 html element vào cuối danh sách con
- `parent.insertBefore(newElement, referenceElement)` thêm 1 element trước 1 element khác. với parent là element cha, newElement là element cần chèn vào trước . referenceElement là element có trong parent

```javascript
const listElement = document.querySelector('.list');
// tạo mới element
const newElement = document.createElement('li');
newElement.textContent = 'css';
// thêm vào sau cùng item con
listElement.appendChild(newElement);
// referenceElement, element có trong parent cần chèn vào
const item = listElement.querySelector('li');
// element mới được thêm vào nằm ở trước item
listElement.insertBefore(newElement, item);
```

#### b. xoá element `removeChild()`
xoá 1 element con
```javascript
document.removeChild(element)
```
ví dụ
```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");
parent.removeElement(child);
```

#### c. thay thế element  `replaceChild()`
- thay thế 1 element con bằng 1 element khác
```javascript
document.replaceChild(new, old)
```
```javascript
const parent = document.getElementById("parent");
const newElement = document.createElement("div");
newElement.innerText = "Replaced Element";
const oldElement = document.getElementById("child");
parent.replaceChild(newElement, oldElement);
// thay thế elemnt child bằng new element
```

## Attribute
muốn tương tác với attribute thì ta phải tương tác từ node element. vì attribute là nhánh nằm trong element.

### 1. thay đổi thông qua thuộc tính có sẵn
attrute bắt buộc là những thuộc tính có sẵn như img thì có `href`,`src`

- `element.href`, `element.src`, `element.title`...

cú pháp
```javascript
element.attribute = new value
```
vd
```javascript
const imgElement = document.querySelector('.img');
imgElement.title = "image"; // sử dụng set
```
### 2. sử dụng phương thức `getAttribute()` và `setAttribute()`
có thể tự đặt tên thuộc tính 
- `getAttribute(name)`: Lấy giá trị của thuộc tính.
- `setAttribute(name, value)` : thay đổi hoặc thêm thuộc tính
- `removeAttribute(name)`: xoá 1 thuộc tính ra khỏi element
```javascript
const element = document.getElementById("myElement");
element.setAttribute("class", "newClass");
console.log(element.getAttribute("class"));
element.removeAttribute("class");
```

## Text
thay đổi nội dung văn bản gọi là `text node`. k thể thêm `tag` thẻ html vào trong này được. 
-`element.innerText`: lấy hoặc thay đổi nội dung văn bản hiển thị ( có cả get và set)
-`element.textContent`: lấy hoặc thay đổi nội dung văn bản(bao gồm những style ẩn, text node) ( có cả get và set)

```javascript
const element = document.getElementById("myElement");
element.innerText = "Hello, World!";
console.log(element.textContent) // Hello, World!
```

## lắng nghe sự kiện trên element: `DOM event` & `Event Listener`
- `DOM event`: là các sự kiện xảy ra trong trình duyệt, như `click`, `change`
```javascript
<p class="param">param 1</p>
// khi lắng nghe sự kiện phải thêm `on`+`click` 
paramElement.onclick = function(e) {
    console.log(e.target); // e.target để lấy ra chính phần tử đó
}
```

- `Event Listener`: là 1 hàm lắng nghe sự kiện trên html. khi sự kiện xảy ra hàm này sẽ được gọi tự động
    + `addEventListener()` để lắng nghe sự kiện
    + `removeEventListener()` gỡ bỏ sự kiện

```javascript
paramElement.addEventListener('click', function() {
    console.log(e.target);
})
```

