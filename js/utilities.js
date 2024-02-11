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

/**
 * 1.get the element where you want to add the dynamic HTML
 * 2.create an element you want to add
 * 3.if needed add some class
 * 4.set inner HTML. it could be dynamic Template string
 * 5.append the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    const count = calculationEntry.childElementCount;
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} <span>${area}</span><span>cm</span><sup>2</sup> <button class = "btn btn-primary btn-convert">Convert to m<sup>2</sup>`;
    calculationEntry.appendChild(p);

    const convertElements = document.getElementsByClassName('btn-convert');
    for(let el of convertElements) {
        el.addEventListener('click', (event)=> {
            const parent = event.target.parentNode;
            const nodes = parent.childNodes;
            const changeArea = nodes[1];
            changeArea.innerText = parseFloat(changeArea.innerText) / 100;
            const cm = nodes[2];
            cm.innerText = 'm';
        });
    }
}