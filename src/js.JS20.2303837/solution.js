const _flatten = arr => {
    return arr.reduce((result, item) => {
        if (Array.isArray(item)) {
            result.push(..._flatten(item));
        } else {
            result.push(item);
        }
        return result;
    }, []);
};
