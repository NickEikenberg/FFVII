'use strict';

//#b2000a zero health red
//#E8E800 low health yellow

const barAdjust = (cur, max) => (cur / max) * 100; // HP/MP value percentage
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
    hpCurrent: 777, //4923
    hpMax: 8769, //8769
    mpCurrent: 777, //999
    mpMax: 999, //999
    inParty: true,
  },
  {
    id: 'aeris',
    name: 'Aeris',
    level: 42,
    hpCurrent: 777,
    hpMax: 1200,
    mpCurrent: 239,
    mpMax: 634,
    inParty: false,
  },
  {
    id: 'barret',
    name: 'Barret',
    level: 65,
    hpCurrent: 5430,
    hpMax: 6146,
    mpCurrent: 480,
    mpMax: 531,
    inParty: true,
  },
  {
    id: 'tifa',
    name: 'Tifa',
    level: 74,
    hpCurrent: 3000,
    hpMax: 3146,
    mpCurrent: 700,
    mpMax: 739,
    inParty: true,
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
    hpCurrent: 300,
    hpMax: 5822,
    mpCurrent: 504,
    mpMax: 544,
    inParty: false,
  },
  {
    id: 'cid',
    name: 'Cid',
    level: 62,
    hpCurrent: 0,
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
    inParty: false,
  },
  {
    id: 'vincent',
    name: 'Vincent',
    level: 65,
    hpCurrent: 4300,
    hpMax: 5086,
    mpCurrent: 500,
    mpMax: 598,
    inParty: false,
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

const inParty = characters.filter((char) => char.inParty);
const notInParty = characters.filter((char) => !char.inParty);

const colorCheckRed = (char) => {
  if (char.hpCurrent === 0) {
    return `#b2000a`;
  } else {
    return `#FFF`;
  }
};
const colorCheckYellow = (char) => {
  if (char.hpCurrent < char.hpMax * 0.1 && char.hpCurrent > 0) {
    return `#E8E800`;
  } else if (char.hpCurrent === 0) {
    return `#b2000a`;
  } else {
    return `#FFF`;
  }
};

const partyMarkup = (char) => `
<a href="#" class="${char.id}InParty">
<div class="character ${char.id}Div">
        <div class="character-background">
          <div class="character-pic">
            <img src="menu/${char.id}.png" alt="" class="character-pic" />
          </div>
        </div>
        <div class="character-name">
          <p style="color: ${colorCheckRed(char)}">${char.name}</p>
        </div>
        <div class="character-lv">
          <p>LV</p>
        </div>
        <div class="character-lv-num">
          <p style="color: ${colorCheckRed(char)}">${char.level}</p>
        </div>
        <div class="character-hp">
          <p>HP</p>
        </div>
        <div class="num-grid hp-grid">
          <div class="character-hp-num">
            <p style="color: ${colorCheckRed(
              char
            )}"><span style="color: ${colorCheckYellow(char)}">${
  char.hpCurrent
}</span>/${char.hpMax}</p>
          </div>
          <div class="whole-bar">
            <div class="hp-bar bar" style="width:${barAdjust(
              char.hpCurrent,
              char.hpMax
            )}%"></div>
            <div class="black-bar"></div>
          </div>
        </div>
        <div class="character-mp">
          <p>MP</p>
        </div>
        <div class="num-grid mp-grid">
          <div class="character-mp-num">
            <p style="color: ${colorCheckRed(char)}">${char.mpCurrent}/${
  char.mpMax
}</p>
          </div>
          <div class="whole-bar">
            <div class="mp-bar bar" style="width:${barAdjust(
              char.mpCurrent,
              char.mpMax
            )}%"></div>
            <div class="black-bar"></div>
          </div>
        </div>
</div>
</a>
`;

const pickMarkup = (char) => `
<a href="#" class="${char.id}InPick">
<div class="party-background ${char.id}Div">
<div class="character-pic ${char.id}">
<img src="menu/${char.id}.png" alt="" class="character-pic" />
</div>
</div>
</a>
`;

function addtoParty() {
  inParty.map((char) => {
    if (char.inParty && document.querySelector('.main').childNodes) {
      document.querySelector('.main').innerHTML += partyMarkup(char);
    }
  });
}
addtoParty();

function addToPick() {
  notInParty.map((char) => {
    if (!char.inParty) {
      document.querySelector('.party-grid').innerHTML += pickMarkup(char);
    }
  });
}

addToPick();

const swapMembers = () => {
  inParty.map((char) => {
    const selected = document?.querySelector(`.${char.id}InParty`);
    selected.addEventListener('click', () => {
      console.log(char.id);
    });

    selected?.addEventListener('click', () => {
      notInParty.map((char2) => {
        const pick = document?.querySelector(`.${char2.id}`);
        pick?.addEventListener('click', () => {
          console.log(char.id, char2.id);
          document.querySelector(`.${char.id}InParty`).innerHTML = ``;
          document.querySelector(`.${char.id}InParty`).innerHTML = partyMarkup(
            char2
          );
          document.querySelector(`.${char2.id}InPick`).innerHTML = ``;
          document.querySelector(`.${char2.id}InPick`).innerHTML = pickMarkup(
            char
          );
        });
      });
    });
  });
};

swapMembers();

///////////////////////////////////////////////////
/*--------- SHOW CHARACTER EDIT MENU  -----------*/
///////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
/*--------- SHOW CHARACTER ON HOVER & PARTY SWAP  -----------*/
///////////////////////////////////////////////////////////////

function init() {
  characters.map((char) => {
    const charDiv = document?.querySelector(`.${char.id}`);

    charDiv?.addEventListener('mouseover', () => {
      showChar(char);
      charDiv?.addEventListener('mouseleave', () => {
        document.querySelector(`.${char.id}gen`).classList.add('hidden');
      });
    });

    const showChar = (char) => {
      pickMenu.innerHTML = `
    
    <div class="character hoverpick ${char.id}gen">
      <div class="character-background">
        <div class="character-pic">
          <img src="menu/${char.id}.png" alt="" class="character-pic">
        </div>
      </div>
      <div class="character-name">
        <p style="color: ${colorCheckRed(char)}">${char.name}</p>
      </div>
      <div class="character-lv">
        <p>LV</p>
      </div>
      <div class="character-lv-num">
        <p style="color: ${colorCheckRed(char)}">${char.level}</p>
      </div>
      <div class="character-hp">
        <p>HP</p>
      </div>
      <div class="num-grid hp-grid">
        <div class="character-hp-num">
          <p style="color: ${colorCheckRed(
            char
          )}"><span style="color: ${colorCheckYellow(char)}">${
        char.hpCurrent
      }</span>/${char.hpMax}</p>
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
              <p style="color: ${colorCheckRed(char)}">${char.mpCurrent}/${
        char.mpMax
      }</p>
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
}

init();

const slidersMarkup = `
<div class="adjust-lv">
                <div class="adjust-lv-text">
                  <p>Adjust LV</p>
                </div>
                <div class="adjust-lv-slider">
                  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                </div>
              </div>
              <div class="adjust-hp">
                <div class="adjust-hp-text">
                  <p>Adjust HP</p>
                </div>
                <div class="adjust-hp-slider">
                  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                </div>
              </div>
              <div class="adjust-mp">
                <div class="adjust-mp-text">
                  <p>Adjust MP</p>
                </div>
                <div class="adjust-mp-slider">
                  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                </div>
              </div>
`;
