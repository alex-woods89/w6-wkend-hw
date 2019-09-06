document.addEventListener('DOMContentLoaded', () =>{
  const newIitemForm = document.querySelector('#new-item-form')
  newIitemForm.addEventListener('submit', handleNewItemFormSubmit) 
  
  const deleteButton = document.querySelector('#delete-all')
  deleteButton.addEventListener('click', handleDeleteButtonClick)
})

const handleNewItemFormSubmit = function(event){
    event.preventDefault()
const parentElement = document.querySelector('ul')
const childElement = document.createElement('p')
childElement.textContent = `${event.target.name.value}, ${event.target.team.value}, ${event.target.position.value}, ${event.target.available.value}`
parentElement.appendChild(childElement)
}
const handleDeleteButtonClick = function(event){
const sportstarList = document.querySelector('ul')
sportstarList.innerHTML = ''

}



