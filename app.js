let list = [] ;
let root = document.getElementById("root") ;
let theaddbtn = document.getElementById("noth") ;
let rightHhf = document.querySelector(".storage") ;
theaddbtn.addEventListener("click", () => {
newNote()
})
function newNote() {
     note= document.createElement("div")
    note.innerHTML = `<ul class="ulu">
    <span class="btn">
    <ul class="add-clear">
        <button class="new-addBtnNote">+</button>
        <button class="new-clearBtnNote">-</button>
    </ul>
    <input type="text" placeholder="title" class="title"/>
    </span>
    <textarea class="li"></textarea></ul>`
    root.append(note) ;
 let btn = note.querySelector(".btn") ;
 let textArea = note.querySelector(".li");
 let newaBtnNote = note.querySelector(".new-addBtnNote") ;
 let newcBtnNote = note.querySelector(".new-clearBtnNote") ;
 let title = note.querySelector(".title") ;
 theaddbtn.style.display = "none"
newaBtnNote.addEventListener("click",() => {
    note.style.display = "none" ;
    theaddbtn.style.display = "block"
    let someT = document.createElement("p")
    someT.innerHTML =`<button id="goback"><<<</button><p>${title.value} <button id="clean">x</button></p>`
    someT.classList.add("torki")
        rightHhf.append(someT)
        let clean = someT.querySelector("#clean") ;
        let goback = someT.querySelector("#goback") ;

        clean.addEventListener("click",() => {
            someT.style.display = "none"
        })
        goback.addEventListener("click" , () => {
            note.style.display = "block"
            someT.style.display = "none"
            console.log(note)
        })
console.log(clean , goback)


})
newcBtnNote.addEventListener("click",() => {
    note.style.display = "none" ;
    theaddbtn.style.display = "block"
} )

let wid = 250
let heig = 250
 btn.style.width = `${wid}px`
 textArea.style.width = `${wid}px`
 textArea.style.height = `${heig}px`
textArea.addEventListener( "mouseleave", () => {
    wid = textArea.clientWidth
    btn.style.width = `${wid + 2}px`
})
textArea.addEventListener("mousemove" , () => {
    wid = textArea.clientWidth
    btn.style.width = `${wid + 2}px`
})
}
































//     const note = document.createElement("div")
//     note.innerHTML = `<ul class="ulu">
//     <span class="btn">
//     <ul class="add-clear">
//         <button>+</button>
//         <button>-</button>
//     </ul>
//     <h2 class="name">...</h2>
//     </span>
//     <textarea class="li"></textarea></ul>`
//     root.append(note) ;
//  btn = document.querySelector(".btn") ;
//  textArea = document.querySelector(".li");
//  console.log(btn) ;
// let wid = 40
// let heig = 40
// console.log(wid) ;
//  btn.style.width = `${wid}px`
//  textArea.style.width = `${wid}px`
//  console.log(textArea.clientWidth)
//  textArea.style.height = `${heig}px`
// textArea.addEventListener("mousemove" || "mouseleave", () => {
//     wid = textArea.clientWidth
//     btn.style.width = `${wid + 2}px`
// })

// }













// let text = document.getElementById("like")
// let root = document.getElementById("root") ;
// btn.addEventListener("click" , () => {
//    
//     list.push(
//         {
//             name : "hi" ,
//             Ntext : text.value ,
//         })    
//         text.value = "" ;
//         console.log(list)
// })
