document.querySelector('#range').onchange = function () {
    const speed = document.querySelector('#range').value;
    document.querySelector('#rect').style.animationDuration = 11 - speed + 's';
};
