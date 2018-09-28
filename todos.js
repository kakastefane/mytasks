var listElement = document.querySelector('#lista');
var inputElement = document.querySelector('#input');
var buttonElement = document.querySelector('#button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
	listElement.innerHTML = '';

	for (todo of todos) {
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');

		linkElement.setAttribute('href', 'javascript:void(0);');

		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
		
		var linkText = document.createElement('i');
		linkText = document.createElement('i');
		linkElement.setAttribute('class', 'fa fa-times');

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);

		listElement.appendChild(todoElement);
	}
}
renderTodos();

function addTodo() {
	var todoText = inputElement.value;

	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
	saveToStorage();
}
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringify(todos));
}