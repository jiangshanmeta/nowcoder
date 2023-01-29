function CheckGroup (renderTo, options, isMultiple) {
    this.renderTo = renderTo;
    this.options = options;
    this.isMultiple = !!isMultiple;
    this.initHtml();
    this.initEvent();
}
CheckGroup.prototype.initHtml = fInitHtml;
CheckGroup.prototype.initEvent = fInitEvent;
CheckGroup.prototype.toggleEl = fToggleEl;
CheckGroup.prototype.isSelected = fIsSelected;
CheckGroup.prototype.val = fVal;

function fInitHtml () {
    // 请补全代码，拼接html字符串
    const sHtml = `<div class="checkgroup ${this.isMultiple ? '' : 'radius'}">` + this.options.map(option => {
        return `<div data-val="${option.value}" class="item">${option.text}</div>`;
    }).join('') + '</div>';
    this.renderTo.innerHTML = sHtml;
    // 请补全代码，获取checkgroup的dom元素引用
    this.el = this.renderTo.querySelector('div.checkgroup');
}

function fInitEvent () {
    this.el && this.el.addEventListener('click', function (event) {
        const item = event.target;
        item.classList.contains('item') && this.toggleEl(item);
    });
}

function fToggleEl (item) {
    // 根据当前是单选还是多选，以及当前元素是否选中，高亮/取消���亮指定的选项dom元素
    if (this.isSelected(item)) {
        // 请补全代码
        item.classList.remove('selected');
    } else if (this.isMultiple) {
        // 请补全代码
        item.classList.add('selected');
    } else {
        // 请补全代码
        item.parentNode.children.forEach(ele => {
            ele.classList.remove('selected');
        });
        item.classList.add('selected');
    }
}

function fIsSelected (item) {
    // 请补全代码，判断item是否选中
    return item.classList.contains('selected');
}

function fVal (values) {
    if (arguments.length === 0) {
        // 请补全代码，获取高亮的选项元素
        const items = this.el.querySelectorAll('div.selected');
        // 请补全代码，获取高亮的选项元素的data-val
        const result = Array.from(items).map(ele => {
            return ele.dataset.val;
        });
        return result;
    }
    !this.isMultiple && values.length > 1 && (values.length = 1);
    // 请补全代码，获取所有的选项元素
    const items = this.el.querySelectorAll('.item');
    // 请补全代码，在指定元素上加上高亮的class
    Array.from(items).forEach(ele => {
        //  浏览器 不支持 nodelist的 forEach 导致通不过........!!!!!!!!
        // (items).forEach(ele => {
        if (values.includes(ele.getAttribute('data-val'))) {
            ele.classList.add('selected');
        } else {
            ele.classList.remove('selected');
        }
    });
}
