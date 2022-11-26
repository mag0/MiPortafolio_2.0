
// MAIN

const nav  = document.querySelector('.menu');
const button_nav  = document.querySelector('.submenu');


button_nav.addEventListener('click', ()=>{
    nav.classList.toggle('open');
})


// FORMULARIO
    const names = document.querySelector('.name');
    const surname = document.querySelector('.surname');
    const email = document.querySelector('.email');
    const subject = document.querySelector('.subject');
    const message = document.querySelector('.message');
    const submit = document.querySelector('.submit');
    const confirm = document.querySelector('.confirm');
    
    submit.addEventListener('click', e=>{
        e.preventDefault()
        if(names.value.length >= 3 && surname.value.length >= 3 
            && email.value.length >= 12 && subject.value.length >= 1 
            && message.value.length > 1){
            confirm.textContent = 'Gracias por escribirme, pronto te contestare';
        }
        else{
            confirm.textContent = '¡Por favor, completa todos los campos!'
        }
    })

































// window.sr = ScrollReveal();

//     sr.reveal('.navbar', {
//         duration: 3000,
//         origin: 'bottom',
//         distance: '-100px'
//     });

    
// window.sr = ScrollReveal();

//     sr.reveal('.navbar', {
//         duration: 3000,
//         origin: 'bottom',
//         distance: '-100px'
//     });
