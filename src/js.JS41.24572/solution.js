function commonParentNode (oNode1, oNode2) {
    let commonParent = null;
    while (!commonParent && oNode1) {
        if (oNode1.contains(oNode2)) {
            commonParent = oNode1;
            break;
        }
        oNode1 = oNode1.parentNode;
    }
    return commonParent;
}
