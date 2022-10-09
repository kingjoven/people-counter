let count = 0 
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
  count += 1
  countEl.textContent = count
}
function save() {
  let varL = count + " - "
  saveEl.textContent += varL
  countEl.textContent = 0
  count = 0
}
function reset() {
  console.log(saveEl.textContent) 
  countEl.textContent = 0
  count = 0
} 
