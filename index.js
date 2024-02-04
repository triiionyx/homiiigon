window.onload = () => {
    var body = document.body;
    var screen = body.querySelector('screen');
    var pixel = document.createElement('pixel');
    
    var x = 0;
    const cols = 10;
    const rows = 10;
    do {
        screen.insertAdjacentHTML('beforeend', pixel.outerHTML)    
        x++;
    } while(x < cols * rows);
}