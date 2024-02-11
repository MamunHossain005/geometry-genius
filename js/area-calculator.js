function calculateTriangleArea() {
    //get triangle base value
    const base = getValueById('triangle-base');

    //get triangle height value
    const height = getValueById('triangle-height');

    const area = 0.5 * base * height;

    //show triangle area
    setTextById('triangle-area', area);
    document.getElementById('triangle-base').value = '';
    document.getElementById('triangle-height').value = '';
    if(!isNaN(area)) {
        addToCalculationEntry('Triangle', area);
    }
}

function calculateRectangleArea() {
    //get rectangle length value
    const length = getValueById('rectangle-length');

    //get rectangle breadth value
    const breadth = getValueById('rectangle-breadth');

    const area = length * breadth;

    //show triangle area
    setTextById('rectangle-area', area);
    document.getElementById('rectangle-length').value = '';
    document.getElementById('rectangle-breadth').value = '';

    if(!isNaN(area)) {
        addToCalculationEntry('Rectangle', area);
    }
}

function calculateParallelogramArea() {
    //get parallelogram base value
    const base = getValueById('parallelogram-base');

    //get parallelogram height value
    const height = getValueById('parallelogram-height');

    const area = base * height;

    //show triangle area
    setTextById('parallelogram-area', area);
    document.getElementById('parallelogram-base').value = '';
    document.getElementById('parallelogram-height').value = '';

    if(!isNaN(area)) {
        addToCalculationEntry('Parallelogram', area);
    }
}

