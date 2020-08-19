let notes = [];
let ajout = document.getElementById('ajout');
ajout.style.display = 'none';

class note {
    constructor(title, content) {
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
    let notes_container = document.getElementById('notes');
    let content_paragraph = document.createElement('p');
    let div_container = document.createElement('div');
    let modify = ((modify) => {
        modify = document.createElement('button');
        modify.innerHTML = 'Modify';
        modify.className = 'modify_btn';
        modify.id = note.id;
        modify.addEventListener('click', () => {
            console.log(document.querySelector('#note'+modify.id).innerHTML);
        });
        return modify;
    })();

    let remove = ((remove) => {
        remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        remove.id = note.id;
        remove.className = 'remove_btn';
        remove.addEventListener('click', () => {
            document.querySelector('#note'+remove.id).remove();
            for (let i = 0; i < notes.length; i++)
                if (notes[i].id == remove.id)
                    notes.splice(i);
        });
        return remove;
    })();

    div_container.className = "note_container";
    div_container.id = 'note' + note.id;
    
    //user input sanitized with create text node function
    note.title.appendChild(remove);
    note.content.prepend(note.title);
    note.content.appendChild(modify);
    div_container.appendChild(note.content);
    notes_container.appendChild(div_container);
}

//hide/show add note form
document.getElementById('ajouter').addEventListener('click', () => {
    if (ajout.style.display === 'none')
        ajout.style.display = 'flex';
    else {
        ajout.style.display = 'none';
        document.getElementById('note_title').value = "";
        document.getElementById('note_value').value = "";
    }
});

document.getElementById("new_note").addEventListener('submit', (event) => {
    event.preventDefault();
    let title = document.getElementById('note_title').value;
    let content = document.getElementById('note_value').value;
    
    if (title != "" && content != "") {
        note.increaseCount();
        notes.push(new note(title,content));
        document.getElementById('note_title').value = "";
        document.getElementById('note_value').value = "";
    }
    ajout.style.display = 'none';
});