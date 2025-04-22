function Validator(options)  {
    const formElement = document.querySelector(options.form);
    const classError = options.classError || 'was-validate';
    const elementError = options.elementError || '.invalid-feedback';
    const selectorRules = {};
    // parentElement 
    // Lấy ra các element cha của element hiện tại và kiểm tra đúng selector hay không
    // Nếu đúng thì trả về element cha đầu tiên

    function getParentElement(element, selector) {
        while(element.parentElement) {
            // Nếu element cha của element hiện tại có selector đúng với selector truyền vào thì trả về element cha
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            // Nếu không thì gán element hiện tại bằng element cha của nó
            // và tiếp tục kiểm tra
            element = element.parentElement;
        }
    }
    
    if(formElement) {
        options.rules.forEach(function(rule) {
            const inputElement = formElement.querySelector(rule.seleletor);
            // const errorElement = inputElement.parentElement.querySelector(elementError);
            const errorElement = getParentElement(inputElement, options.selectorGroup).querySelector(elementError);
            // Lưu lại các rule vào selectorRules
            if(Array.isArray(selectorRules[rule.seleletor])) {
                // Nếu đã có thì thêm vào mảng
                selectorRules[rule.seleletor].push(rule.test);
            }else {
               // Nếu chưa có thì khởi tạo thành mảng. lần đầu tiên sẽ rơi vào đây
                // và lần thứ 2 sẽ rơi vào else 
                selectorRules[rule.seleletor] = [rule.test];
            }
            // Lắng nghe sự kiện blur để validate
            if(inputElement) {
                // Xử lý trường hợp blur ra ngoài input
                inputElement.addEventListener('blur', function() {
                    handleValidate(inputElement, rule, errorElement);
                })
                // Xử lý trường hợp người dùng nhập vào input
                inputElement.addEventListener('input', function() {
                    errorElement.innerText = '';
                    // inputElement.parentElement.classList.remove(classError);
                    getParentElement(inputElement, options.selectorGroup).classList.remove(classError);
                })
            }
        })
        // Xử lý trường hợp submit form
        formElement.addEventListener('submit', function(e) {
            e.preventDefault();
            let isFormValidate = true;
            options.rules.forEach(function(rule) {
                const inputElement = formElement.querySelector(rule.seleletor);
                const errorElement = getParentElement(inputElement, options.selectorGroup).querySelector(elementError);
                // Gọi hàm validate cho từng rule
                const isValidate = handleValidate(inputElement, rule, errorElement);
                if(!isValidate) {
                    isFormValidate = false;
                }
            })
            // Nếu form hợp lệ thì gọi hàm onSubmit
            if(isFormValidate) {
               if(typeof options.onSubmit === 'function') {
                    // Lấy tất cả các input trong form
                    // Lấy tất cả các input trong form có name và không bị disabled
                    const enableInputs = formElement.querySelectorAll('[name]:not([disabled])'); 
                    // Chuyển đổi NodeList thành mảng và sử dụng reduce để tạo ra một object
                    // với key là name của input và value là value của input
                    const formValues = Array.from(enableInputs).reduce(function(values, input) {
                        switch(input.type) {
                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if(!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'radio':
                                if(input.matches(':checked')) {
                                    values[input.name] = input.value;
                                }
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {})
                    options.onSubmit(formValues);
                    // reset form sau khi submit thành công
                    formElement.reset();
                    
                }
            }
            
        })


    }
    function handleValidate(inputElement, rule, errorElement) {
        let errorMessage = undefined;
        const rules = selectorRules[rule.seleletor];
        // Lặp qua từng rule và kiểm tra
        for(let index in rules) {
            errorMessage = rules[index](inputElement.value);
            if(errorMessage) break;
        }
        if(errorMessage) {
            // Hiện thông báo lỗi
            errorElement.innerText = errorMessage;
            getParentElement(inputElement, options.selectorGroup).classList.add(classError);
        }else {
            // Xóa thông báo lỗi
            errorElement.innerText  = '';
            getParentElement(inputElement, options.selectorGroup).classList.remove(classError);
        }
        return !errorMessage;
    }
}
Validator.isRequired  = function(selector, message) {
    // Hàm trả về một object chứa thông tin của rule
    return {
        seleletor: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'please input not empty';
        }
    }
}
Validator.isEmail = function(selector, message) {
    return {
        seleletor: selector,
        test: function(value) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(value) ? undefined : message || 'Email is not valid';
        }
    }
}
Validator.isLength = function(selector, min, message) {
    return {
        seleletor: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `please input minimum ${min} characters`;
        }
    }
}
Validator.isConfirm = function(selector, compareSelector, message) {
    return {
        seleletor: selector,
        test: function(value) {
            // Lấy giá trị của trường so sánh
            if(!compareSelector) return undefined;
            const compareValue = document.querySelector(compareSelector).value;
            return value === compareValue ? undefined : message || 'please input confirm password is not match';
        }
    }
}