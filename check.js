
function check(){
    const pass = document.querySelector("#pass1");
    const passs= document.querySelector("#pass2");
    const button = document.querySelector("#but");
   
    
     if (passs.value != pass.value){
            button.disabled = true;
            alert("Password did'nt match")
        }else {
            button.disabled=false;
            
        }
        
    
    } 
    

    

function validate (){
    const elemP = document.querySelector("#pass1");
    const len = document.querySelector("#length");
    const upper = document.querySelector("#upper");
    const num = document.querySelector("#number");
    const special = document.querySelector("#special");

    if(elemP.value.match(/[0-9]/)) {
        num.style.color = 'rgb(73, 255, 73)'
        
    } else {
        num.style.color = 'red'
    
    }

    if(elemP.value.match(/[A-Z]/)){
        upper.style.color = 'rgb(73, 255, 73)'

    } else {
        upper.style.color = 'red'
    }

    if(elemP.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/)) {
        special.style.color = 'rgb(73, 255, 73)'
    } else {
        special.style.color = 'red'
    }

    if (elemP.value.length >= 7) {
        len.style.color = 'rgb(73, 255, 73)'
    }else {
        len.style.color = 'red'
    }

}