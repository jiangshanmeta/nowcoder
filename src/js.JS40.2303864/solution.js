const vnode = {
    tag: 'ul',
    props: {
        class: 'list',
    },
    text: '',
    children: [
        {
            tag: 'li',
            props: {
                class: 'item',
            },
            text: '',
            children: [
                {
                    tag: undefined,
                    props: {},
                    text: '牛客网',
                    children: [],
                },
            ],
        },
        {
            tag: 'li',
            props: {},
            text: '',
            children: [
                {
                    tag: undefined,
                    props: {},
                    text: 'nowcoder',
                    children: [],
                },
            ],
        },
    ],
};
const _createElm = vnode => {
    const {
        tag,
        props,
        children,
        text,
    } = vnode;

    if (typeof tag === 'string') {
        vnode.el = document.createElement(tag);
        for (const k in props) {
            vnode.el.setAttribute(k, props[k]);
        }
        children.forEach((child) => {
            vnode.el.appendChild(_createElm(child));
        });
    } else {
        vnode.el = document.createTextNode(text);
    }
    return vnode.el;
};
