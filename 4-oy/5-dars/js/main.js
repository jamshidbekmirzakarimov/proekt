


// cars.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

// const carFragment = new DocumentFragment();
// const carFragment = document.createDocumentFragment();
// console.log(carFragment);

// Kapsula, qorboboni qopi, ko'rinmas paket, domda ko'rinmas array, katetor
// DOMda ko'rinmaydi

// for (const car of cars) {
//     let newItem = document.createElement("li");
//     newItem.textContent = car;
//     carFragment.appendChild(newItem);
// }

// carList.appendChild(carFragment);

// const elPokeList = document.querySelector(".poke-list");
// const pokeFargment = new DocumentFragment();

// Higher order function
// pokemons.forEach(function(item){
//     const newPokeItem = document.createElement("li");
//     const newPokeTitle = document.createElement("h3");
//     const newPokeNum = document.createElement("span");
//     const newPokeImg = document.createElement("img");
//     const newPokeType = document.createElement("p");
//     const newPokeTime = document.createElement("time");

//     newPokeTitle.textContent = item.name;
//     newPokeNum.textContent = item.num;
//     newPokeImg.src = item.img;
//     newPokeImg.width = "200";
//     newPokeImg.heigt = "200";
//     newPokeType.textContent = item.type.join(", ");
//     newPokeTime.textContent = item.spawn_time;
//     newPokeTime.setAttribute("datetime", `2023-02-01 ${item.spawn_time}`);

//     newPokeItem.appendChild(newPokeTitle);    
//     newPokeItem.appendChild(newPokeNum);    
//     newPokeItem.appendChild(newPokeImg);    
//     newPokeItem.appendChild(newPokeType);    
//     newPokeItem.appendChild(newPokeTime);    

//     // newPokeItem.append(newPokeTitle, newPokeNum, newPokeImg, newPokeType, newPokeTime, "Ulug'bek aka");
//     // newPokeItem.append("Ulug'bek aka");
//     // newPokeItem.prepend("Abdurauf");

//     pokeFargment.appendChild(newPokeItem);
// });

// elPokeList.appendChild(pokeFargment);

const elPokeList = document.querySelector(".js-poke-list");
const pokeFragment = new DocumentFragment();

const elPokeTemplate = document.querySelector(".js-poke-temp").content;

console.log(elPokeTemplate);

console.log(kinolar);

kinolar.forEach(function(poke){
    const clonePokeTemplate = elPokeTemplate.cloneNode(true);
    
    // console.dir(clonePokeTemplate);
    const newPokeItem = clonePokeTemplate.querySelector(".js-poke-item");
    clonePokeTemplate.querySelector(".js-poke-title").textContent = poke.title;
    clonePokeTemplate.querySelector(".js-poke-num").textContent = poke.year;
    clonePokeTemplate.querySelector(".js-poke-type").textContent = poke.cast;
    clonePokeTemplate.querySelector(".js-poke-time").textContent = poke.genres;
    pokeFragment.appendChild(newPokeItem);
});

elPokeList.appendChild(pokeFragment);


// const elAddBtn = document.querySelector(".js-add-btn");
// const elBtnWrapper = document.querySelector(".js-btn-wrapper");
// const elBtn = document.querySelector(".js-btn");
// const elBtns = document.querySelectorAll(".js-btn");

// elBtnWrapper.addEventListener("click", function (evt) {
//     // alert("Bosildi");

//     // console.log(evt.target);
//     if(evt.target.matches(".js-btn")){
//         alert("Bosildi!");
//     } else {
//         alert("Boshqa joy bosildi!");
//     }
// });

// elBtns.forEach(function(btn){
//     btn.addEventListener("click", function(){
//         alert("Bosildi!");
//     })
// });

// elAddBtn.addEventListener("click", function(){
//     const newBtn = document.createElement("button");
//     newBtn.classList.add("btn", "btn-primary", "js-btn", "me-2");
//     newBtn.textContent = "New Button";

//     elBtnWrapper.appendChild(newBtn);
// });


