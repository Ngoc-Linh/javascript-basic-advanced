// validation form dom for validator.js
/* 
Validator({
    form: '#validationForm',
    selectorGroup: '.form-group',
    classError: 'was-validate',
    elementError: '.invalid-feedback',
    rules: [
        Validator.isRequired('#validationName', 'please value your name'),
        Validator.isLength("#validationName", 6, 'please value your name minimum 6 characters'),
        Validator.isRequired('#validationEmail', 'please value your email'),
        Validator.isEmail('#validationEmail', 'email is not format'),
        Validator.isRequired('#validationPassword', 'please value your password'),
        Validator.isLength("#validationPassword", 6, 'please value your password minimum 6 characters'),
        Validator.isRequired('#validationConfirmPassword', 'please value your confirm password'),
        Validator.isConfirm('#validationConfirmPassword','#validationPassword', 'please input confirm password is not match'),
    ],
    onSubmit: function(data) {
        console.log(data);
    }
})
*/
// validator2.js
Validator('#validationForm', {
    selectorGroup: '.form-group',
    classError: 'was-validate',
    elementError: '.invalid-feedback'
})