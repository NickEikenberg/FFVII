'use strict';

// toybox monster
//#b2000a zero health red
//#E8E800 low health yellow

////////////////////////////////////////
/*--------- DOM ELEMENTS  -----------*/
////////////////////////////////////////
const pickMenu = document.querySelector('.pick');
const mainMenu = document.querySelector('.main');

////////////////////////////////////////
/*--------- PARTY MEMBERS  -----------*/
////////////////////////////////////////

const characters = [
  {
    id: 'cloud',
    name: 'Cloud', //Cloud
    level: 77, //77
    hpCurrent: 1000, //4923
    hpMax: 8769, //8769
    mpCurrent: 777, //999
    mpMax: 999, //999
    inParty: false,
  },
  {
    id: 'aeris',
    name: 'Aeris',
    level: 42,
    hpCurrent: 777,
    hpMax: 1200,
    mpCurrent: 239,
    mpMax: 634,
    inParty: true,
  },
  {
    id: 'barret',
    name: 'Barret',
    level: 65,
    hpCurrent: 5430,
    hpMax: 6146,
    mpCurrent: 480,
    mpMax: 531,
    inParty: false,
  },
  {
    id: 'tifa',
    name: 'Tifa',
    level: 74,
    hpCurrent: 3000,
    hpMax: 3146,
    mpCurrent: 700,
    mpMax: 739,
    inParty: false,
  },
  {
    id: 'redxiii',
    name: 'Red XIII',
    level: 75,
    hpCurrent: 5020,
    hpMax: 5127,
    mpCurrent: 785,
    mpMax: 932,
    inParty: false,
  },
  {
    id: 'caitsith',
    name: 'Cait Sith',
    level: 62,
    hpCurrent: 3208,
    hpMax: 5822,
    mpCurrent: 504,
    mpMax: 544,
    inParty: false,
  },
  {
    id: 'cid',
    name: 'Cid',
    level: 62,
    hpCurrent: 2390,
    hpMax: 5822,
    mpCurrent: 130,
    mpMax: 544,
    inParty: false,
  },
  {
    id: 'yuffie',
    name: 'Yuffie',
    level: 67,
    hpCurrent: 4920,
    hpMax: 5373,
    mpCurrent: 330,
    mpMax: 577,
    inParty: true,
  },
  {
    id: 'vincent',
    name: 'Vincent',
    level: 65,
    hpCurrent: 4300,
    hpMax: 5086,
    mpCurrent: 500,
    mpMax: 598,
    inParty: true,
  },
  {
    id: 'sephiroth',
    name: 'Sephiroth',
    level: 80,
    hpCurrent: 7777,
    hpMax: 9000,
    mpCurrent: 999,
    mpMax: 999,
    inParty: false,
  },
];

function addtoParty() {
  characters.map((char) => {
    if (char.inParty) {
      document.querySelector('.main').innerHTML += `
<div class="character">
        <div class="character-background">
          <div class="character-pic">
            <img src="menu/${char.id}.png" alt="" class="character-pic" />
          </div>
        </div>
        <div class="character-name">
          <p>${char.name}</p>
        </div>
        <div class="character-lv">
          <p>LV</p>
        </div>
        <div class="character-lv-num">
          <p>${char.level}</p>
        </div>
        <div class="character-hp">
          <p>HP</p>
        </div>
        <div class="num-grid hp-grid">
          <div class="character-hp-num">
            <p>${char.hpCurrent}/${char.hpMax}</p>
          </div>
          <div class="whole-bar">
            <div class="hp-bar bar"></div>
            <div class="black-bar"></div>
          </div>
        </div>
        <div class="character-mp">
          <p>MP</p>
        </div>
        <div class="num-grid mp-grid">
          <div class="character-mp-num">
            <p>${char.mpCurrent}/${char.mpMax}</p>
          </div>
          <div class="whole-bar">
            <div class="mp-bar bar"></div>
            <div class="black-bar"></div>
          </div>
        </div>
</div>
      `;
    } else {
      document.querySelector('.party-grid').innerHTML += `
<div class="party-background">
  <div class="character-pic ${char.id}">
      <img src="menu/${char.id}.png" alt="" class="character-pic" />
  </div>
</div>
      `;
    }
  });
}
addtoParty();

///////////////////////////////////////////////////////////////
/*--------- SHOW CHARACTER ON HOVER & PARTY SWAP  -----------*/
///////////////////////////////////////////////////////////////
characters.map((char) => {
  const charDiv = document?.querySelector(`.${char.id}`);

  charDiv?.addEventListener('mouseover', () => {
    showChar(char);
    charDiv?.addEventListener('mouseleave', () => {
      document.querySelector(`.${char.id}gen`).classList.add('hidden');
    });
  });

  const barAdjust = (cur, max) => (cur / max) * 100; // HP/MP value percentage

  const showChar = (char) => {
    pickMenu.innerHTML = `
  <div class="character hoverpick ${char.id}gen">
    <div class="character-background">
      <div class="character-pic">
        <img src="menu/${char.id}.png" alt="" class="character-pic">
      </div>
    </div>
    <div class="character-name">
      <p>${char.name}</p>
    </div>
    <div class="character-lv">
      <p>LV</p>
    </div>
    <div class="character-lv-num">
      <p>${char.level}</p>
    </div>
    <div class="character-hp">
      <p>HP</p>
    </div>
    <div class="num-grid hp-grid">
      <div class="character-hp-num">
        <p>${char.hpCurrent}/${char.hpMax}</p>
      </div>
    <div class="whole-bar">
    <div class="hp-bar bar" style="width: ${barAdjust(
      char.hpCurrent,
      char.hpMax
    )}%">
    </div>
    <div class="black-bar"></div>
        </div>
    </div>
    <div class="character-mp">
        <p>MP</p>
    </div>
    <div class="num-grid mp-grid">
        <div class="character-mp-num">
            <p>${char.mpCurrent}/${char.mpMax}</p>
        </div>
        <div class="whole-bar">

            <div class="mp-bar bar" style="width: ${barAdjust(
              char.mpCurrent,
              char.mpMax
            )}%"></div>
            <div class="black-bar"></div>
        </div>
    </div>
</div>

  `;
  };
});

const swapMembers = (first, second) => {};
