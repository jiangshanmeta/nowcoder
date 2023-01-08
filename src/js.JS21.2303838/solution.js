const cups = [
    { type: 1,
        price: 100,
        color: 'black',
        sales: 60,
        name: '牛客logo马克杯', },
    { type: 2,
        price: 40,
        color: 'blue',
        sales: 100,
        name: '无盖星空杯', },
    { type: 4,
        price: 60,
        color: 'green',
        sales: 200,
        name: '老式茶杯', },
    { type: 3,
        price: 50,
        color: 'green',
        sales: 600,
        name: '欧式印花杯', },
];
const select = document.querySelector('select');
const ul = document.querySelector('ul');
select.onchange = function () {
    ul.innerHTML = '';
    let newArr = [];
    switch (parseInt(this.value)) {
    case 1 :
        newArr = cups.filter((item) => { return item.sales < 100; });
        break;
    case 2:
        newArr = cups.filter((item) => { return item.sales <= 500 && item.sales >= 100; });
        break;
    case 3:
        newArr = cups.filter((item) => { return item.sales > 500; });
        break;
    }
    listRendering(newArr);
};

function listRendering (arr) {
    let str = '';
    arr.forEach(element => {
        str += `<li>${element.name}</li>`;
    });

    ul.innerHTML = str;
}
