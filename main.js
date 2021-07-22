const inputName = document.querySelector('#name');
const email = document.getElementById('email');
const emailAlarm = document.querySelector('.emailAlarm');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    getName();

    // if(email.value == '') {
    //    emailAlarm.style.display = 'block';
    //    email.style.border = '3px solid red';
    //    setTimeout(() => {
    //         emailAlarm.style.display = 'none';
    //    }, 3000);
    // }
});

function getName() {
     if(inputName.value == ''){
        inputName.style.border= '3px solid red';
        inputName.style.background='white';
        inputName.setAttribute('placeholder', 'Oops, this field is still empty')
     }
     inputName.addEventListener('click', () => {
         inputName.style.border = '3px solid rgb(165, 165, 165)';
     })  
}
