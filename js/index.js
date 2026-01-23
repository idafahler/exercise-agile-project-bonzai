const btnRef = document.querySelector('.burger__btn');
console.log(btnRef);
btnRef.addEventListener('click', (event)=> {
    event.currentTarget.classList.toggle('open');
});