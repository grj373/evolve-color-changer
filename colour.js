function setBackgroundColor(color) {
    const body = document.body;

    if (!body) {
        console.error("Body element not found");
        return;
    }

    if (typeof color !== 'string' || color.trim() === '') {
        console.error("Invalid color value: color must be a non-empty string");
        return;
    }

    if (!CSS.supports('color', color)) {
        console.error("Invalid color value: this value not a valid CSS color");
        return;
    }
    
    console.log("set colour to ${color}");
    body.style.backgroundColor = color;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}