let parent = document.querySelector('.nav__list');
let element = document.querySelectorAll('.nav__item');
let link = document.querySelector('.nav__link');
let orderNow = document.querySelector('#orderNow');
let myForm = document.querySelector('.form');
let productImg = document.querySelector('.productimg')
let close = document.querySelector('.form_close')

parent.addEventListener('click', function (event) {
    console.log(event.target)
    let currentElement = event.target;
    for (let el of element) {
        el.classList.remove('active');
        currentElement.parentElement.classList.add('active');
    }
})

orderNow.addEventListener('click', function (evt) {
    evt.preventDefault();
    myForm.classList.toggle('active')
})



productImg.addEventListener('click', function (eee) {
    eee.preventDefault();
    productImg.classList.toggle('active')
})
