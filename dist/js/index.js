//on add task hide button and display form

let button = document.getElementById('ajouter');
let ajout = document.getElementById('ajout');
let submit = document.getElementById('submit');

ajout.style.display = 'none';

function add_todo(title, content) {
    let todos = document.getElementById('todos');

    let node = document.createElement('p');
    //user input sanitized with create text node function
    node.appendChild(document.createTextNode(content));
    todos.appendChild(node);
}

button.addEventListener('click', () => {
    let ajout = document.getElementById('ajout');

    if (ajout.style.display === 'none')
        ajout.style.display = 'flex';
    else
        ajout.style.display = 'none';
});

let form = document.getElementById("new_todo");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

submit.addEventListener('click', () => {
    let title = document.getElementById('todo_title').value;
    let content = document.getElementById('todo_value').value;

    if (title != "" && content != "")
        add_todo(title, content);
});