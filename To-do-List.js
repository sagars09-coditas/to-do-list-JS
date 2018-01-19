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

    itemsCopy = items.slice();    
    var toSort = document.getElementById('sortList').options.selectedIndex;

    if (toSort == 2) {
        appendItems.innerHTML = '';
        let arr = [];
        let arr1 = [];

        for (i = 0; i< items.length; i++) {
            if (items[i].status == 'unchecked') {
                arr.push(i);
            }

            else {
                arr1.push(i);
            }
        }   

        for (let i = 0; i < arr.length-1; i++) {
            newList(arr[i]);
        }

        newList(items.length - 1);
        document.getElementById('appendItem').childNodes.item(arr.length - 1).lastChild.className = 'addAnim';
        
        for (let i = 0; i < arr1.length; i++) {
            var div = document.createElement('div');
            var list = document.createElement('li');
            var checkbox = document.createElement('input');
            var p = document.createElement('p');
            var delButton = document.createElement('button');
        
            checkbox.type = 'checkbox';
            checkbox.id = `c${arr1[i]}`;
            checkbox.addEventListener("click", checked);
            if (items[arr1[i]].status == "checked") {
                checkbox.checked = true;
            }
        
            p.id = `p${arr1[i]}`;
            p.innerText = items[arr1[i]].text;
        
            delButton.type = 'button';
            delButton.className = 'button';
            var del = document.createElement('i');
            del.className = 'fa fa-trash';
            delButton.appendChild(del);
            delButton.id = `d${arr1[i]}`;
            delButton.addEventListener("click", deleteItem);
            
            list.id = `${arr1[i]}`;
            list.appendChild(checkbox);
            list.appendChild(p);
            list.appendChild(delButton);
        
            div.className = 'downAnim';
            div.appendChild(list);
        
            appendItems.appendChild(div);
        }        
    }

    else {
        for (let i = 0; i< items.length; i++) {
            newList(i);
            sort();
        }
        document.getElementById('appendItem').lastChild.lastChild.className = 'addAnim';
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

        for (let i = 0; i< items.length; i++) {
            if (items[i].status == 'checked') {
                newList(i);
            }
        }

        for (let i = 0; i< items.length; i++) {
            if (items[i].status == 'unchecked') {
                newList(i);
            }
        }
    }

    else if (toSort === 2) {
        appendItems.innerHTML = '';

        for (let i = 0; i< items.length; i++) {
            if (items[i].status == 'unchecked') {
                newList(i);
            }
        }

        for (let i = 0; i< items.length; i++) {
            if (items[i].status == 'checked') {
                newList(i);
            }
        }
    }

    else if (toSort === 3) {
        appendItems.innerHTML = '';
        for (let i = 0; i< itemsCopy.length; i++) {
            var div = document.createElement('div');
            var list = document.createElement('li');
            var checkbox = document.createElement('input');
            var p = document.createElement('p');
            var delButton = document.createElement('button');

            checkbox.type = 'checkbox';
            checkbox.id = `c${i}`;
            checkbox.addEventListener("click", checked);
            if (itemsCopy[i].status == "checked") {
                checkbox.checked = true;
            }

            p.id = `p${i}`;
            p.innerText = itemsCopy[i].text;

            delButton.type = 'button';
            delButton.className = 'button';
            var del = document.createElement('i');
            del.className = 'fa fa-trash';
            delButton.appendChild(del);
            delButton.id = `d${i}`;
            delButton.addEventListener("click", deleteItem);
            
            list.id = `${i}`;
            list.appendChild(checkbox);
            list.appendChild(p);
            list.appendChild(delButton);

            div.appendChild(list);

            appendItems.appendChild(div);
        }
    }
};

let deleteItem = (gid) => {
    var rem = document.getElementById(gid.target.id).parentNode;
    rem.className = 'delAnim';

    setTimeout(() => {
        rem.remove();
        items.splice(rem.id, 1);
        itemsCopy.splice(rem.id, 1);
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