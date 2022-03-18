const buttons=document.querySelectorAll('button.faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        button.parentElement.classList.toggle('active');
    });
});