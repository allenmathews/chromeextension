let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")



tabBtn.addEventListener("click", function(e) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
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