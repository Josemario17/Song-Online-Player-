
let a = document.querySelector(".context-theme button:nth-child(1)")
a.onclick = function(){
    a.style.marginLeft = "-28px"
    document.querySelector("html").className = "dark"
}

let b = document.querySelector(".context-theme button:nth-child(2)")
b.onclick = function(){
    a.style.marginLeft = "0px"
    document.querySelector("html").className = "ligth"
}

document.querySelector("#c-dropdown").onclick = function(){
    let c = document.querySelector("#dropdown")
        c.style.display = "block"
        c.onmouseleave = function(){
            c.style.display = "none"
        }
}