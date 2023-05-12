"use strict";
const pictures = {
  1: "./star_img/star-img-1.jpg",
  2: "./star_img/star-img-2.jpg",
  3: "./star_img/star-img-3.jpg",
  4: "./star_img/star-img-4.jpg",
  5: "./star_img/star-img-5.jpg",
};

let number = 1;
const container = document.querySelector(".container");
container.innerHTML = ` 
       <div>
        <h1 class="heading-primary">STARWARS CHARACTERS</h1>
      </div>
    


`;

async function loadPeople(num) {
  let data = await fetch("https://swapi.dev/api/people/" + num);
  let newData = await data.json();
  const div = document.createElement("div");
  div.classList.add("flex-container");
  div.innerHTML = ` 
  <ul>
  <li class="person-property">NAME: <span class="span"> ${newData.name}</span></li>
  <li class="person-property">HEIGHT: <span class="span">${newData.height}</span></li>
  <li class="person-property">MASS: <span class="span"> ${newData.mass}</span></li>
  <li class="person-property">
    HAIR COLOR: <span class="span">${newData.hair_color}</span>
  </li>
  <li class="person-property">
    SKIN COLOR: <span class="span">${newData.skin_color}</span>
  </li>
  <li class="person-property">
    BIRTH YEAR: <span class="span">${newData.birth_year}</span>
  </li>
</ul>
  
  
<div class="image-box">
<img class="images" src="./star_img/star-img-${num}.jpg" alt="" />
</div>

  `;
  container.appendChild(div);

  const btn = document.createElement("div");
  btn.classList.add("flexer");
  btn.innerHTML = `<div>
  <button class="btn">NEXT</button>
  </div>
  `;
  container.appendChild(btn);

  btn.addEventListener("click", function () {
    div.innerHTML = "";
    btn.innerHTML = "";
    loadPeople(number++);
  });

  const btnPreview = document.createElement("button");
  btnPreview.textContent = "previous";
  btn.appendChild(btnPreview);

  btnPreview.style.backgroundColor = "antiquewhite";
  btnPreview.style.padding = "2rem 4rem";

  btnPreview.addEventListener("click", function () {
    btnPreview.innerHTML = "";
    div.innerHTML = " ";
    // loadPeople(number--);
  });
}

loadPeople(number);
