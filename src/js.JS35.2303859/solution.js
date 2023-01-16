const data = [
    { name: 'nowcoder1', },
    { name: 'nowcoder2', },
];

const _api = string => {
    const method = string.split('?')[0];
    if (method === 'get') {
        return data;
    } else {
        const param = string.slice(string.indexOf('?') + 1).split('&').reduce((obj, item) => {
            const [key, value,] = item.split('=');
            obj[key] = value;
            return obj;
        }, {});

        data.forEach((item) => {
            if (item.name === param.name) {
                item.name = param.to;
            }
        });
    }
};
