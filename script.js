"use strict";

function generateHTMLAvailableParty() {
  document.querySelector(".party-grid").innerHTML = `
    <div class="party-background">
                <div class="character-pic cid">
                  <img src="menu/Cid.png" alt="" class="character-pic" />
                </div>
              </div>
              <div class="party-background">
                <div class="character-pic aeris">
                  <img src="menu/Aeris.png" alt="" class="character-pic" />
                </div>
              </div>
              <div class="party-background">
                <div class="character-pic barret">
                  <img src="menu/Barret.png" alt="" class="character-pic" />
                </div>
              </div>
              <div class="party-background">
                <div class="character-pic caitsith">
                  <img src="menu/CaitSith.png" alt="" class="character-pic" />
                </div>
              </div>
              <div class="party-background">
                <div class="character-pic yuffie">
                  <img src="menu/Yuffie.png" alt="" class="character-pic" />
                </div>
              </div>
              <div class="party-background">
                <div class="character-pic vincent">
                  <img src="menu/Vincent.png" alt="" class="character-pic" />
                </div>
              </div>
              <div class="party-background">
                <div class="character-pic sephiroth">
                  <img src="menu/Sephiroth.png" alt="" class="character-pic" />
                </div>
              </div>
    `;
}

generateHTMLAvailableParty();

////////////////////////////////////////
/*--------- DOM ELEMENTS  -----------*/
////////////////////////////////////////
const pickMenu = document.querySelector(".pick");
const mainMenu = document.querySelector(".main");

////////////////////////////////////////
/*--------- PARTY MEMBERS  -----------*/
////////////////////////////////////////

const characters = {
  cloud: {
    id: "cloud",
    name: "Cloud", //Cloud
    level: 77, //77
    hpCurrent: 7777, //4923
    hpMax: 8769, //8769
    mpCurrent: 777, //999
    mpMax: 999, //999
  },
  barret: {
    id: "barret",
    name: "Barret",
    level: 65,
    hpCurrent: 6146,
    hpMax: 6146,
    mpCurrent: 531,
    mpMax: 531,
  },
  tifa: {
    id: "tifa",
    name: "Tifa",
    level: 74,
    hpCurrent: 3146,
    hpMax: 3146,
    mpCurrent: 739,
    mpMax: 739,
  },
  redxiii: {
    id: "redxiii",
    name: "Red XIII",
    level: 75,
    hpCurrent: 5127,
    hpMax: 5127,
    mpCurrent: 785,
    mpMax: 932,
  },
  caitsith: {
    id: "caitsith",
    name: "Cait Sith",
    level: 62,
    hpCurrent: 5822,
    hpMax: 5822,
    mpCurrent: 544,
    mpMax: 544,
  },
  cid: {
    id: "cid",
    name: "Cid",
    level: 62,
    hpCurrent: 5822,
    hpMax: 5822,
    mpCurrent: 544,
    mpMax: 544,
  },
  yuffie: {
    id: "yuffie",
    name: "Yuffie",
    level: 67,
    hpCurrent: 5373,
    hpMax: 5373,
    mpCurrent: 577,
    mpMax: 577,
  },
  vincent: {
    id: "vincent",
    name: "Vincent",
    level: 65,
    hpCurrent: 5086,
    hpMax: 5086,
    mpCurrent: 598,
    mpMax: 598,
  },
  sephiroth: {
    id: "sephiroth",
    name: "Sephiroth",
    level: 80,
    hpCurrent: 7777,
    hpMax: 9000,
    mpCurrent: 999,
    mpMax: 999,
  },
};

/////////////////////////////////////
///////////////
/// CLOUD IS THE ONLY STATIC ELEMENT, HE CAN NOT BE REMOVED FROM YOUR PARTY
///////////////
/////////////////////////////////////

const cloudFunc = () => {
  // CLOUD NAME AND LEVEL
  document.querySelector(
    ".characterCloud .character-name"
  ).innerHTML = `<p>${characters.cloud.name}</p>`;
  document.querySelector(
    ".characterCloud .character-lv-num"
  ).innerHTML = `${characters.cloud.level}`;

  // CLOUD HP BAR AND NUMBERS
  document.querySelector(
    ".characterCloud .character-hp-num"
  ).innerHTML = `<p><span class='hp-min'>${characters.cloud.hpCurrent}</span>/${characters.cloud.hpMax} </p>`;
  document.querySelector(".characterCloud .hp-bar ").style.width = `${
    (characters.cloud.hpCurrent / characters.cloud.hpMax) * 100
  }%`;

  // CLOUD MP BAR AND NUMBERS
  document.querySelector(
    ".characterCloud .character-mp-num"
  ).innerHTML = `<p><span class="mp-min">${characters.cloud.mpCurrent}</span> / ${characters.cloud.mpMax} </p>`;
  document.querySelector(".characterCloud .mp-bar ").style.width = `${
    (characters.cloud.mpCurrent / characters.cloud.mpMax) * 100
  }%`;
};

cloudFunc();

const colorCheck = () => {
  if (characters.cloud.hpCurrent === 0) {
    document.querySelector(
      ".characterCloud .character-hp-num"
    ).style.color = `#b2000a`;
    document.querySelector(".character-lv-num").style.color = `#b2000a`;
    document.querySelector(".character-name").style.color = `#b2000a`;
    document.querySelector(".character-mp-num").style.color = `#b2000a`;
  } else if (characters.cloud.hpCurrent <= characters.cloud.hpMax * 0.25) {
    document.querySelector(".hp-min").style.color = "#E8E800";
  }

  if (characters.cloud.mpCurrent === 0) {
    document.querySelector(".characterCloud .character-mp-num").style.color =
      "#b2000a";
  } else if (characters.cloud.mpCurrent <= characters.cloud.mpMax * 0.25) {
    document.querySelector(".mp-min").style.color = "#E8E800";
  }
};
colorCheck();
