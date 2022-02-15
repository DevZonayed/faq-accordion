const acc_btns = document.querySelectorAll('.accordion-header');
const acc_content = document.querySelectorAll('.accordion-body');

acc_btns.forEach(btn => {
    console.log(btn);
    btn.addEventListener('click', (e) => {

        acc_content.forEach(item => {
            if(e.target.nextElementSibling != item && item.classList.contains('active')){
                item.classList.remove('active')
                acc_btns.forEach(btn => {btn.classList.remove('active')})
            }
        })

        btn.classList.toggle('active')
        btn.nextElementSibling.classList.toggle('active')

    })
})