userIn = document.getElementById("userIn");
userIn.value = "Name";

var backup = "";
userIn.addEventListener('input', event => {
    backup = userIn.value;
})
userIn.addEventListener('focusout', event => {
    userIn.value = "Name";
});
userIn.addEventListener('focusin', event => {
    userIn.value = "";
});

function create() {
    //each task should have a label and edit, delete, and complete button
    ul = document.getElementById("ul");
    li = document.createElement("li");
    
    lbl = document.createElement("label");
    lbl.innerHTML = backup;
    li.appendChild(lbl);

    del = document.createElement("button");
    del.innerHTML = "Delete";
    del.id = "del";
    li.appendChild(del);

    complete = document.createElement("button");
    complete.innerHTML = "Complete";
    complete.id = "complete";
    li.appendChild(complete);

    edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.id = "edit";
    li.appendChild(edit);
    
    ul.appendChild(li);
}

addEventListener('click', event => {
    myEvent = window.event;
    obj = myEvent.target;

    if (obj.id == "edit") {
        list = obj.parentNode.getElementsByTagName("label")
        if (list.length == 1) {
            //in read mode
            temp = list[0];
            obj.innerHTML = "Done";
            
            userIn2 = document.createElement("input");
            userIn2.type = "text";
            userIn2.value = temp.innerHTML;
            userIn2.id = "userIn2";

            temp.remove();
            obj.parentNode.appendChild(userIn2);
        } else {
            //in edit mode
            list = obj.parentNode.getElementsByTagName("input");
            temp = list[0];
            obj.innerHTML = "Edit";

            lbl = document.createElement("label");
            lbl.innerHTML = temp.value;

            temp.remove();
            obj.parentNode.appendChild(lbl);
        }
    }
    if (obj.id == "del" || obj.id == "complete") {
        obj.parentNode.remove();
    }
})