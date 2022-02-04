let qc = document.querySelectorAll('.qcblock');
let inner = document.querySelectorAll('.accordioninner li');

qc.forEach((element) => {
    element.onclick = function(){
        this.parentElement.classList.toggle('active')
        if(this.parentElement.classList.contains('active')){
            this.nextElementSibling.style.height = '100px'
        }else{
            this.nextElementSibling.style.height = '0px'
        }
    }
})