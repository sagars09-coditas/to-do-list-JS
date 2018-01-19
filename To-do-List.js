let items = [];
let itemsCopy = [];
let text, j;

let addForm = () => {
    document.getElementById('form').style.visibility = 'visible';
};

let addItem = () => {
    var appendItems = document.getElementById('appendItem');
    appendItems.innerHTML = '';
    document.getElementById('form').style.visibility = 'hidden';
    text = document.getElementById('item').value;
    items.push({
        text: text,
        status: "unchecked"
    });
    var toSort = document.getElementById('sortList').options.selectedIndex;
    if (toSort == 2) {
        let completed = [];
        let incompleted = [];
        items.forEach(function(index) {
            if (items[index].status == 'unchecked') {
                completed.push(index);
            }
            else {
                incompleted.push(index);
            }
        });
        completed.forEach(function(index) {
            newList(completed[index]);
        });
        newList(items.length - 1);
        document.getElementById('appendItem').childNodes.item(completed.length - 1).lastChild.className = 'add-anim';
        incompleted.forEach(function(index) {
            var div = document.createElement('div');
            var list = document.createElement('li');
            var checkbox = document.createElement('input');
            var p = document.createElement('p');
            var delButton = document.createElement('button');
            checkbox.type = 'checkbox';
            checkbox.id = `c${incompleted[index]}`;
            checkbox.addEventListener("click", checked);
            if (items[incompleted[index]].status == "checked") {
                checkbox.checked = true;
            }
            p.id = `p${incompleted[index]}`;
            p.innerText = items[incompleted[index]].text;
            delButton.type = 'button';
            delButton.className = 'button';
            var del = document.createElement('i');
            del.className = 'fa fa-trash';
            delButton.appendChild(del);
            delButton.id = `d${incompleted[index]}`;
            delButton.addEventListener("click", deleteItem);
            list.id = `${incompleted[index]}`;
            list.appendChild(checkbox);
            list.appendChild(p);
            list.appendChild(delButton);
            div.className = 'down-anim';
            div.appendChild(list);
            appendItems.appendChild(div);
        });
    }
    else {
        items.forEach(function(index) {
            newList(i);
            sort();
        });
        document.getElementById('appendItem').lastChild.lastChild.className = 'add-anim';
    }
    setTimeout(() => {
        sort();
    }, 400);        
};

let sort = () => {
    var appendItems = document.getElementById('appendItem');
    var toSort = document.getElementById('sortList').options.selectedIndex;
    if (toSort === 1) {
        appendItems.innerHTML = '';
        items.forEach(function(index) {
            if (items[index].status == 'checked') {
                newList(index);
            }
        });
        items.forEach(function(index) {
            if (items[index].status == 'unchecked') {
                newList(index);
            }
        });
    }
    else if (toSort === 2) {
        appendItems.innerHTML = '';
        items.forEach(function(index) {
            if (items[index].status == 'unchecked') {
                newList(index);
            }
        });
        items.forEach(function(index) {
            if (items[index].status == 'checked') {
                newList(index);
            }
        });
    }
    else if (toSort === 3) {
        appendItems.innerHTML = '';
        items.forEach(function(index) {
            newList(index);
        });
    }
};

let deleteItem = (gid) => {
    var rem = document.getElementById(gid.target.id).parentNode;
    rem.className = 'del-anim';
    setTimeout(() => {
        rem.remove();
        items.splice(rem.id, 1);
    }, 250);
};

let checked = (gid) => {
    var getId = document.getElementById(gid.target.id).parentNode;
    var getChecked = getId.id;
    var checkStatus = items[getChecked].status;
    if (checkStatus == "unchecked") {
        items[getChecked].status = "checked";
        itemsCopy[getChecked].status = "checked";
    }
    else {
        items[getChecked].status = "unchecked";
        itemsCopy[getChecked].status = "unchecked";
    }   
    sort();
};

let newList = (j) => {
    var appendItems = document.getElementById('appendItem');
    var div = document.createElement('div');
    var list = document.createElement('li');
    var checkbox = document.createElement('input');
    var p = document.createElement('p');
    var delButton = document.createElement('button');
    checkbox.type = 'checkbox';
    checkbox.id = `c${j}`;
    checkbox.addEventListener("click", checked);
    if (items[j].status == "checked") {
        checkbox.checked = true;
    }
    p.id = `p${j}`;
    p.innerText = items[j].text;
    delButton.type = 'button';
    delButton.className = 'button';
    var del = document.createElement('i');
    del.className = 'fa fa-trash';
    delButton.appendChild(del);
    delButton.id = `d${j}`;
    delButton.addEventListener("click", deleteItem);
    list.id = `${j}`;
    list.appendChild(checkbox);
    list.appendChild(p);
    list.appendChild(delButton);
    div.appendChild(list);
    appendItems.appendChild(div);
};