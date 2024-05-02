const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-button");
let notes = document.querySelectorAll(".input-box");
let noteArr = [];

createBtn.addEventListener("click", ()=>{
    noteArr.push(notesContainer);
    let inputBox = document.createElement("p");
    let btn = document.createElement("button");
    btn.innerHTML = "delete";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    btn.className = "delete-button";
    btn.setAttribute("contenteditable", "false");
    btn.addEventListener("click", function(e){
    })
    notesContainer.appendChild(inputBox);
    notesContainer.appendChild(btn)
})

