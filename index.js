let countEl = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

let count = 0

function increment() {
    
    count += 1
    countEl.textContent = count
}


function save() {
   
   let conc =count + "-"
   saveEl.innerText=saveEl.textContent+conc
    console.log(saveEl.innerText)
    count=0
}