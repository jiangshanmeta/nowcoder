function count (arr, item) {
    return arr.reduce((count, current) => {
        return count + (current === item ? 1 : 0);
    }, 0);
}
