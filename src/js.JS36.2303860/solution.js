const options = document.querySelector('.options');
const optionItems = [].slice.call(document.querySelectorAll('.options li'));
const items = [].slice.call(document.querySelectorAll('.items li'));
options.onclick = function (e) {
    optionItems.forEach((item, index) => {
        if (index === e.target.getAttribute('data-type')) {
            item.style.backgroundColor = '#25bb9b';
            items[index].style.display = 'block';
        } else {
            item.style.backgroundColor = '#fff';
            items[index].style.display = 'none';
        }
    });
};
