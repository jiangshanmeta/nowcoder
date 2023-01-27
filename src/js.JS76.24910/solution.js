function isUSD (str) {
    if (str[0] !== '$') {
        return false;
    }
    const dotIndex = str.indexOf('.');
    if (dotIndex !== -1) {
        if (dotIndex !== str.length - 3) {
            return false;
        }
        str = str.slice(1, dotIndex);
    } else {
        str = str.slice(1);
    }
    const arr = str.split(',');

    return arr.every((item, index) => {
        if (index === 0) {
            return item.length <= 3 && item.length > 0;
        } else {
            return item.length === 3;
        }
    });
}
