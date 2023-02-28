const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//function
function addTodo(event) {
  event.preventDefault();

  // to do div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //add to do in local storage
  //saveLocalTodos(todoInput.value);

  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //check delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to do list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  //delet to do
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //todo.remove(); or
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });

    //check the mark
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

/*function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos" === null)) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
*/
