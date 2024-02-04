window.onload = ()=>{
    var body = document.body;
    var screen = body.querySelector('screen');

    //QR Matrix
    if (0 > 1) {
        var matrix = document.createElement('matrix');
        var x = 0;
        const cols = 10;
        const rows = 9;
        do {
            screen.insertAdjacentHTML('beforeend', matrix.outerHTML);
            var cell = screen.lastElementChild;

            var xx = 0;
            do {
                var pixel = document.createElement('pixel');
                cell.insertAdjacentHTML('beforeend', pixel.outerHTML);
                xx++;
            } while (xx < 256);

            x++;
        } while (x < cols * rows);
    }
}
