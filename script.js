// function saveLead() {
//     console.log("Button clicked!")
// }
// clickbutton()
// let myLeads = `["www.jojobaoil.com"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epicleads.com")
// console.log(myLeads)
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
    // localStorage.setItem("myLeads", "www.examplelead.com")
    // console.log(localStorage.getItem("myLeads"))
    // localStorage.setItem("lead", "https://microsoft.com")
    // console.log(localStorage.getItem("lead"))
    // localStorage.clear()

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // const li = document.createElement("li") //create element
        // li.textContent = myLeads[i] // set textContent to element
        // ulEl.append(li) // appending to ul
        listItems += `
        <li> 
        <a target="_blank" href="${leads[i]}">
            ${leads[i]}  
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(e) {
    console.log("doubleClicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    render(myLeads)
})