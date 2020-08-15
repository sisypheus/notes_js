let notes = [];
let button = document.getElementById('ajouter');
let ajout = document.getElementById('ajout');
let submit = document.getElementById('submit');

ajout.style.display = 'none';

class note {
    constructor(title, content) {
        //user input sanitized
        this.title = document.createElement('h2');
        this.title.appendChild(document.createTextNode(title));
        this.content = document.createElement('p');
        this.content.appendChild(document.createTextNode(content));
        this.id = note.getCount();

        add_note(this);
    }

    static #count = 0;
    
    static increaseCount() {
        this.#count++;
    }
    
    static getCount() {
        return this.#count;
    }
}

function add_note(note) {
    //variables
    let notes_container = document.getElementById('notes');
    let div_container = document.createElement('div');
    let remove = ((remove) => {
        remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        remove.id = note.id;
        remove.className = 'remove_btn';
        remove.addEventListener('click', () => {
            let to_delete = document.querySelector('#note'+remove.id);
            to_delete.remove();
        });
        return remove;
    })();

    div_container.className = "note_container";
    div_container.id = 'note' + note.id;
    
    //user input sanitized with create text node function
    note.title.appendChild(remove);
    note.content.prepend(note.title);
    div_container.appendChild(note.content);
    notes_container.appendChild(div_container);
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
    
    if (title != "" && content != "") {
        note.increaseCount();
        notes.push(new note(title,content));
    }
    
    /*for (let i = 0; i < notes.length; i++) {
        console.log(notes[i].id);
    }*/
    
    document.getElementById('note_title').value = "";
    document.getElementById('note_value').value = "";
    ajout.style.display = 'none';
});