const inputName = document.querySelector('#name');
const email = document.getElementById('email');
const emailAlarm = document.querySelector('.emailAlarm');
const alarmFooter = document.querySelector('.alarmFooter');
let priceSpan = Array.from(document.getElementsByClassName('price'));
const total = document.querySelector('.total');
let sumSpan = document.querySelector('.sum');
const btn = document.getElementById('btn');

console.log(priceSpan);

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    getName();
    getEmail();
});

function getName() {
     if(inputName.value == ''){
        inputName.style.border = '3px solid red';
        inputName.style.background ='white';
        alarmBottom();
     }
     inputName.addEventListener('click', () => {
         inputName.style.border = '3px solid rgb(165, 165, 165)';
     })  
}
function getEmail() {
  if(email.value == '') {
       emailAlarm.style.display = 'block';
       email.style.border = '3px solid red';
       email.setAttribute('placeholer', 'You must enter a validly formatted email address');
       alarmBottom();
       setTimeout(() => {
            emailAlarm.style.display = 'none';
       }, 3000);
    }
    email.addEventListener('click', () => {
        email.style.border = '3px solid rgb(165, 165, 165)';
    })
}

function alarmBottom() {
    alarmFooter.style.display = 'block';
    setTimeout(() => {
       alarmFooter.style.display = 'none'; 
    }, 3000);
}

function getPrice() {
   priceSpan.forEach((item, id)=> {
       console.log(item);
       console.log(item.innerText);
       console.log(id);
      item.parentElement.addEventListener('click', () => {
        sumSpan.innerText = +sumSpan.innerText + +item.innerText;
        total.style.display = 'block';
      })
   })
}
getPrice();