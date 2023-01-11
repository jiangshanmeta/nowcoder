function namespace (oNamespace, sPackage) {
    const root = oNamespace;
    const names = sPackage.split('.');
    for (let i = 0; i < names.length; i++) {
        if (!oNamespace || typeof oNamespace[names[i]] !== 'object') {
            oNamespace[names[i]] = {};
        }
        oNamespace = oNamespace[names[i]];
    }
    return root;
}
