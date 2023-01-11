const _symbolKey = array => {
    const object = {};
    for (item of array) {
        object[Symbol(item)] = item;
    }
    return object;
};
