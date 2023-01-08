function _comma (number) {
    let prefix = '';
    if (number < 0) {
        prefix = '-';
        number = -number;
    }
    const segment = [];
    while (number) {
        const rest = number % 1000;
        segment.push(rest);
        number = (number - rest) / 1000;
    }
    return `${prefix}${segment.reverse().join(',')}`;
}
