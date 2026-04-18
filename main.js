
let napitDatas = [
    { id: 1, img: "./image/Fire.svg", name: "Акции" },
    { id: 2, img: "./image/Pizza.svg", name: "Пицца" },
    { id: 3, img: "./image/Group 101.svg", name: "Суши" },
    { id: 4, img: "./image/Drink.svg", name: "Напитки" },
    { id: 5, img: "./image/Fire.svg", name: "Закуски" },
    { id: 6, img: "./image/Fire.svg", name: "Комбо" },
    { id: 7, img: "./image/Fire.svg", name: "Десерты" },
    { id: 8, img: "./image/Fire.svg", name: "Соусы" },
];
let pizzas = document.getElementById("pissaData")
let pizzasa = document.getElementById("pissaDatas")
let pizzassa = document.getElementById("pissaDatassa")
let pizza_data = [
    { id: 1, img: "./image/Pizza.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "NEW" },
    { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "ХИТ" },
    { id: 3, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" },
    { id: 4, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" },
    { id: 5, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" },
    { id: 6, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" },
     { id: 1, img: "./image/Pizza.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "" },
     { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "" },
];
let pizza_datas = [
    { id: 1, img: "./image/Pizza.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "NEW" },
    { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "ХИТ" },
    { id: 3, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" },
    { id: 4, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" },
    { id: 5, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" },
    { id: 6, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" },
     { id: 1, img: "./image/Pizza.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "" },
     { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "" },
];
let pizza_datassa = [
    { id: 1, img: "./image/Pizza.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "NEW" },
    { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "ХИТ" },
    { id: 3, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" },
    { id: 4, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" },
    { id: 5, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" },
    { id: 6, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" },
     { id: 1, img: "./image/Pizza.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "" },
     { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "" },
];

let result = [...pizza_data, ...pizza_datas, ...pizza_datassa];
function renderCategories(data, containerId) {
    let container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(el => `
        <div class="category-card">
            <img src="${el.img}" alt="${el.name}">
            <p>${el.name}</p>
        </div>
    `).join("");
}


function renderPizzas(data, containerId) {
    let container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(el => `
        <div class="pizza-card">
            ${el.badge ? `<div class="badge">${el.badge}</div>` : ''}
            <img class="pizza-img" src="${el.img}" alt="${el.name}">
            <h3 class="pizza-title">${el.name}</h3>
            <p class="pizza-desc">${el.description}</p>
            
            <div class="pizza-footer">
                <div class="counter-container">
                    <button onclick="changeCount(${el.id}, 'plus', '${containerId}')">+</button>
                    <span class="count-num">${el.count}</span>
                    <button class="btn-count" onclick="changeCount(${el.id}, 'plus')">+</button>

                </div>
              
                <div class="price-tag">от ${el.price * el.count} ₽</div>
        </div>
        </div>
    `).join("");
}

window.changeCount = function(id, action, containerId) {
    if (containerId === "pissaData") {
        pizza_data = pizza_data.map(item => updateItem(item, id, action));
        renderPizzas(pizza_data, "pissaData");
    } 
    else if (containerId === "pissaDatas") {
        pizza_datas = pizza_datas.map(item => updateItem(item, id, action));
        renderPizzas(pizza_datas, "pissaDatas");
    } 
    else if (containerId === "pissaDatassa") {
        pizza_datassa = pizza_datassa.map(item => updateItem(item, id, action));
        renderPizzas(pizza_datassa, "pissaDatassa");
    }
};

function updateItem(item, id, action) {
    if (item.id === id) {
        if (action === 'plus') return { ...item, count: item.count + 1 };
        if (action === 'minus' && item.count > 1) return { ...item, count: item.count - 1 };
    }
    return item;
}

   
    renderPizzas(pizza_data, "pissaData");
    renderPizzas(pizza_datas, "pissaDatas");
    renderPizzas(pizza_datassa, "pissaDatassa");

document.addEventListener("DOMContentLoaded", () => {
   
    renderCategories(napitDatas, "napitData");
    renderPizzas(pizza_data, "pissaData");
    renderPizzas(pizza_datas, "pissaDatas");
    renderPizzas(pizza_datassa, "pissaDatassa");



    let searchInput = document.getElementById("inputData");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            let val = e.target.value.toLowerCase();
            let filtered = pizza_data.filter(p => p.name.toLowerCase().includes(val));
            let filtered2 = pizza_datas.filter(p => p.name.toLowerCase().includes(val));
            let filtered3 = pizza_datassa.filter(p => p.name.toLowerCase().includes(val));
            renderPizzas(filtered, "pissaData");
            renderPizzas(filtered, "pissaDatas");
            renderPizzas(filtered, "pissaDatassa");
        });
    }
});