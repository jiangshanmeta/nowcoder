const _getParams = (url) => {
    return url.slice(url.indexOf('?') + 1).split('&').reduce((obj, str) => {
        const [k, v,] = str.split('=');
        obj[k] = v;
        return obj;
    }, {});
};
