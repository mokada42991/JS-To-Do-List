function addTaskToList() {
    var value = document.getElementById("input").value;
    if(value) {
        console.log(value);
        document.getElementById("input").value = "";

        var list = document.getElementById("toDoList");
        var task = document.createElement("li");
        var text = document.createTextNode(value);
        task.appendChild(text);
        var buttons = document.createElement("div");
        buttons.classList.add("buttons");
        var remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve"><g><g id="close"><polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"/></g></g></svg>';
        remove.addEventListener("click", removeTask);
        var complete = document.createElement("button");
        complete.classList.add("complete");
        complete.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="448.8px" height="448.8px" viewBox="0 0 448.8 448.8" style="enable-background:new 0 0 448.8 448.8;" xml:space="preserve"><g><g id="check"><polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55"/></g></svg>';
        complete.addEventListener("click", completeTask);
        buttons.appendChild(remove);
        buttons.appendChild(complete);
        task.appendChild(buttons);
        list.appendChild(task);
    }
}

function removeTask() {
    var parent = this.parentNode.parentNode.parentNode;
    var child = this.parentNode.parentNode;
    parent.removeChild(child);
}

function completeTask() {
    if (this.parentNode.parentNode.parentNode.id === "toDoList") {
        var parent = this.parentNode.parentNode.parentNode;
        var child = this.parentNode.parentNode;
        parent.removeChild(child);

        var completedList = document.getElementById("completedList");
        completedList.insertBefore(child, completedList.childNodes[0]);
    } else {
        var parent = this.parentNode.parentNode.parentNode;
        var child = this.parentNode.parentNode;
        parent.removeChild(child);

        var toDoList = document.getElementById("toDoList");
        toDoList.appendChild(child);
    }
}
