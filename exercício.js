let Anterior=document.querySelector("#Anterior")
let Proximo=document.querySelector("#Proximo")
let body=document.querySelector("body")

Anterior.addEventListener("click",()=>{
    if (body.classList.contains("Texto-grande")){
        body.classList.remove("Texto-grande")
        body.classList.add("Texto-regular")
    }
    else if(body.classList.contains("Texto-regular")){
        body.classList.remove("Texto-regular")
        body.classList.add("Texto-pequeno")
    }
})
Proximo.addEventListener("click",()=>{
    if(body.classList.contains("Texto-pequeno")){
        body.classList.remove("Texto-pequeno")
        body.classList.add("Texto-regular")
    }
    else if(body.classList.contains("Texto-regular")){
        body.classList.remove("Texto-regular")
        body.classList.add("Texto-grande")
    }
    
})