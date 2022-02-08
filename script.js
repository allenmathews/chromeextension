// function saveLead() {
//     console.log("Button clicked!")
// }

// clickbutton()
let myLeads = ["a", "b", "c"];
let ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}