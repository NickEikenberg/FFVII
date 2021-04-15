'use strict';

////////////////////////////////////////
/*--------- DOM ELEMENTS  -----------*/
////////////////////////////////////////
const pickMenu = document.querySelector('.pick');
const mainMenu = document.querySelector('.main');
const avail = document.querySelector('.party-grid');

////////////////////////////////////////
/*--------- PARTY MEMBERS  -----------*/
////////////////////////////////////////

const trueFalse = [
  true,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const assignBoolean = () =>
  trueFalse.splice(Math.floor(Math.random() * trueFalse.length), 1)[0];

const characters = [
  {
    id: 'cloud',
    name: 'Cloud', //Cloud
    level: 77, //77
    hpCurrent: 777, //4923
    hpMax: 8769, //8769
    mpCurrent: 777, //999
    mpMax: 999, //999
    inParty: assignBoolean(),
  },
  {
    id: 'aeris',
    name: 'Aeris',
    level: 42,
    hpCurrent: 777,
    hpMax: 1200,
    mpCurrent: 239,
    mpMax: 634,
    inParty: assignBoolean(),
  },
  {
    id: 'barret',
    name: 'Barret',
    level: 65,
    hpCurrent: 5430,
    hpMax: 6146,
    mpCurrent: 480,
    mpMax: 531,
    inParty: assignBoolean(),
  },
  {
    id: 'tifa',
    name: 'Tifa',
    level: 74,
    hpCurrent: 3000,
    hpMax: 3146,
    mpCurrent: 700,
    mpMax: 739,
    inParty: assignBoolean(),
  },
  {
    id: 'redxiii',
    name: 'Red XIII',
    level: 75,
    hpCurrent: 5020,
    hpMax: 5127,
    mpCurrent: 785,
    mpMax: 932,
    inParty: assignBoolean(),
  },
  {
    id: 'caitsith',
    name: 'Cait Sith',
    level: 62,
    hpCurrent: 300,
    hpMax: 5822,
    mpCurrent: 504,
    mpMax: 544,
    inParty: assignBoolean(),
  },
  {
    id: 'cid',
    name: 'Cid',
    level: 62,
    hpCurrent: 0,
    hpMax: 5822,
    mpCurrent: 130,
    mpMax: 544,
    inParty: assignBoolean(),
  },
  {
    id: 'yuffie',
    name: 'Yuffie',
    level: 67,
    hpCurrent: 4920,
    hpMax: 5373,
    mpCurrent: 330,
    mpMax: 577,
    inParty: assignBoolean(),
  },
  {
    id: 'vincent',
    name: 'Vincent',
    level: 65,
    hpCurrent: 4300,
    hpMax: 5086,
    mpCurrent: 500,
    mpMax: 598,
    inParty: assignBoolean(),
  },
  {
    id: 'sephiroth',
    name: 'Sephiroth',
    level: 80,
    hpCurrent: 7777,
    hpMax: 9000,
    mpCurrent: 999,
    mpMax: 999,
    inParty: assignBoolean(),
  },
];

// characters.sort(() => Math.random() - 0.5);
const inParty = characters.filter((char) => char.inParty);
const notInParty = characters.filter((char) => !char.inParty);

//////////////////////////////////////////////////////
/// CODE TO DYNAMICALLY CHANGE CHARACTER BAR COLORS //
//////////////////////////////////////////////////////

const barAdjust = (cur, max) => (cur / max) * 100; // HP/MP value percentage

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

//////////////////////////////////////////
// MARKUP FOR ADDING CHARACTERS TO DIVS //
//////////////////////////////////////////

const partyMarkup = (char) => `
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
`;

const pickMarkup = (char) => `
<div class="party-background ${char.id}Div">
<div class="character-pic ${char.id}">
<img src="menu/${char.id}.png" alt="" class="character-pic" />
</div>
</div>
`;

const slidersMarkup = `
<div class="adjust-lv" style="height: 100%">
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
  <div class="btn-closeDiv">
    <a href="#" class="btn-close"><p>Close</p></a>
  </div>
</div>
`;

// document.querySelector('.char1').addEventListener('click', () => {
//   console.log(inParty[0].name);
//   notInParty.map((char, index) => {
//     document?.querySelector(`.${char.id}`).addEventListener('click', () => {
//       document.querySelector('.char1').innerHTML = partyMarkup(char);
//       document.querySelector(`.${char.id}InPick`).remove();
//       let tempChar = inParty[0];
//       avail.classList.add(`${inParty[0].id}pick`);
//       inParty[0] = notInParty[index];
//       notInParty[index] = tempChar;
//       avail.innerHTML += pickMarkup(notInParty[index]);
//       pickMenu.innerHTML = ``;
//       init();
//       openEditMenu();
//       avail.classList.remove(`${char.id}pick`);
//       // avail.innerHTML += pickMarkup(notInParty[notInParty.length]);
//     });
//   });
// });
// document.querySelector('.char2').addEventListener('click', () => {
//   console.log(inParty[1].name);
//   notInParty.map((char, index) => {
//     document?.querySelector(`.${char.id}`).addEventListener('click', () => {
//       //toggle hidden class to fix missing characters problem. Figure out later
//       document.querySelector('.char2').innerHTML = ``;
//       document.querySelector('.char2').innerHTML = partyMarkup(char);
//       document.querySelector(`.${char.id}InPick`).remove();
//       let tempChar = inParty[1];
//       inParty[1] = notInParty[index];
//       notInParty[index] = tempChar;
//       avail.innerHTML += pickMarkup(notInParty[index]);
//       pickMenu.innerHTML = ``;
//       init();
//       openEditMenu();
//     });
//   });
// });
// document.querySelector('.char3').addEventListener('click', () => {
//   console.log(inParty[2].name);
//   notInParty.map((char, index) => {
//     document?.querySelector(`.${char.id}`).addEventListener('click', () => {
//       document.querySelector('.char3').innerHTML = ``;
//       document.querySelector('.char3').innerHTML = partyMarkup(char);
//       document.querySelector(`.${char.id}InPick`).remove();
//       let tempChar = inParty[2];
//       inParty[2] = notInParty[index];
//       notInParty[index] = tempChar;
//       avail.innerHTML += pickMarkup(notInParty[index]);
//       pickMenu.innerHTML = ``;
//       init();
//       openEditMenu();
//     });
//   });
// });

///////////////////////////////////////////////////////////////
/*--------- SHOW CHARACTER ON HOVER & PARTY SWAP  -----------*/
///////////////////////////////////////////////////////////////

function init() {
  function addToParty() {
    for (let i = 0; i < 3; i++) {
      document.querySelector(
        `.char${i + 1}`
      ).innerHTML += `<a href='#' class="${inParty[i].id}InParty">${partyMarkup(
        inParty[i]
      )}</a>`;
    }

    // inParty.forEach((member) => {
    //   for (let i = 1; i <= 3; i++) {
    //     console.log(member);
    //     document.querySelector(`.char${i}`).innerHTML = partyMarkup(member);
    //   }
    // });
  }
  addToParty();

  function addToPick() {
    for (let i = 0; i < 7; i++) {
      document.querySelector(
        `.pick${i + 1}`
      ).innerHTML += `<a href='#' class="${
        notInParty[i].id
      }InPick">${pickMarkup(notInParty[i])}</a>`;
    }
  }

  addToPick();
  ////////////////////////////////////////////
  // CHARACTER APPEARS IN PICK MENU ON HOVER//
  ////////////////////////////////////////////
  characters.map((char) => {
    const charDiv = document?.querySelector(`.${char.id}InPick`);
    const showChar = (char) => {
      pickMenu.innerHTML = partyMarkup(char);
    };

    charDiv?.addEventListener('mouseover', () => {
      showChar(char);
      charDiv?.addEventListener('mouseleave', () => {
        pickMenu.innerHTML = ``;
      });
    });
  });

  const children = mainMenu.childNodes;

  // children.forEach((child) => {
  //   child.addEventListener('click', () => {
  //     // FUNCTION TO SWAP PARTY
  //     notInParty.map((char) => {
  //       document
  //         .querySelector(`.${char.id}Div`)
  //         .addEventListener('click', () => {
  //           for (let i = 1; i < 3; i++) {
  //             // console.log(document.querySelector(`.char${i}`));
  //             document.querySelector(`.char${i}`).innerHTML = partyMarkup(char);
  //           }
  //         });
  //     });
  //   });
  // });

  ///////////////////////////////////////////////////
  /*--------- SHOW CHARACTER EDIT MENU  -----------*/
  ///////////////////////////////////////////////////

  function openEditMenu() {
    inParty.map((char) => {
      document
        .querySelector(`.${char.id}InParty`)
        .addEventListener('dblclick', () => {
          avail.innerHTML = ``;
          avail.innerHTML += slidersMarkup;
          document.querySelector('.btn-close').addEventListener('click', () => {
            avail.innerHTML = ``;
            addToPick();
          });
        });
    });
  }
  openEditMenu();

  inParty.forEach((char) => {
    const firstPick = document.querySelector(`.${char.id}InParty`);

    firstPick.addEventListener('click', () => {
      firstPick.classList.add('active');
      notInParty.forEach((char2) => {
        const secPick = document.querySelector(`.${char2.id}InPick`);

        secPick.addEventListener('click', () => {
          const secPickHTML = document.querySelector(`.${char2.id}InPick`);
          secPickHTML.classList.add('activePick');
          document.querySelector(`.active`).innerHTML = partyMarkup(char2);
          document.querySelector('.activePick').innerHTML = pickMarkup(char);
          firstPick.classList.remove('active');
          firstPick.classList.remove(`${char.id}InParty`);
          firstPick.classList.add(`${char2.id}InParty`);
          secPickHTML.classList.remove('activePick');
          secPickHTML.classList.add(`.${char.id}InPick`);
          secPickHTML.classList.remove(`.${char2.id}InPick`);
        });
      });
    });
  });
}

init();
