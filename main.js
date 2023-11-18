import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");
const input = document.querySelector("#name");
const submit = document.querySelector("#submit");
submit.addEventListener('click',function(e){
    e.preventDefault();
    input.value = "hello 555";
    let a = input.getAttribute("value");
    console.log(a); 
    input.setAttribute("value","155");
    console.log(input.getAttribute("value"))
    console.log(input.value); 
});
