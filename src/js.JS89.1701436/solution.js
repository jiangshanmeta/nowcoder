const tagInput = {
    isInited: false,
    init,
    bindEvent,
    addTag,
    removeTag,
};
tagInput.init();

function init () {
    if (this.isInited) return;
    this.isInited = true;
    // 请修改这一行代码，保存class为js-input的输入框的dom元素引用
    this.input = document.querySelector('.js-input');
    this.bindEvent();
}

function bindEvent () {
    const input = this.input;
    if (!input) return;
    input.addEventListener('keydown', function (event) {
        // 请修改这一行代码，判断用户是否按了回车键
        const isEnter = event.keyCode === 13;
        // 请修改这一行代码，判断用户是否按了删除键
        const isDelete = event.keyCode === 8;

        (isEnter || isDelete) && event.preventDefault();
        isEnter && this.addTag();
        isDelete && this.removeTag();
    });
    input.parentNode.addEventListener('click', function () {
        input.focus();
    });
}

function addTag () {
    const text = this.input.value.trim();
    if (text === '') {
        this.input.value = '';
        return;
    }
    const spans = this.input.parentNode.querySelectorAll('.tag');
    const found = Array.from(spans).find(ele => ele.textContent === text);
    if (found) {
        this.input.value = '';
        return;
    }
    const span = document.createElement('span');
    span.classList.add('tag');
    span.innerHTML = text;
    this.input.parentNode.insertBefore(span, this.input);
    this.input.value = '';
}

function removeTag () {
    const text = this.input.value;
    if (text.length === 0) {
        const spans = this.input.parentNode.querySelectorAll('.tag');
        if (spans.length > 0) {
            this.input.parentNode.removeChild(spans[spans.length - 1]);
        }
    }
}
