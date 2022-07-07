/* 
 show / hide button 
---------------------
*/
const hide_show_btn = document.querySelector('#toggleBtn');
const div_List = document.querySelector('.listHolder');

// action to be taken when clicked on hide list button
hide_show_btn.addEventListener('click', () => {
    // set if click items not show 
    if (div_List.style.display === 'none') {
        div_List.style.display = 'block';
        hide_show_btn.innerHTML = 'Hide List';
    }
    // set if click items is show  
    else {
        div_List.style.display = 'none';
        hide_show_btn.innerHTML = 'Show List';
    }
});

// add name input saving at that as possible
const addInput = document.querySelector('#add_name_Input'); //add textfield button
const addBtn = document.querySelector('#addBtn'); //add item button

function addLists() {
    if (addInput.value === '') {
        alert('Enter the list name please!!!');
    } else {
        // direct atteched in tag
        const ul = div_List.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = addInput.value + " ";
        addInput.value = '';
        ul.style = "list-style-type:circle;";
        ul.appendChild(li);
        createBtn(li);
    }
}

// add list when clicked on add item button
addBtn.addEventListener('click', () => {
    addLists();
});


function upperCase() {
    const x = document.getElementById("add_name_Input");
    x.value = x.value.toUpperCase();
}
/* 
 create action buttons
------------------------
*/
const listUl = document.getElementsByClassName('.list');
const lis = listUl.children;

function createBtn(li) {
    // create remove button
    const remove = document.createElement('button');
    remove.className = 'fa-solid fa-trash';
    li.appendChild(remove);
    return li;
}

// loop to add buttons in each li
for (var i = 0; i < lis.length; i++) {
    createBtn(lis[i]);
}


/* 
Enabling button actions (to delete)
------------------------------------------------------------
*/
div_List.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.className === 'fa-solid fa-trash') {
            ul.removeChild(li);
        }
    }
});