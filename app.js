const btn =document.querySelector('.btn'),
    input = document.querySelector('.input');

    btn.addEventListener('click',()=>{
        btn.classList.toogle('close');
        input.classList.toogle('inclicked');
        });