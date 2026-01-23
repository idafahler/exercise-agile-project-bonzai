const btnRef = document.querySelector('.burger__btn');
const navRef = document.querySelector('.header--nav');
console.log(btnRef);
btnRef.addEventListener('click', (event)=> {
    event.currentTarget.classList.toggle('open');
    navRef.classList.toggle('open');
});

