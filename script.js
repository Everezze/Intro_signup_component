const inputs = Array.from(document.querySelectorAll("input"));
const submit = document.querySelector("button");
const form = document.querySelector("form");
let submittedOnce = false;
let inputValidation = [false,false,false,false];


const regexes = {
    "first-name": /^[a-zA-Z]+(-?)[a-zA-Z]+$/,
    "last-name": /^[a-zA-Z]+(-?)[a-zA-Z]+$/,
    "email": /^\w+@\w+\.[a-z]{2,3}$/,
    "password": /^\w{5,13}$/ 
}

inputs.forEach(function(element,index){
    element.addEventListener("input",function(){
        //console.log(this);
        if(this.value.match(regexes[this.getAttribute("name")]) || this.value == ""){
            console.log("valid input");
            if(submittedOnce){
                let iconError = this.nextElementSibling;
                let msgError = this.parentNode.nextElementSibling;
                iconError.classList.remove("active");
                msgError.classList.remove("active");
            }
            if(this.value == ""){
                inputValidation[index] = false;
            }
            else{
                inputValidation[index] = true;
            }
        }

        else{
            let iconError = this.nextElementSibling;
            let msgError = this.parentNode.nextElementSibling;
            console.log("INvalid input");
            if(!iconError.classList.contains("active")){
                if(submittedOnce){
                    iconError.classList.add("active");
                    msgError.classList.add("active");
                }
            inputValidation[index] = false;
            }
        }
    });
});

submit.addEventListener("click",function(event){
    let sendableForm = inputValidation.every( element => element == true);
    if(!submittedOnce){
        inputValidation.forEach(function(element,index){
            if(!element){
                let input = inputs[index];
                let iconError = input.nextElementSibling;
                let msgError = input.parentNode.nextElementSibling;
                iconError.classList.add("active");
                msgError.classList.add("active");
            }
        });
        submittedOnce=true;
    }
    if(!sendableForm){
        event.preventDefault();
    }
});

window.addEventListener("load",function(){
    form.reset();
})
