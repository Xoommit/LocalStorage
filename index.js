// Get data from the HTML file. 
const inpKey = document.getElementById('inpKey');
const inpValue = document.getElementById('inpValue');
const btnInsert = document.getElementById('btnInsert');
const btnClear = document.getElementById('btnClear');
const btnKey = document.getElementById('btnKey');
const lsOutput = document.getElementById('lsOutput');

// Insert a new key-value pair into the local storage
btnInsert.onclick = function() {
    const key = inpKey.value;
    const value = inpValue.value;
    // Check if the key already exists
    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

// Delete a key-value pair from the local storage
btnKey.onclick = function() {
    const key = inpKey.value;
    if (key) {
        localStorage.removeItem(key);
        location.reload();
    }
};

// On click clear all the local storage
btnClear.onclick = function() {
    localStorage.clear();
    location.reload();
};

// Loop through localStorage and display all items
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}: ${value}<br />`
}