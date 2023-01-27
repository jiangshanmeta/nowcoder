function sort (type, order) {
    const tbody = document.getElementById('jsList');
    const trs = Array.from(document.querySelectorAll('#jsList tr'));
    const data = [];
    for (let i = 0; i < trs.length; i++) {
        const tds = Array.from(trs[i].childNodes);
        data.push({
            id: tds[0].innerHTML,
            price: tds[1].innerHTML,
            sales: tds[2].innerHTML,
            tr: trs[i],
        });
    }
    data.sort((a, b) => {
        if (order === 'asc') return a[type] - b[type];
        else if (order === 'desc') return b[type] - a[type];
        else return 0;
    });
    tbody.innerHTML = '';
    data.forEach(item => {
        tbody.appendChild(item.tr);
    });
    return data;
}
