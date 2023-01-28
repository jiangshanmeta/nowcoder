function suggest (items) {
    let ipt = document.querySelector('.js-input').value;
    const dv = document.querySelector('.js-suggest');
    const ul = document.querySelector('ul');
    const len = ul.children.length;
    // console.log('len', len);

    // 清空ul
    for (let i = 0; i < len; i++) {
        const li = document.querySelector('li');
        ul.removeChild(li);
    }
    // console.log(ul.children.length);

    ipt = ipt.trim();
    // 输入为空
    if (!ipt) {
        dv.classList.add('hide');
        return;
    }

    // 构造reg的时候，ipt如果是特殊字符，要转义
    let reg = '';
    const regKey = ['(', ')', '.', '?', '^', '/', '\\', '*', '[', ']', '|', '+', '{', '}', '$',];
    console.log(regKey.length);
    for (i of ipt) {
        if (regKey.includes(i)) {
            i = '\\' + i;
        }
        reg += i + '.*?';
    }
    // console.log(reg);
    reg = new RegExp(reg);

    // 匹配
    for (i of items) {
        if (reg.test(i)) {
            const tip = document.createElement('li');
            tip.innerHTML = i;
            ul.appendChild(tip);
        }
    }
    dv.appendChild(ul);

    // 要考虑ipt不为空但是没有匹配到
    if (ul.children.length) {
        dv.classList.remove('hide');
    } else {
        dv.classList.add('hide');
    }
}
