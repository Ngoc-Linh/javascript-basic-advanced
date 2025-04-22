function Validator(formSelector, options) {
    const formElement  = document.querySelector(formSelector);
    const classError = options.classError || 'was-validate';
    const elementError = options.elementError || '.invalid-feedback';
    const selectorGroup = options.selectorGroup || '.form-group';
    const formRules = {};
    // default rules
    // rules: [required, email, min: 6]
    const validatorRules = {
        required: function(value) {
            return value.trim() ? undefined : "please input this field";
        },
        email: function(value) {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(value) ? undefined : "this field must be an email address";
        },
        minLength: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `please enter at least ${min} characters`;
            }
        }
    }
    if(formElement) {
        const inputElements = formElement.querySelectorAll('[name][rules]');
       inputElements.forEach(function(input) {
            const rules = input.getAttribute('rules').split('|');
            for(let rule of rules) {
                let ruleFunc = validatorRules[rule];
                const ruleHasValue = rule.includes(':');
                if(ruleHasValue) {
                    const ruleInfo = rule.split(':');
                    const ruleName = ruleInfo[0];
                    const ruleValue = ruleInfo[1];
                    ruleFunc = validatorRules[ruleName](parseInt(ruleValue));
                }

                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)    
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }
            input.addEventListener('blur', function(event) {
                handleValidate(event);
            }) 
            input.addEventListener('input', function(event) {
                handleValidateClear(event);
            })
       })
    }

    // function handleValidate(input) 
    function handleValidate(event) {
        const rules = formRules[event.target.name];
        const groupElement = getParentElement(event.target, selectorGroup);
        const errorElement = groupElement ? groupElement.querySelector(elementError) : null;
    
        if (errorElement) {
            errorElement.innerText = ''; // Xóa nội dung lỗi cũ
        }
    
        let hasError = false;
    
        rules.forEach(function(rule) {
            const errorMessage = rule(event.target.value);
            if (errorMessage) {
                hasError = true;
                if (groupElement && errorElement) {
                    groupElement.classList.add(classError);
                    errorElement.innerText += `${errorMessage}\n`; // Hiển thị tất cả lỗi
                }
            }
        });
    
        if (!hasError && groupElement) {
            groupElement.classList.remove(classError);
        }
    }
    function handleValidateClear(event) {
        const groupElement = getParentElement(event.target, selectorGroup);
        if(groupElement) {
            const errorElement = groupElement.querySelector(elementError);
            if(errorElement) {
                errorElement.innerText = '';
                groupElement.classList.remove(classError);
            }
        }
    }
    // get parent element of input
    function getParentElement(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
}