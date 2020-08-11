let button = document.getElementById('ajouter');

button.addEventListener('click', () => {
    let todos = document.getElementById('todos');
    let text = 'hello';

    let node = document.createElement('p');
    node.appendChild(document.createTextNode(text));
    todos.appendChild(node);
    //console.log('ajouter');
});