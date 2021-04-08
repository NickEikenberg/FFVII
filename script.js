'use strict';

////////////////////////////////////////
/*--------- PARTY MEMBERS  -----------*/
////////////////////////////////////////

const characters = [
  {
    id: 'cloud',
    name: 'Cloud', //Cloud
    level: 77, //77
    hpCurrent: 5000, //4923
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
    hpCurrent: 6146,
    hpMax: 6146,
    mpCurrent: 531,
    mpMax: 531,
    inParty: false,
  },
  {
    id: 'tifa',
    name: 'Tifa',
    level: 74,
    hpCurrent: 3146,
    hpMax: 3146,
    mpCurrent: 739,
    mpMax: 739,
    inParty: true,
  },
  {
    id: 'redxiii',
    name: 'Red XIII',
    level: 75,
    hpCurrent: 5127,
    hpMax: 5127,
    mpCurrent: 785,
    mpMax: 932,
    inParty: true,
  },
  {
    id: 'caitsith',
    name: 'Cait Sith',
    level: 62,
    hpCurrent: 5822,
    hpMax: 5822,
    mpCurrent: 544,
    mpMax: 544,
    inParty: false,
  },
  {
    id: 'cid',
    name: 'Cid',
    level: 62,
    hpCurrent: 5822,
    hpMax: 5822,
    mpCurrent: 544,
    mpMax: 544,
    inParty: false,
  },
  {
    id: 'yuffie',
    name: 'Yuffie',
    level: 67,
    hpCurrent: 5373,
    hpMax: 5373,
    mpCurrent: 577,
    mpMax: 577,
    inParty: false,
  },
  {
    id: 'vincent',
    name: 'Vincent',
    level: 65,
    hpCurrent: 5086,
    hpMax: 5086,
    mpCurrent: 598,
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

function generateHTMLAvailableParty() {
  const availableChar = characters.filter((char) => !char.inParty);
  return availableChar.map((char) => {
    return `
<div class="party-background">
    <div class="character-pic ${char.id}">
        <img src="menu/${char.id}.png" alt="" class="character-pic" />
    </div>
</div>
`;
  });
}

document.querySelector(
  '.party-grid'
).innerHTML = generateHTMLAvailableParty().join('');

////////////////////////////////////////
/*--------- DOM ELEMENTS  -----------*/
////////////////////////////////////////
const pickMenu = document.querySelector('.pick');
const mainMenu = document.querySelector('.main');

/////////////////////////////////////
///////////////
/// CLOUD IS THE ONLY STATIC ELEMENT, HE CAN NOT BE REMOVED FROM YOUR PARTY
///////////////
/////////////////////////////////////

// const cloudFunc = () => {
//   // CLOUD NAME AND LEVEL
//   document.querySelector(
//     '.characterCloud .character-name'
//   ).innerHTML = `<p>${characters.cloud.name}</p>`;
//   document.querySelector(
//     '.characterCloud .character-lv-num'
//   ).innerHTML = `${characters.cloud.level}`;

//   // CLOUD HP BAR AND NUMBERS
//   document.querySelector(
//     '.characterCloud .character-hp-num'
//   ).innerHTML = `<p><span class='hp-min'>${characters.cloud.hpCurrent}</span>/${characters.cloud.hpMax} </p>`;
//   document.querySelector('.characterCloud .hp-bar ').style.width = `${
//     (characters.cloud.hpCurrent / characters.cloud.hpMax) * 100
//   }%`;

//   // CLOUD MP BAR AND NUMBERS
//   document.querySelector(
//     '.characterCloud .character-mp-num'
//   ).innerHTML = `<p><span class="mp-min">${characters.cloud.mpCurrent}</span> / ${characters.cloud.mpMax} </p>`;
//   document.querySelector('.characterCloud .mp-bar ').style.width = `${
//     (characters.cloud.mpCurrent / characters.cloud.mpMax) * 100
//   }%`;
// };

// cloudFunc();

// const colorCheck = () => {
//   if (characters.cloud.hpCurrent === 0) {
//     document.querySelector(
//       '.characterCloud .character-hp-num'
//     ).style.color = `#b2000a`;
//     document.querySelector('.character-lv-num').style.color = `#b2000a`;
//     document.querySelector('.character-name').style.color = `#b2000a`;
//     document.querySelector('.character-mp-num').style.color = `#b2000a`;
//   } else if (characters.cloud.hpCurrent <= characters.cloud.hpMax * 0.25) {
//     document.querySelector('.hp-min').style.color = '#E8E800';
//   }

//   if (characters.cloud.mpCurrent === 0) {
//     document.querySelector('.characterCloud .character-mp-num').style.color =
//       '#b2000a';
//   } else if (characters.cloud.mpCurrent <= characters.cloud.mpMax * 0.25) {
//     document.querySelector('.mp-min').style.color = '#E8E800';
//   }
// };
// colorCheck();

// const showCharacter = ({ character }) => {
//   <div>character.name</div>;
// };

const showChar = (char) => {
  console.log(char);
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
};

//////////////////////////////////////////////////
/*--------- SHOW CHARACTER ON HOVER  -----------*/
//////////////////////////////////////////////////

characters.map((char) => {
  const charDiv = document?.querySelector(`.${char.id}`);

  charDiv?.addEventListener('mouseover', () => showChar(char));

  charDiv?.addEventListener('mouseleave', () => {
    document.querySelector(`.${char.id}gen`).classList.add('hidden');
  });
});

//   // CLOUD HP BAR AND NUMBERS
//   document.querySelector(
//     ".characterCloud .character-hp-num"
//   ).innerHTML = `<p><span class='hp-min'>${characters.cloud.hpCurrent}</span>/${characters.cloud.hpMax} </p>`;
//   document.querySelector(".characterCloud .hp-bar ").style.width = `${
//     (characters.cloud.hpCurrent / characters.cloud.hpMax) * 100
//   }%`;

//   // CLOUD MP BAR AND NUMBERS
//   document.querySelector(
//     ".characterCloud .character-mp-num"
//   ).innerHTML = `<p><span class="mp-min">${characters.cloud.mpCurrent}</span> / ${characters.cloud.mpMax} </p>`;
//   document.querySelector(".characterCloud .mp-bar ").style.width = `${
//     (characters.cloud.mpCurrent / characters.cloud.mpMax) * 100
//   }%`;
// };
