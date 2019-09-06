document.addEventListener('DOMContentLoaded', () =>{
  const newIitemForm = document.querySelector('#new-item-form')
  newIitemForm.addEventListener('submit', handleNewItemFormSubmit) 
  
  const deleteButton = document.querySelector('#delete-all')
  deleteButton.addEventListener('click', handleDeleteButtonClick)
})

const handleNewItemFormSubmit = function(event){
    console.log(event);
    event.preventDefault()
const parentElement = document.querySelector('ul')
console.log(parentElement)
const childElement = document.createElement('p')
childElement.textContent = `${event.target.name.value}, ${event.target.team.value}, ${event.target.position.value}`
console.log(childElement)
parentElement.appendChild(childElement)
}
const handleDeleteButtonClick = function(event){
    console.log(event)
const sportstarList = document.querySelector('ul')
sportstarList.innerHTML = ''

}



