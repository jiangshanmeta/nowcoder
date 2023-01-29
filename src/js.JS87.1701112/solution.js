function bind () {
    const con = document.getElementById('jsContainer');
    const rows = con.querySelectorAll('tr');
    const cols = rows[0].querySelectorAll('td');
    document.onkeydown = event => {
        if (!event) return;
        const code = event.keyCode || '';
        if (!{ 37: 1,
            38: 1,
            39: 1,
            40: 1, }[code]) return;
        event.preventDefault && event.preventDefault();
        // TODO: 请实现按键控制
        const cur = con.querySelector('.current');
        let x = 0;
        let y = 0;
        Array.from(rows).forEach((tr, index) => {
            if (tr.contains(cur)) {
                y = index;
                Array.from(tr.querySelectorAll('td')).forEach((td, i) => {
                    if (td === cur) {
                        x = i;
                    }
                });
            }
        });

        // 上
        if (Number(code) === 38) {
            if (y === 0) {
                y = rows.length - 1;
            } else {
                y--;
            }
        } else if (Number(code) === 40) {
            if (y === rows.length - 1) {
                y = 0;
            } else {
                y++;
            }
        } else if (Number(code) === 37) {
            if (x === 0) {
                x = cols.length - 1;
            } else {
                x--;
            }
        } else if (Number(code) === 39) {
            if (x === cols.length - 1) {
                x = 0;
            } else {
                x++;
            }
        }
        cur.classList.remove('current');
        rows[y].querySelectorAll('td')[x].classList.add('current');
    };
}
bind();
