const _elementKey = () => {
    const p = document.querySelectorAll('p');
    const m = new Map();
    Array.from(p).forEach((i) => {
        m.set(i, i.textContent);
    });
    return m;
};
