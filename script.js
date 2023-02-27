let parent = document.querySelector('.nav__list');
let element = document.querySelectorAll('.nav__item');
let link = document.querySelector('.nav__link');
let btn = document.querySelector('.btn');
let form = document.querySelector('.form');

parent.addEventListener('click', function (event) {
    console.log(event.target)
    let currentElement = event.target;
    for (let el of element) {
        el.parentElement.classList.remove('active');
        currentElement.parentElement.classList.add('active');
    }
})


btn.addEventListener('click', function () {
    document.getElementById('form').style.display = 'block'
})