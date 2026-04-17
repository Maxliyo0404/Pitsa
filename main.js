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


render(napitDatas, napitDataElement);

let input = document.getElementById("inputData");
search.addEventListener("inputData", (e) => {
    let inputValue = e.target.value.toLowerCase(); 
    

    let filteredData = allData.filter(item => {  
        return item.name.toLowerCase().includes(inputValue);
    });

    render(filteredData); 
});

let pitssa = document.getElementById("pissaData");

let pizza_data = [
    { id: 1, img: "./img/Rectangle 4.png", name: "EASY PEASY", description: "Курица, Лук...", price: 549, count: 0, badge: "ХИТ" },
    { id: 2, img: "./img/Rectangle 4 (1).png", name: "Margarita", description: "Klassik...", price: 450, count: 0, badge: "NEW" }, // <-- VERGUL SHART
    { id: 3, img: "./img/Rectangle 4.png", name: "EASY PEASY", description: "Курица, Лук...", price: 549, count: 0, badge: "ХИТ" },
    { id: 4, img: "./img/Rectangle 4 (1).png", name: "Margarita", description: "Klassik...", price: 450, count: 0, badge: "NEW" }, // <-- VERGUL SHART
    { id: 5, img: "./img/Rectangle 4.png", name: "EASY PEASY", description: "Курица, Лук...", price: 549, count: 0, badge: "ХИТ" },
    { id: 6, img: "./img/Rectangle 4 (1).png", name: "Margarita", description: "Klassik...", price: 450, count: 0, badge: "NEW" }
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

// TO'G'RI CHAQIRISH:
renderPitsa(pizza_data, pitssa);