// Select the element with ID 'disp' and store it in the variable dispEl
const dispEl = document.getElementById('disp');

// Define a function called val that takes one parameter called result
const val = (result) => {
    // Append the value of result to the value of the dispEl element
    dispEl.value = dispEl.value + result;
}

// Define a function called calculate
const calculate = () => {
    // Check if the value of dispEl is an empty string
    if (dispEl.value === "") {
        // If it is, show an alert message saying "Empty Field"
        alert('Empty Field')
    } else {
        // If it's not empty, evaluate the value of dispEl as an expression using the eval() function
        // and set the result as the value of dispEl
        dispEl.value = eval(dispEl.value);
    }
}

// Select the element with ID 'vequ' and store it in the variable delEl
const delEl = document.getElementById('vequ');
// Add a double-click event listener to delEl
delEl.addEventListener('dblclick', () => {
    // Set the value of dispEl to an empty string
    dispEl.value = "";
})
