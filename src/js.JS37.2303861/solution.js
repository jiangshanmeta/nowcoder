const ul = document.querySelector('ul');
const person = { sex: '男',
    age: '25',
    name: '王大锤',
    height: 28,
    weight: 32, };
const inp = document.querySelector('input');
inp.value = person.weight;
const _render = () => {
    const str = `<li>姓名：<span>${person.name}</span></li>
               <li>性别：<span>${person.sex}</span></li>
               <li>年龄：<span>${person.age}</span></li>
               <li>身高：<span>${person.height}</span></li>
               <li>体重：<span>${person.weight}</span></li>`;
    ul.innerHTML = str;
    inp.value = person.weight;
};
_render(ul);
function Observe (target) {
    if (typeof target !== 'object' || target == null) {
        return target;
    }
    for (const key in target) {
        defineReactive(target, key, target[key]);
    }
}
function defineReactive (target, key, value) {
    Object.defineProperty(target, key, {
        get: function () {
            return value;
        },
        set: function (newVal) {
            if (newVal !== value) {
                value = newVal;
                _render();
            }
        },

    });
}
Observe(person);

inp.oninput = function () {
    person.weight = this.value;
};
