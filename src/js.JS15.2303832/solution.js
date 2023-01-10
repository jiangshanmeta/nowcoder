const _createPage = (allItem, pageItem) => {
    // 补全代码
    const ulNode = document.querySelector('#ul');
    const frag = document.createDocumentFragment(); // 文档片段

    const page = Math.ceil(allItem / pageItem); // 页数

    for (let i = 1; i <= page; i++) {
        const li = document.createElement('li');
        li.innerText = `${i}`;
        frag.appendChild(li);
    }
    ulNode.appendChild(frag);
};
