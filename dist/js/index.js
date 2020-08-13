//on add task hide button and display form

let button = document.getElementById('ajouter');
let ajout = document.getElementById('ajout');
let submit = document.getElementById('submit');

ajout.style.display = 'none';

function add_todo(title, content) {
    let notes = document.getElementById('notes');

    let node = document.createElement('p');
    let node_title = document.createElement('h2');
    //user input sanitized with create text node function
    node_title.appendChild(document.createTextNode(title));
    node.appendChild(document.createTextNode(content));
    node.prepend(node_title);
    notes.appendChild(node);
}

button.addEventListener('click', () => {
    let ajout = document.getElementById('ajout');

    if (ajout.style.display === 'none')
        ajout.style.display = 'flex';
    else
        ajout.style.display = 'none';
});

let form = document.getElementById("new_note");
function handleForm(event) {
    event.preventDefault();
} 
form.addEventListener('submit', handleForm);

submit.addEventListener('click', () => {
    let title = document.getElementById('note_title').value;
    let content = document.getElementById('note_value').value;

    if (title != "" && content != "")
        add_todo(title, content);

    document.getElementById('note_title').value = "";
    document.getElementById('note_value').value = "";
    ajout.style.display = 'none';
});