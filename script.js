const inputs = Array.from(document.querySelectorAll("input"));
const submit = document.querySelector("button");
const form = document.querySelector("form");
let submittedOnce = false;
let inputValidation = [false,false,false,false];


const regexes = {
    "First Name": /^[a-zA-Z]+(-?)[a-zA-Z]+$/,
    "Last Name": /^[a-zA-Z]+(-?)[a-zA-Z]+$/,
    "Email": /^\w+@\w+\.[a-z]{2,3}$/,
    "Password": /^\w{5,13}$/
}

inputs.forEach(function(element,index){
    element.addEventListener("input",function(){
        if(this.value.match(regexes[this.getAttribute("name")]) || this.value == ""){
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
            let determinant = this.getAttribute("name") == "Email" ? "an" : "a"
            msgError.textContent = `Looks like this is not ${determinant} ${this.getAttribute("name")}`;
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
    inputValidation.forEach(function(element,index){
        if(!element){
            let input = inputs[index];
            let iconError = input.nextElementSibling;
            let msgError = input.parentNode.nextElementSibling;
            if(input.value == ""){
                msgError.textContent = `${input.getAttribute("name")} cannot be empty`;
            }
            iconError.classList.add("active");
            msgError.classList.add("active");
        }
    });
    submittedOnce=true;

    if(!sendableForm){
        event.preventDefault();
    }
});

window.addEventListener("load",function(){
    form.reset();
})
