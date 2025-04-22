# Các câu hỏi phỏng vấn dành cho html, css, scss

1. phân biệt `rem`, `em` và `%` trong css? trong dự án thực tế bạn dùng loại nào và tại sao?

- `rem` dựa trên font-size của phần tử gốc (html)
ví dụ
```css
html {
    font-size: 16px;
}
p {
    font-size: 2rem; /*(32px) 32px/16px = 2rem */
}
```
- `em` dựa trên font-size của chính phần tử đó hoặc phần tử cha trực tiếp.

```css
div {
    font-size: 16px
}
p {
    font-size: 1.5em; /*(24px) 24px/16px = 1.5em */
}
```

- `%` phụ thuộc vào phần tử trực tiếp

```css
div {
    font-size: 16px
}
p {
    font-size: 150%; /*(24px) (24px/16px)x100 = 150% */
}
```

- trong thực tế 
    + `rem` thường được sử dụng vì nó đảm bảo tính nhất quán trên toàn bộ trang web, đặc biệt khi responsive.
    + `em` được sử dụng khi cần font-size phụ thuộc vào phần tử cha
    + `%` được sử dụng cho các thuộc tính `width`, `height` để tạo layout linh hoạt.

2. scss là gì? lợi ích khi sử dụng scss?
- scss(sassy css) là 1 phần mở rộng của css, cung cấp cú pháp mạnh mẽ hơn với tính năng như biến, lồng nhau, mixin và kế thừa.
- `biến (variables)` dễ dàng tái sử dụng giá trị
- `lồng nhau (nesting)` giúp mã dễ đọc hơn
- `mixin` tái sử dụng các đoạn mã css
- `kế thưa` kế thừa các thuộc tính từ 1 selector khác
```scss
$primary-color: #1a1a1a;
body {
    background-color: $primary-color;
}
// nesting
nav {
    ul {
        li {
            a {
                color: blue;
            }
        }
    }
}
// mixin
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    @include flex-center;
}
// kế thừa - inheritance
.button {
    padding: 10px;
    border: none;
}
.primary-button {
    @extend .button ;
    background-color:  blue;
}
```

3. làm thế nào để tối ưu hiệu suất css ?
- sử dụng css gọn gàng
    + tránh lặp lại mã css k cần thiết
    + sử dụng scss hoặc css modules để quản lý mã css.
- giảm số lượng selector lồng nhau
    + tránh lồng selector quá sâu vì sẽ giảm hiệu suất
- sử dụng class thay vì id
    + selector id có độ ưu tiên cao hơn , dễ gây xung đột
- nén css
    + sử dụng công cụ như `cssnano` hoặc `clean-css` để nèn file css
- tải css k đồng bộ
    + sử dụng thuộc tính media hoặc async để tải css k đồng bộ

4. tổ chức scss module cho hiệu quả?
- tổ chức theo mô hình 7-1 (7 folders, 1 file main.scss) để tách : variables, mixin, base, layout, component... và sử dung `BEM` để đặt tên class giúp dễ maintain và tránh xung đột
- `BEM(block-element-modifier)` với cú pháp 
```css 
/* block: phần tử độc lập (button, cart, menu)
element: phần tử con của block (icon, text trong button)
modifier: trạng thái của element or block (button màu đỏ, cart kích thướt lớn)
*/
.block__element--modifier {

}
.cart {

}
.cart__title {

}
.cart--primary {

}
.cart__title--big {

}
```

5. Responsive layout bạn triển khai như thế nào?
có 2 cách 
- `mobile-first` sử dụng `@media(min-width)` thiết kế giao diện cho màn hình nhỏ trước (mobile) và mở rộng dần cho thiết bị lớn hơn (tablet, desktop);
```css
/* Mobile */
body {
  font-size: 14px;
}
/* tablet */
@media (min-width: 768px) {

}
/* desktop */
@media (min-width: 1024px) {

}
```
- `destop-first` sử dụng `@media (max-width)` để thiết kế giao diện màn hình lớn trước (desktop), sau đó thu nhỏ sang thiết bị tablet, mobile

```css
/* desktop */
body {
  font-size: 14px;
}
/* tablet */
@media (max-width: 1024px) {

}
/* mobile */
@media (max-width: 768px) {

}
```
