const all = document.querySelector('#all');

const options = Array.from(document.querySelectorAll('.item'));
all.onchange = () => {
    options.forEach(x => {
        x.checked = all.checked;
    });
};
options.forEach((item) => {
    item.onchange = function () {
        all.checked = options.every(x => x.checked);
    };
});
