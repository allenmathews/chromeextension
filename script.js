// function saveLead() {
//     console.log("Button clicked!")
// }

// clickbutton()
let myLeads = [];
let ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    renderLeads()
})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // const li = document.createElement("li") //create element
        // li.textContent = myLeads[i] // set textContent to element
        // ulEl.append(li) // appending to ul
        listItems += `
        <li> 
        <a target="_blank" href="${myLeads[i]}">
            ${myLeads[i]}  
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
}