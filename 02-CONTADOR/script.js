
let count =  0

const valor = document.querySelector('.valor');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('diminuir')){
            count--;
        }else if(styles.contains('resetar')){
            count = 0;
        }else{
            count++;
        }
        
        
        if(count<0){
            valor.style.color = 'red'
        }
        if(count === 0){
            valor.style.color = 'black'
        }
        if(count>0){
            valor.style.color= 'green'
        }
        
        valor.textContent = count;
    })

});