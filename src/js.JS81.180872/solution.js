function link () {
    const elm = document.querySelector('#jsContainer');
    const reg = /(https?:\/\/)?(www\.\w+(\.(com|cn))*([?]\w+=\w*(&\w+=\w*)*)?(#\w+)?)/g;
    elm.innerHTML = elm.innerHTML.replace(reg, function (...args) {
        if (args[1]) {
            return `<a target="_blank" href="${args[1]}${args[2]}">${args[0]}</a>`;
        } else {
            return `<a target="_blank" href="http://${args[2]}">${args[0]}</a>`;
        }
    });
}
