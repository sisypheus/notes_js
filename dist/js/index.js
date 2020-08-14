let button = document.getElementById('ajouter');
let ajout = document.getElementById('ajout');
let submit = document.getElementById('submit');

ajout.style.display = 'none';

function add_todo(title, content) {
    //variables
    let notes = document.getElementById('notes');
    let div_container = document.createElement('div');
    let node = document.createElement('p');
    let node_title = document.createElement('h2');
    if (typeof add_todo.counter == 'undefined')
        add_todo.counter = 1;

    div_container.className = "note_container";
    div_container.id = add_todo.counter;
    //user input sanitized with create text node function
    node_title.appendChild(document.createTextNode(title));
    node.appendChild(document.createTextNode(content));
    node.prepend(node_title);
    div_container.appendChild(node);
    notes.appendChild(div_container);
    add_todo.counter++;
}

button.addEventListener('click', () => {
    let ajout = document.getElementById('ajout');
    let title = document.getElementById('note_title').value;
    let content = document.getElementById('note_value').value;

    if (ajout.style.display === 'none')
        ajout.style.display = 'flex';
    else {
        ajout.style.display = 'none';
        document.getElementById('note_title').value = "";
        document.getElementById('note_value').value = "";
    }
});

let form = document.getElementById("new_note");
form.addEventListener('submit', (event) => {
    event.preventDefault();
});

submit.addEventListener('click', () => {
    let title = document.getElementById('note_title').value;
    let content = document.getElementById('note_value').value;

    if (title != "" && content != "")
        add_todo(title, content);

    document.getElementById('note_title').value = "";
    document.getElementById('note_value').value = "";
    ajout.style.display = 'none';
});