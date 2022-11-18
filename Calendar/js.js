'use strict'

let createUl = document.createElement('ul');

let body = document.querySelector('body');

let date = new Date();

let year = date.getFullYear(); // получаем год

let month = date.getMonth(); //получаем месяц

let day = date.getDay(); 

let d = date.getDate(); // получаем день

console.log(year,month,day,getDays(year,month))

let span1 = document.createElement('span');

let span2 = document.createElement('span');

let span3 = document.createElement('span')

let p = document.createElement('p')


createUl.classList.add('list')

body.append(createUl);

for(let i=1; i <= getDays(year,month); i++){
    let createli = document.createElement('li');
    createli.textContent = i;
    
    if(createli.textContent == d){
        createli.classList.add('active')   
    }
     createUl.appendChild(createli) 
    
}

function getDays(year,month){
    return new Date(year,month+1,0).getDate();
}

let months = ['январь','февраль','март','апрель','май' ,'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

let weeks = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']

span1.textContent = year;

p.appendChild(span1);

span2.textContent =months[month];

p.appendChild(span2);

span3.textContent = weeks[day]

p.appendChild(span3);

body.insertBefore(p,createUl);

let a1 = document.createElement('a');

a1.innerHTML = 'Предыдуший месяц';

a1.href ="#";

let a2 = document.createElement('a');

a2.href ='#';

a2.innerHTML = 'Следующий месяц';

body.insertBefore(a1,p);

body.insertBefore(a2,p);

a1.addEventListener('click',function(ev){

    if(month === 0){
        month=12   
    }

    ev.preventDefault()
    month -=1;
    
    span2.textContent = months[month]
    console.log(months[month],month,months.length)

    if(month === 11){
        span1.textContent = year-=1;
    }

    createUl.textContent = '';

    for(let i=1; i <= getDays(year,month); i++){
        let li = document.createElement('li');
        li.textContent=i;
        li.classList.add('a')
        createUl.append(li)  
    }

})

a2.addEventListener('click',function(ev){
    ev.preventDefault()
    month += 1;

    if(month===12){
        month=0
    }
    span2.textContent = months[month];
    console.log(months[month],month,months.length)

    if(month === 0){
        span1.textContent = year+=1;
    }

    createUl.textContent = '';

    for(let i=1; i <= getDays(year,month); i++){
        let li = document.createElement('li');
        li.textContent=i;
        createUl.append(li)
    }
})