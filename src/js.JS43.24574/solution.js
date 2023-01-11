function bindThis (f, oTarget) {
    return function () {
        return f.apply(oTarget, arguments);
    };
}
