// 新增行
function add (items) {
    const tbody = document.getElementsByTagName('tbody')[0];
    const tfoot = document.getElementsByTagName('tfoot')[0];
    // 获取初始数据
    let count = tbody.children.length;
    let price = parseFloat(tfoot.innerText.match(/\d+.\d+/)[0]);
    // 新增行
    let tr = '';
    for (let i = 0; i < items.length; i++) {
        count += 1;
        price += items[i].price;
        tr += `<tr><td>${items[i].name}</td><td>${items[i].price.toFixed(2)}</td><td><a href="javascript:void(0);">删除</a></td></tr>`;
    }
    tbody.innerHTML += tr;
    tfoot.innerHTML = `<tr><th>总计</th><td colspan="2">${price.toFixed(2)}(${count}件商品)</td></tr>`;
}

// 绑定事件，事件代理
function bind () {
    const tbody = document.getElementsByTagName('tbody')[0];
    const tfoot = document.getElementsByTagName('tfoot')[0];
    tbody.addEventListener('click', function (e) {
        const num = tbody.children.length;
        console.log(tbody);
        // 过滤点击的是否是a标签
        if (e.target.tagName === 'A') {
            // 获取数据
            const price = parseFloat(e.target.parentElement.parentElement.innerHTML.match(/\d+.\d+/)[0]);
            const total = tfoot.innerHTML.match(/\d+.\d+/)[0];
            e.target.parentElement.parentElement.remove();
            tfoot.innerHTML = `<tr><th>总计</th><td colspan="2">${(total - price).toFixed(2)}(${num - 1}件商品)</td></tr>`;
        }
    });
}
// 执行绑定事件
bind();
