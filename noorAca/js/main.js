var getElm = function (elm) {
    return document.querySelector(elm)
}

// function to hide elements without repeating code
var hide = function (el) {
    if(typeof el == 'string'){
        el = getElm(el)
    }
    el.style.display = 'none'
}

var show = function (el) {
    if (typeof el == 'string') {
        el = getElm(el)
    }
    el.style.display = 'inherit'
}

var btnInform = document.querySelector('#btn-inform');

document.getElementById('about_acdm').onclick = function (e) {
    hide('#center-intro');
    show('#about-intro');
}

btnInform.onclick = function () {
    hide(btnInform);
    show('#inform-me-form');
}
