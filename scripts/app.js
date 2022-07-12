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

  // clear task list
  clear.addEventListener('click', clearlsit)

  // filter task
  filter.addEventListener('keyup', filtertasks)

  // load taks from ls
  document.addEventListener('DOMContentLoaded', loadtasks)
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
    addtolocalstorage(task.value)
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

// clear task list
function clearlsit(e) {
  if (confirm('Do you want to delete all tasks ?')) {
    // Note :)
    // faster than list.innerHtml = ""
    while (list.firstElementChild) {
      list.firstElementChild.remove()
    }
  }
}

// filter tasks
function filtertasks(e) {
  const text = e.target.value.toUpperCase()
  const tasks = document.querySelectorAll('li')
  tasks.forEach((t) => {
    if (t.textContent.toUpperCase().includes(text)) {
      t.style.display = 'flex'
    } else {
      t.style.display = 'none'
    }
  })
}

// check for tasks in local storage
function checktasks() {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  return tasks
}
// Add task to loacl storage
function addtolocalstorage(task) {
  const tasks = checktasks()
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// load tasks from ls
function loadtasks(e) {
  const tasks = checktasks()
  tasks.forEach((t) => {
    const item = document.createElement('li'),
      icon = document.createElement('i')
    icon.className = 'fa fa-remove'
    item.textContent = t
    item.appendChild(icon)
    // add item to list
    list.appendChild(item)
  })
}
