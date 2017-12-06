if (localStorage.getItem("list")) {
    var storage = JSON.parse(localStorage.getItem("list"));
} else {
    var storage = {
        toDo: [],
        completed: []
    };
}

loadList();

function updateLocalStorage() {
    localStorage.setItem("list", JSON.stringify(storage));
}

function loadList() {
    if (!storage.toDo.length && !storage.completed.length) {
        console.log("empty");
    } else {
        for (var i = 0; i < storage.toDo.length; i++) {
            renderTaskToDom(storage.toDo[i], "toDoList");
        }
        for (var i = storage.completed.length - 1; i >= 0; i--) {
            renderTaskToDom(storage.completed[i], "completedList");
        }
        console.log(storage);
    }
}

function renderTaskToDom(taskValue, taskList) {
    var list = document.getElementById(taskList);
    var task = document.createElement("li");
    var text = document.createTextNode(taskValue);
    task.appendChild(text);
    var buttons = document.createElement("div");
    buttons.classList.add("buttons");
    var removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve"><g><g id="close"><polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"/></g></g></svg>';
    removeButton.addEventListener("click", removeTask);
    var completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="448.8px" height="448.8px" viewBox="0 0 448.8 448.8" style="enable-background:new 0 0 448.8 448.8;" xml:space="preserve"><g><g id="check"><polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55"/></g></svg>';
    completeButton.addEventListener("click", completeTask);
    buttons.appendChild(removeButton);
    buttons.appendChild(completeButton);
    task.appendChild(buttons);
    list.appendChild(task);
}

function addTaskToList() {
    var value = document.getElementById("input").value;
    if(value) {
        document.getElementById("input").value = "";

        renderTaskToDom(value, "toDoList");

        storage.toDo.push(value);
        updateLocalStorage();
        console.log(storage);
    }
}

document.getElementById("input").addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
        addTaskToList();
        this.blur();
    }
});

function removeTask() {
    var parent = this.parentNode.parentNode.parentNode;
    var child = this.parentNode.parentNode;
    parent.removeChild(child);

    if(parent.id === "toDoList") {
        storage.toDo.splice(storage.toDo.indexOf(child.textContent), 1);
    } else {
        storage.completed.splice(storage.completed.indexOf(child.textContent), 1);
    }
    updateLocalStorage();
    console.log(storage);
}

function completeTask() {
    var parent = this.parentNode.parentNode.parentNode;
    var child = this.parentNode.parentNode;
    if (parent.id === "toDoList") {
        parent.removeChild(child);
        var completedList = document.getElementById("completedList");
        completedList.insertBefore(child, completedList.childNodes[0]);

        storage.toDo.splice(storage.toDo.indexOf(child.textContent), 1);
        storage.completed.push(child.textContent);
        updateLocalStorage();
        console.log(storage);
    } else {
        parent.removeChild(child);
        var toDoList = document.getElementById("toDoList");
        toDoList.appendChild(child);

        storage.completed.splice(storage.completed.indexOf(child.textContent), 1);
        storage.toDo.push(child.textContent);
        updateLocalStorage();
        console.log(storage);
    }
}
