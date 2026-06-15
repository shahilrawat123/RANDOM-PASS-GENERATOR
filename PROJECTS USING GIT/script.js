let btn = document.querySelector("#btn");
let input = document.querySelector(".input");
let icon = document.querySelector(".fa-copy");
let alert = document.querySelector(".alert-container");
let alertMsg = document.querySelector("#alert")

btn.addEventListener("click",()=>{
    createPassword(); 
    
});

// icon.addEventListener(()=>{
//     copyText()
// })

//Generate buttton

const createPassword = ()=>{
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*abcdefghijklmnopqrstuvwxyz";
    const passwordLen = 14;
    let password = ""
    for(let i=0;i<passwordLen;i++){
        let randomPass = Math.floor(Math.random() * char.length);
        password += char.substring(randomPass,randomPass+1);
    };
    inputVal(password);
    alert.innerText=password + " Coppied "
};

const inputVal = (val)=>{
    input.value = val;
}

icon.addEventListener("click",()=>{
    copyText();
    if(input.value){
        alert.classList.remove("active")
        setTimeout(() => {
        alert.classList.add("active")
    }, 2000);
    }
})

// copy to clipboard
const copyText = ()=>{
    input.select()
    input.setSelectionRange(0,14);
    navigator.clipboard.writeText(input.value);
    // .then(()=> alert("text coppied"))
    // .catch((err)=>error("failed",err))
};