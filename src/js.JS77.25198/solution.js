function rgb2hex (sRGB) {
    const nums = sRGB.slice(4, sRGB.length - 1).split(',').map(item => +item);
    if (nums.some((num) => {
        return Number.isNaN(num);
    })) {
        return sRGB;
    }

    return `#${nums.map(num => pad(num.toString(16))).join('')}`;
}

function pad (str) {
    if (str.length < 2) {
        return `0${str}`;
    }
    return str;
}
