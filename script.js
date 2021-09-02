const form = document.querySelector("form");
const errorIcon = document.querySelectorAll('.error-icon');



function active() {
    for (i = 0; i <= 3; i++) {
        if (form[i].value === '') {
            form[i].classList.add('content-error');
            errorIcon[i].classList.remove('displayNone');
        } else {
            form[i].classList.remove('content-error');
            errorIcon[i].classList.add('displayNone');
        }
    }
    if (!validateEmail(form[2].value)){
        form[2].classList.add('content-error');
        errorIcon[2].classList.remove('displayNone');
    }else {
        form[2].classList.remove('content-error');
        errorIcon[2].classList.add('displayNone');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

