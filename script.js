const inputs = Array.from(document.querySelectorAll("input"));
const submit = document.querySelector("button");
const form = document.querySelector("form");
let submittedOnce = false;
let invalidForm = false;

//console.log(inputs[inputs.length-1]);
//console.log(submit);
//console.log(form);
//const regexNames = /^\s\w/;
//const regexEmail = /^s\w@\w\.[a-z]{2,3}/;
//const regexPassword = /^s\w{5,13}/;

const regexes = {
    "first-name": /^\w+$/,
    "last-name": /^\w+$/,
    "email": /^\w+@\w+\.[a-z]{2,3}$/,
    "password": /^\w{5,13}$/ 
}

//console.log(regexes[inputs[3].getAttribute("name")])

inputs.forEach(function(element,index){
    element.addEventListener("input",function(){
        if(submittedOnce){
            let iconError = this.nextElementSibling;
            let msgError = this.parentNode.nextElementSibling;
            if(this.value.match(regexes[this.getAttribute("name")]) || this.value == ""){
                iconError.classList.remove("active");
                msgError.classList.remove("active");
            }
            else{
                if(!iconError.classList.contains("active")){
                    iconError.classList.add("active");
                    msgError.classList.add("active");
                }
            }
        }
    });
});

submit.addEventListener("click",function(event){
    //if(!submittedOnce){
    //    inputs.every(function(element,index){
    //        let iconError = element.nextElementSibling;
    //        let msgError = element.parentNode.nextElementSibling;
    //        if(!element.value.match(regexes[element.getAttribute("name")])){
    //            iconError.classList.add("active");
    //            msgError.classList.add("active");
    //            if(!invalidForm){
    //                invalidForm = true;
    //            }
    //        }
    //    });
    //    if(invalidForm){
    //        event.preventDefault();
    //    }
    //}
    //
    //
    //let invalidForm = inputs.some(function(element,index){
    //    let iconError = element.nextElementSibling;
    //    let msgError = element.parentNode.nextElementSibling;
    //    if(!element.value.match(regexes[element.getAttribute("name")])){
    //        iconError.classList.add("active");
    //        msgError.classList.add("active");
    //    }
    //    return element.classList.contains("active");
    //});
    //console.log(invalidForm);

    //if(invalidForm){
    //    event.preventDefault();
    //}
    //
    inputs.forEach(function(element,index){
        console.log(element);
        console.log(typeof element.value);
        console.log(element.value.match(regexes[element.getAttribute("name")]));
    });

    event.preventDefault();
});
