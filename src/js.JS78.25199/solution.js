function cssStyle2DomStyle (sName) {
    const arr = sName.split('-').filter(item => item);
    for (let i = 1; i < arr.length; i++) {
        arr[i] = ucfirst(arr[i]);
    }
    return arr.join('');
}

function ucfirst (str) {
    return str[0].toUpperCase() + str.slice(1);
}
