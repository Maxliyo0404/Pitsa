
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
let pizzassam = document.getElementById("pissaDatassam")
let pizzassa_1 = document.getElementById("pissaDatassa_1")
let pizzassa_2 = document.getElementById("pissaDatassa_2")
let pizzassa_3 = document.getElementById("pissaDatassa_3")
let pizza_data = [
    { id: 1, img: "./image/pissa11.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "NEW",  style: "width: 100%; height: 200px; object-fit: contain;  padding-top: 15px;" },
    { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "ХИТ",  style: "width: 100%; height: 200px; object-fit: contain;  padding-top: 15px;" },
    { id: 3, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "",  style: "width: 100%; height: 200px; object-fit: contain;  padding-top: 15px;" },
    { id: 4, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" ,  style: "width: 100%; height: 200px; object-fit: contain;  padding-top: 15px;"},
    { id: 5, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "",  style: "width: 100%; height: 200px; object-fit: contain;  padding-top: 15px;" },
    { id: 6, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" ,  style: "width: 100%; height: 200px; object-fit: contain;  padding-top: 15px;"},
     { id: 1, img: "./image/pissa11.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "",  style: "width: 100%; height: 200px; object-fit: contain;  padding-top: 15px;" },
     { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "", style: "width: 100%; height: 200px; object-fit: contain;  padding-top: 15px;"},
];
let pizza_datas = [
    {id: 1, img: "./image/sushi11.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475 , count: 1, badge: "NEW", style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;"},
    {id: 2, img: "./image/sushi2.png", name: "Филадельфия крем", description: "Сливочный сыр, семга татаки с тростниковым сахаром, соус ...", price: 395 , count: 1, badge: "NEW", style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;"},
    {id: 3, img: "./image/sushi3.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475 , count: 1, badge: "", style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;"},
    {id: 4, img: "./image/sushi4.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475 , count: 1, badge: "", style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;"},
    {id: 5, img: "./image/sushi4.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475 , count: 1, badge: "", style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;"},
    {id: 6, img: "./image/sushi3.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475 , count: 1, badge: "", style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;"},
    {id: 7, img: "./image/sushi11.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475 , count: 1, badge: "", style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;"},
    {id: 8, img: "./image/sushi2.png", name: "Филадельфия крем", description: "Сливочный сыр, семга татаки с тростниковым сахаром, соус ...", price: 475 , count: 1, badge: "", style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;"},
    
    
];
let pizza_datassa = [
    { id: 1, img: "./image/zakuska.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475, count: 1, badge: "NEW",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 2, img: "./image/zakuska1.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 395, count: 1, badge: "NEW",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 3, img: "./image/zakuska3.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 4, img: "./image/zakuska4.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 5, img: "./image/zakuska4.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 6, img: "../image/zakuska3.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 7, img: "./image/pissa11.svg", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 395, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 8, img: "./image/pissa11.svg", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
   
];
let pizza_datassam = [
    { id: 1, img: "./image/desert1.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475, count: 1, badge: "NEW",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 2, img: "./image/desert2.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 395, count: 1, badge: "NEW",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 3, img: "./image/desert3.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 4, img: "./image/desert4.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 5, img: "./image/desert4.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 6, img: "./image/desert5.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 395, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 7, img: "./image/desert6.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 455, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 8, img: "./image/desert3.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
   
];
let pizza_datassam_1 = [
    { id: 1, img: "./image/napitki1.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475, count: 1, badge: "NEW",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 2, img: "./image/napitka2.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 395, count: 1, badge: "NEW",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 3, img: "./image/napitka3.png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 4, img: "./image/napitki4.png", name: "Тигр мама", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 5, img: "./image/napitki5.png", name: "Супер Филадельфия", description: "", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 6, img: "./image/napitki6.png", name: "Тигр мама", description: "", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 7, img: "./image/napitki1.png", name: "Супер Филадельфия", description: "", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 8, img: "./image/napitka2.png", name: "Тигр мама", description: "", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
   
];
let pizza_datassam_2 = [
    { id: 1, img: "./image/sous1.png", name: "Филадельфия кранч", description: "", price: 475, count: 1, badge: "NEW",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 2, img: "./image/sous2.png", name: "Филадельфия кранч", description: "", price: 395, count: 1, badge: "NEW",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 3, img: "./image/sous3.png", name: "Филадельфия кранч", description: "", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 4, img: "./image/sous4.png", name: "Тигр мама", description: "", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 5, img: "./image/sous2.png", name: "Филадельфия кранч", description: "", price: 395, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 6, img: "./image/sous4.png", name: "Тигр мама", description: "", price: 525, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 7, img: "./image/sous3.png", name: "Филадельфия кранч", description: "", price: 425, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
    { id: 8, img: "./image/sous1.png", name: "Филадельфия кранч", description: "", price: 475, count: 1, badge: "",  style: " display: block; padding: 0; width: 100%; height: aspect-ratio: 1; object-fit: cover; border-top-left-radius: 8px; border-top-right-radius: 8px;" },
   
];
let pizza_datassam_3 = [
    { id: 1, img: "./image/Pizza.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "NEW" },
    { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "ХИТ" },
    { id: 3, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" },
    { id: 4, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" },
    { id: 5, img: "./image/Rectangle 4 (2).svg", name: "4 сезона", description: "Бекон, Ветчина, Грибы...", price: 630, count: 1, badge: "" },
    { id: 6, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY чикен а-ля", description: "Курица, Лук, Соус...", price: 249, count: 1, badge: "" },
     { id: 1, img: "./image/Pizza.svg", name: "Чикен Сладкий Чили", description: "Курица, Лук, Перец Халапеньо...", price: 399, count: 1, badge: "" },
     { id: 2, img: "./image/Rectangle 4.svg", name: "EASY PEASY огуречный", description: "Курица, Лук, Соус...", price: 549, count: 1, badge: "" },
];

let result = [...pizza_data, ...pizza_datas, ...pizza_datassa, ...pizza_datassam, ...pizza_datassam_1, ...pizza_datassam_2, ...pizza_datassam_3];
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
            <img class="pizza-img" src="${el.img.trim()}" alt="${el.name}" style="${el.style || ''}">
             <div class="pizza-cards">
            <h3 class="pizza-title">${el.name}</h3>
            <p class="pizza-desc">${el.description}</p>
            
            <div class="pizza-footer">
                <div class="counter-container"> 
                   <button class="btn-count" onclick="changeCount(${el.id}, 'minus', '${containerId}')">−</button>
                    <span class="count-num">${el.count}</span>
                    <button class="btn-count" onclick="changeCount(${el.id}, 'plus', '${containerId}')">+</button>

                </div>
              
                <div class="price-tag">от ${el.price * el.count} ₽</div>
        </div>
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
    else if (containerId === "pissaDatassam") {
        pizza_datassam = pizza_datassam.map(item => updateItem(item, id, action));
        renderPizzas(pizza_datassam, "pissaDatassam");
    }
    else if (containerId === "pissaDatassam_1") {
        pizza_datassam_1 = pizza_datassam_1.map(item => updateItem(item, id, action));
        renderPizzas(pizza_datassam_1, "pissaDatassam_1"); 
    } 
    else if (containerId === "pissaDatassam_2") {
        pizza_datassam_2 = pizza_datassam_2.map(item => updateItem(item, id, action));
        renderPizzas(pizza_datassam_2, "pissaDatassam_2"); 
    }
    else if (containerId === "pissaDatassam_3") {
        pizza_datassam_3 = pizza_datassam_3.map(item => updateItem(item, id, action));
        renderPizzas(pizza_datassam_3, "pissaDatassam_3"); 
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
    renderPizzas(pizza_datassam, "pissaDatassam");
    renderPizzas(pizza_datassam_1, "pissaDatassam_1");
    renderPizzas(pizza_datassam_2, "pissaDatassam_2");
    renderPizzas(pizza_datassam_3, "pissaDatassam_3");

document.addEventListener("DOMContentLoaded", () => {
   
    renderCategories(napitDatas, "napitData");
    renderPizzas(pizza_data, "pissaData");
    renderPizzas(pizza_datas, "pissaDatas");
    renderPizzas(pizza_datassa, "pissaDatassa");
    renderPizzas(pizza_datassam, "pissaDatassam");
    renderPizzas(pizza_datassam_1, "pissaDatassam_1");
    renderPizzas(pizza_datassam_2, "pissaDatassam_2");
    renderPizzas(pizza_datassam_3, "pissaDatassam_3");



    let searchInput = document.getElementById("inputData");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            let val = e.target.value.toLowerCase();
            let filtered = pizza_data.filter(p => p.name.toLowerCase().includes(val));
            let filtered2 = pizza_datas.filter(p => p.name.toLowerCase().includes(val));
            let filtered3 = pizza_datassa.filter(p => p.name.toLowerCase().includes(val));
            let filtered4 = pizza_datassam.filter(p => p.name.toLowerCase().includes(val));
            let filtered5 = pizza_datassam_1.filter(p => p.name.toLowerCase().includes(val));
            let filtered6 = pizza_datassam_2.filter(p => p.name.toLowerCase().includes(val));
            let filtered7 = pizza_datassam_3.filter(p => p.name.toLowerCase().includes(val));
            renderPizzas(filtered, "pissaData");
            renderPizzas(filtered, "pissaDatas");
            renderPizzas(filtered, "pissaDatassa");
            renderPizzas(filtered, "pissaDatassam");
            renderPizzas(filtered, "pissaDatassam_1");
            renderPizzas(filtered, "pissaDatassam_2");
            renderPizzas(filtered, "pissaDatassam_3");
        });
    }
});