function getValueById(id) {
    const field = document.getElementById(id);
    const text = field.value;
    const fieldValue = parseFloat(text);
    if(isNaN(fieldValue) || fieldValue <= 0) {
        alert('Please enter valid number');
    }
    else {
        return fieldValue; 
    }
}

function setTextById(id, text) {
    const field = document.getElementById(id);
    if(isNaN(text)) {
        field.innerText = '00';
    }
    else {
        field.innerText = text;
    }
}