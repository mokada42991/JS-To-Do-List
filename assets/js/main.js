function addTaskToList() {
    var value = document.getElementById("input").value;
    if(value) {
        console.log(value);
        document.getElementById("input").value = "";
    }
}
