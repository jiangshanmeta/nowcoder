const closure = () => {
    let count = 0;
    return () => {
        return ++count;
    };
};
