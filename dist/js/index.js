//on add task hide button and display form

let button = document.getElementById('ajouter');
let ajout = document.getElementById('ajout');

ajout.style.display = 'none';

button.addEventListener('click', () => {
    let ajout = document.getElementById('ajout');

    if (ajout.style.display === 'none')
        ajout.style.display = 'flex';
    else
        ajout.style.display = 'none';
    /*let todos = document.getElementById('todos');
    let text = 'hello';

    let node = document.createElement('p');
    node.appendChild(document.createTextNode(text));
    todos.appendChild(node);*/
});

let title = document.getElementById('todo_title').value;
console.log(title);