let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}
  
const logTodos = () => {
    console.log(arrayOfTodos)
}
  
const populateTodos = () => {

  for(let i = 0; i < arrayOfTodos.length; i++){
    const title = arrayOfTodos[i].title
    const ol = document.getElementById('todo-list')
    const li = document.createElement("li")
    const liContent = document.createTextNode(title)
    
    ol.appendChild(li)
    li.append(liContent)
  }
}

const filteredTodos = () => {

  //CLEAR THE LIST
  const ol = document.getElementById('todo-list')
  ol.innerHTML = ''
  
  // FILTER
  const userInput = document.getElementById('filterInput').value 
  const filtered = arrayOfTodos.filter((todo) => {
    return todo.userId === userInput
  })

  // POPULATE OL WITH FILTERED LIST
  arrayOfTodos = filtered

  populateTodos()
  
}