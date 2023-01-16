let count = 0;
const _proxy = object => {
    return new Proxy(object, {
        get (target, prop, receiver) {
            if (prop in target) {
                count++;
            } else {
                count--;
            }

            return Reflect.get(...arguments);
        },
    });
};
