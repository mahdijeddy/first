// document.querySelector('.navbar').
let clc= document.querySelector('.navbar')

window.onscroll=function(){
    if (  document.documentElement.scrollTop > 100) {
      clc.classList.add('navbar22')
      }if(document.documentElement.scrollTop < 100)
      clc.classList.remove('navbar22')
    }