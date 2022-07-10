// get elements will use
const task = document.getElementById('task'),
  add = document.querySelector('#add'),
  filter = document.getElementById('filter'),
  list = document.querySelector('.collection'),
  clear = document.getElementById('clear'),
  alert = document.getElementById('alert')

// create function for all events
function loadevents() {
  // ADD Task
  // Note :)
  // submit event handle form element
  add.addEventListener('click', addtask)

  // Delete Task
  list.addEventListener('click', deletetask)
}
loadevents()

// add task to list
function addtask(e) {
  if (task.value === '') {
    alert.style.display = 'block'
    setTimeout(() => {
      alert.style.display = 'none'
    }, 1500)
  } else {
    const item = document.createElement('li'),
      icon = document.createElement('i')
    icon.className = 'fa fa-remove'
    item.textContent = task.value
    item.appendChild(icon)
    // add item to list
    list.appendChild(item)
    task.value = ''
  }
  e.preventDefault()
}

// Delete task from list
function deletetask(e) {
  if (e.target.classList.contains('fa-remove')) {
    if (
      confirm(`Do you want to Delete ${e.target.parentElement.textContent} ?`)
    ) {
      e.target.parentElement.remove()
    }
  }
}
