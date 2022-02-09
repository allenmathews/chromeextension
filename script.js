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

let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // const li = document.createElement("li") //create element
    // li.textContent = myLeads[i] // set textContent to element
    // ulEl.append(li) // appending to ul
    listItems += "<li>" + myLeads[i] + "</li>"
}

ulEl.innerHTML = listItems;