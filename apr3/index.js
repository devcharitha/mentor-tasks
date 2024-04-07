function getInput() {
    let inputText = document.getElementById("input-text").value;
    let output = document.createElement("new-task");
    output.classList.add("border", "p-1", "mb-2", "mt-3", "d-flex", "align-items-center", "bg-white", "border-secondary", "rounded-pill","output");

    let textElement = document.createElement("p");
    textElement.textContent = inputText;
    output.appendChild(textElement);
    textElement.classList.add("m-0","p-2","ml-2");
    console.log(textElement);
    let checkIcon = document.createElement('i');
    checkIcon.classList.add("fas", "fa-check-circle", "bg-success","checkIcon");
    output.appendChild(checkIcon);
    console.log(checkIcon);

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add("fas", "fa-trash", "ml-quto", "bg-danger","deleteIcon");
    output.appendChild(deleteIcon);
    console.log(deleteIcon);
    document.getElementById("lists").appendChild(output);
}   
function deleteText(element){
    let output=element.parentElement;
    output.remove();
}
function confirmText(element){
    alert("text Confirmation")
    let output=element.parentElement;
}