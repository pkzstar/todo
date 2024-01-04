document.getElementById("addButton").onclick = function () {
  addItemToList();
};

document.getElementById("textBox").addEventListener("keydown", function (event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default form submission behavior
    addItemToList();
  }
});

function addItemToList() {
  let textBoxValue = document.getElementById("textBox").value;

  if (textBoxValue.trim() !== "") {
    // Create a new div to hold the todo item and checkbox
    let todoItemDiv = document.createElement("div");

    // Create a new checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create a new paragraph element for the todo item
    let newTodo = document.createElement("p");
    newTodo.textContent = textBoxValue;

    // Append the checkbox and todo item to the todoItemDiv
    todoItemDiv.appendChild(checkbox);
    todoItemDiv.appendChild(newTodo);

    // Append the todoItemDiv to the todoList div
    document.getElementById("todoList").appendChild(todoItemDiv);

    // Clear the textbox
    document.getElementById("textBox").value = "";

        // Check if the todo list is empty and hide/show the todoList element accordingly
        let todoList = document.getElementById("todoList");
        if (todoList.children.length === 0) {
          todoList.style.display = "none";
        } else {
          todoList.style.display = "flex";
        }
  }
}

      // Check if the todo list is empty and hide/show the todoList element accordingly ///////// This one exists to remove the todoList elements when the page is loaded. for some reason it won't be removed with the same code in the function.
      if (todoList.children.length === 0) {
        todoList.style.display = "none";
      } else {
        todoList.style.display = "flex";
      }
    

function validateForm() {
  // You can add validation logic here if needed
  return true;
}