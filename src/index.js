document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', addTask)
})

function addTask(event) {
  event.preventDefault()
  let input = event.target.querySelector('input').value
  const container = document.querySelector('#tasks')
  const liTag = document.createElement('li')
  liTag.textContent = input
  container.appendChild(liTag)
  event.target.querySelector('input').value = ""

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "X";
  deleteButton.onclick - deleteItem;
  liTag.appendChild(deleteButton);

  deleteButton.addEventListener('click', function(){
    deleteButton.remove()
    liTag.remove()
  })
}

function deleteItem(){
  let itemId = this.parentNode.id;
  document.getElementById(itemId).remove();
}