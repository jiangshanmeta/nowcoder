const _findMostType = array => {
    let maxCount = 0;
    const result = [];
    const map = new Map();
    for (const item of array) {
        const type = typeof item;
        const count = map.has(type) ? map.get(type) + 1 : 1;
        map.set(type, count);
        if (count > maxCount) {
            result.length = 0;
            result.push(type);
            maxCount = count;
        } else if (count === maxCount) {
            result.push(type);
        }
    }
    result.push(maxCount);
    return result;
};
