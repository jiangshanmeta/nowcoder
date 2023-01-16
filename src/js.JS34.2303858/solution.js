let total_zjsl = 0;
let total_klsl = 0;
const dom_zjtaiduola = document.querySelector('#zjtaiduola');
const dom_zjsl = document.querySelector('#zjsl');
const dom_zjtaishaola = document.querySelector('#zjtaishaola');
const dom_kltaiduola = document.querySelector('#kltaiduola');
const dom_klsl = document.querySelector('#klsl');
const dom_kltaishaola = document.querySelector('#kltaishaola');
const dom_total = document.querySelector('#total');

function redraw () {
    dom_zjsl.innerText = total_zjsl;
    dom_klsl.innerText = total_klsl;
    dom_total.innerText = total_zjsl * 28 + total_klsl * 5;
}

dom_zjtaiduola.onclick = function () {
    if (total_zjsl > 0) total_zjsl--;
    redraw();
};
dom_zjtaishaola.onclick = function () {
    total_zjsl++;
    redraw();
};

dom_kltaiduola.onclick = function () {
    if (total_klsl > 0) total_klsl--;
    redraw();
};
dom_kltaishaola.onclick = function () {
    total_klsl++;
    redraw();
};
