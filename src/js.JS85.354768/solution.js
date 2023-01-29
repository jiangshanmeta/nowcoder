function output (str) {
    let count = 0; // 用于计时器停止
    const box = document.getElementsByClassName('content')[0];
    const spans = Array.from(box.children);
    const lastSpan = document.getElementsByClassName('blink')[0];
    for (let i = 0; i < spans.length; i++) {
        if (i !== (spans.length - 1)) {
            box.removeChild(spans[i]);
        }
    }
    const time = setInterval(function () {
        let el = '';
        if (str[count] === '\n') {
            el = document.createElement('br');
        } else {
            el = document.createElement('span');
            el.className = 'word ' + 'color' + (Math.round(Math.random() * 23) + 1);
            el.innerText = str[count];
            if (str[count] === ' ') { el.innerHTML = '&nbsp;'; }
            if (str[count] === '<') { el.innerHTML = '&lt;'; }
            if (str[count] === '>') { el.innerHTML = '&gt;'; }
        }
        box.insertBefore(el, lastSpan);
        count++;
        if (count === str.length) {
            clearInterval(time);
        }
    }, 200);
}
