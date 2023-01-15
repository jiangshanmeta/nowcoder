function partialUsingArguments (fn, ...rest1) {
    return (...rest2) => {
        return fn(...rest1, ...rest2);
    };
}
