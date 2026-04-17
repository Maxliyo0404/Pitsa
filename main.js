let napitData = document.getElementById("napitData");
let napitDatas =[
    { id:1,  img:"./image/Fire.svg ",  name:"Акции"},
    { id:2,  img:"./image/Pizza.svg",  name:"Пицца"},
    { id:3,  img:"./image/Group 101.svg ", name:"Суши"},
    { id:4,  img:"./image/Drink.svg ",  name:"Напитки"},
    { id:5,  img:"./image/Fire.svg ",  name:"Закуски"},
    { id:6,  img:"./image/Fire.svg ",  name:"Комбо"},
    { id:7,  img:"./image/Fire.svg ",  name:"Десерты"},
    { id:8,  img:"./image/Fire.svg ",  name:"Соусы"},
]

function render(napitData) {
  let cards = napitData.map(el => `
    <div class="card">
        <img class="img"  src="${el.img}" alt="${el.name}">
        <p class="text">${el.name}</p>

    </div>
  `).join(""); 
  napitData.innerHTML = cards;
}
render(napitData);