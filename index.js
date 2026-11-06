// First up, let's create a new list item and store it in a variable.
let newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);

const myDiv = document.getElementById("myDiv")

let checkbox = document.createElement("input")


const myDiv = document.getElementById("myDiv");

// creating checkbox element
let checkbox = document.createElement("input");

// Assigning the attributes
// to created checkbox
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

// creating label for checkbox
var label = document.createElement("label");

// assigning attributes for
// the created label tag
label.htmlFor = "id";

// appending the created text to
// the created label tag
label.appendChild(
    document.createTextNode("This create the label for checkbox.")
);

// appending the checkbox
// and label to div
myDiv.appendChild(checkbox);
myDiv.appendChild(label);



/* placeholder note: add a class name to any element with the following syntax: yourelementname.className = "checked"; */