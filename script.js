//creo array contenitore di oggetti e lo riempio con i dati forniti

let memberData = [
  {
    profileIMG: "./img/wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnett",
    jobPosition: "Founder & CEO",
  },

  {
    profileIMG: "./img/angela-caroll-chief-editor.jpg",
    name: "Angela Caroll",
    jobPosition: "Chief Editor",
  },

  {
    profileIMG: "./img/walter-gordon-office-manager.jpg",
    name: "Walter Gordon",
    jobPosition: "Office Manager",
  },

  {
    profileIMG: "./img/angela-lopez-social-media-manager.jpg",
    name: "Angela Lopez",
    jobPosition: "Social Media Manager",
  },

  {
    profileIMG: "./img/scott-estrada-developer.jpg",
    name: "Scott Estrada",
    jobPosition: "Developer",
  },

  {
    profileIMG: "./img/barbara-ramos-graphic-designer.jpg",
    name: "Barbara Ramos",
    jobPosition: "Graphic Designer",
  },
];

// funzione che crea e stampa le team-card

function createCard() {
  let teamCont = document.querySelector(".team-container");
  for (let c = 0; c < memberData.length; c++) {
    teamCont.innerHTML += `<div class="team-card">
    <div class="card-image">
        <img src="${memberData[c].profileIMG}"
             alt="${memberData[c].name}"
        />
    </div>
    <div class="card-text">
        <h3>
            ${memberData[c].name}
        </h3>
         <p>
    ${memberData[c].jobPosition}
        </p>
    </div>
</div>`;
  }
}

createCard();
