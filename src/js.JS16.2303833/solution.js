const _rank = array => {
    array.sort((left, right) => {
        const lg = left.chinese + left.math + left.english;
        const rg = right.chinese + right.math + right.english;
        return rg - lg;
    });
    return array;
};
