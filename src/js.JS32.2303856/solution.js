const _proxy = (object, ...prototypes) => {
    return new Proxy(object, {
        get (target, prop) {
            if (prototypes.includes(prop)) {
                return 'noright';
            }
            return object[prop];
        },
    });
};
