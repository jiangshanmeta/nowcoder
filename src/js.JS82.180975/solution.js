function second (second) {
    const mintue = 60;
    const hour = 3600;
    const day = 86400;
    return {
        day: parseInt(second / day),
        hour: parseInt(second % day / hour),
        min: parseInt(second % hour / mintue),
        second: second % mintue,
    };
}

function render (data) {
    function len2 (d) {
        d = '00' + d;
        return d[d.length - 2] + d[d.length - 1];
    }
    const ids = document.querySelector('#jsCountdown');
    const html = `
        <span class="${data.day === 0 ? 'hide' : ''}">${len2(data.day)}天</span>
        <span>${len2(data.hour)}:</span>
        <span>${len2(data.min)}:</span>
        <span>${len2(data.second)}</span>
        `;
    ids.innerHTML = html;
}
