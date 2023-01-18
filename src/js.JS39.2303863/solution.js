const text = document.querySelector('.text');
const search = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = () => {
    const initText = text.innerText.replace(/^<b.*>$/g, '').replace(/^<\/b>/g, '');
    text.innerHTML = String(initText.replace(new RegExp(search.value, 'g'), `<b style="color: yellow">${search.value}</b>`));
};
