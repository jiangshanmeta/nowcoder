function dom2json () {
    const jsContainer = document.getElementById('jsContainer');
    return createObj(jsContainer);
}

function createObj (element) {
    // 0. 创建一个空的对象
    const obj = {};
    // 1. 获得标签名，nodeName可以获得text标签(里面好多回车)，typeName获得是标签
    obj.tag = element.nodeName.toLowerCase().replace('#', '');
    // 2.如果是文本，有content属性，通过element.data来获得内容
    if (obj.tag === 'text') {
        obj.content = element.data.trim();
    }
    // 3.attributes初始化，如果有，那么逐个添加attributes
    obj.attributes = {};
    if (element.attributes) {
        for (let i = 0; i < element.attributes.length; i++) {
            const { name, value, } = element.attributes[i];
            obj.attributes[name] = value;
        }
    }
    // 4.0对孩子数组过滤，去除没有内容的text
    const childArr = Array.from(element.childNodes).filter((item) => {
        return (item.nodeName === '#text' && item.data.trim() !== '') || item.nodeName !== '#text';
    });
    // 4.1如果有孩子，那么递归调用自己，添加第i个数组元素
    obj.children = [];
    if (childArr.length) {
        for (let i = 0; i < childArr.length; i++) {
            obj.children[i] = createObj(childArr[i]);
        }
    }

    return obj;
}
