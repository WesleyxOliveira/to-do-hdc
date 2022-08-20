// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções
const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo") //adicionou uma classe a div todo.

    const todoTitle = document.createElement("h3"); //criando o h3 da div
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleBtn = document.createElement("button");
    deleBtn.classList.add("remove-todo");
    deleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
}

// Eventos
todoForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue);
    } else {
        window.alert("Informe a tarefa que deseja adicionar!");
    }
})