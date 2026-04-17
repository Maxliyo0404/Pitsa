let napitDataElement = document.getElementById("napitData"); // Element nomi o'zgartirildi
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

function render(data, container) {
  let cards = data.map(el => `
    <div class="cards">
    <div class="card">
        <img class="img" src="${el.img}" alt="${el.name}">
        <p class="text">${el.name}</p>
    </div>
    </div>
  `).join(""); 
  
  container.innerHTML = cards; 
}

document.addEventListener("DOMContentLoaded", () => {
let pitssa = document.getElementById("pissaData");

let pizza_data = [
    { id: 1, img: "./image/Pizza.svg", name: "EASY PEASY", description: "Курица, Лук...", price: 549, count: 1, badge: "ХИТ" },
    { id: 2, img: "/image/Rectangle 4.svg", name: "Margarita", description: "Klassik...", price: 450, count:  1, badge: "NEW" }, 
    { id: 3, img: "/image/Rectangle 4 (1).svg", name: "EASY PEASY", description: "Курица, Лук...", price: 549, count: 1, badge: "ХИТ" },
    { id: 4, img: "./image/Rectangle 4 (2).svg", name: "Margarita", description: "Klassik...", price: 450, count:  1, badge: "NEW" }, 
    { id: 5, img: "./image/Rectangle 4 (2).svg", name: "Margarita", description: "Klassik...", price: 450, count:  1, badge: "NEW" }, 
    { id: 6, img: "./image/Rectangle 4 (1).svg", name: "EASY PEASY", description: "Курица, Лук...", price: 549, count: 1, badge: "ХИТ" },
    { id: 7, img: "./image/Pizza.svg", name: "EASY PEASY", description: "Курица, Лук...", price: 549, count: 1, badge: "ХИТ" },
     { id: 2, img: "/image/Rectangle 4.svg", name: "Margarita", description: "Klassik...", price: 450, count:  1, badge: "NEW" }, 
];

function renderPitsa(dataArray, targetElement) {
    if (!targetElement) return; 

    targetElement.innerHTML = dataArray.map(el => `
        <div class="box">
            <img class="img" src="${el.img}" alt="${el.name}">
            <h2 class="text">${el.name}</h2>
            <p class="text">${el.description}</p>
            <div class="footer">
                <span>${el.price} ₽</span>
                <a class="xit" href="#">${el.badge}</a>
            </div>
        </div>
    `).join("");
}
renderPitsa(pizza_data, pitssa);
});
window.changeCount = function(id, action) {
    pizza_data = pizza_data.map(item => {
        if (item.id === id) {
            if (action === 'plus') return { ...item, count: item.count + 1 };
            if (action === 'minus' && item.count > 1) return { ...item, count: item.count - 1 };
        }
        return item;
    });
    renderData(pizza_data, "pissaData");
};

function renderData(data, containerId) {
    let container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(el => `
        <div class="box">
            <img class="img" src="${el.img}" alt="${el.name}">
            <h2 class="text">${el.name}</h2>
            <p class="text">${el.description || ''}</p>
            
            ${el.price ? `
                <div class="counter">
                    <button onclick="changeCount(${el.id}, 'minus')">−</button>
                    <span>${el.count}</span>
                    <button onclick="changeCount(${el.id}, 'plus')">+</button>
                </div>
                <div class="footer">
                    <span class="price">${el.price * el.count} ₽</span>
                    <a class="xit" href="#">${el.badge}</a>
                </div>
            ` : `<p class="text">${el.name}</p>`}
        </div>
    `).join("");
}
document.addEventListener("DOMContentLoaded", () => {
    renderData(napitDatas, "napitData");
    renderData(pizza_data, "pissaData");

    let searchInput = document.getElementById("inputData");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            let val = e.target.value.toLowerCase();
            let filtered = pizza_data.filter(p => p.name.toLowerCase().includes(val));
            renderData(filtered, "pissaData");
        });
    }
});