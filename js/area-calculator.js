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
}