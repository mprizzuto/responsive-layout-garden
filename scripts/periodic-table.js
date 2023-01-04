console.clear();

let periodicTable = [
  {
    atomicNumber: 1,
    chemicalAbbreviated: "H",
    chemicalName: "Hydrogen"
  },
  {
    atomicNumber: 2,
    chemicalAbbreviated: "He",
    chemicalName: "Helium"
  },
  {
    atomicNumber: 3,
    chemicalAbbreviated: "Li",
    chemicalName: "Lithium"
  },
  {
    atomicNumber: 4,
    chemicalAbbreviated: "Be",
    chemicalName: "beryllium"
  },
  {
    atomicNumber: 5,
    chemicalAbbreviated: "B",
    chemicalName: "Boron"
  },
  {
    atomicNumber: 6,
    chemicalAbbreviated: "C",
    chemicalName: "carbon"
  },
  {
    atomicNumber: 7,
    chemicalAbbreviated: "N",
    chemicalName: "nitrogen"
  },
  {
    atomicNumber: 8,
    chemicalAbbreviated: "O",
    chemicalName: "Oxygen"
  },
  {
    atomicNumber: 9,
    chemicalAbbreviated: "F",
    chemicalName: "Fluorine"
  },
  {
    atomicNumber: 10,
    chemicalAbbreviated: "Ne",
    chemicalName: "Neon"
  },
  {
    atomicNumber: 11,
    chemicalAbbreviated: "Na",
    chemicalName: "Sodium"
  },
  {
    atomicNumber: 12,
    chemicalAbbreviated: "Mg",
    chemicalName: "Magnesium"
  },
  {
    atomicNumber: 13,
    chemicalAbbreviated: "Al",
    chemicalName: "Aluminium"
  },
  {
    atomicNumber: 14,
    chemicalAbbreviated: "Si",
    chemicalName: "Silicon"
  },
  {
    atomicNumber: 15,
    chemicalAbbreviated: "P",
    chemicalName: "Phosphorus"
  },
  {
    atomicNumber: 16,
    chemicalAbbreviated: "S",
    chemicalName: "Sulfur"
  },
  {
    atomicNumber: 17,
    chemicalAbbreviated: "Cl",
    chemicalName: "Chlorine"
  },
  {
    atomicNumber: 18,
    chemicalAbbreviated: "Ar",
    chemicalName: "Argon"
  },
  {
    atomicNumber: 19,
    chemicalAbbreviated: "K",
    chemicalName: "Potassium"
  },
  {
    atomicNumber: 20,
    chemicalAbbreviated: "Ca",
    chemicalName: "Calcium"
  },
  {
    atomicNumber: 21,
    chemicalAbbreviated: "Sc",
    chemicalName: "Scandium"
  },
   {
    atomicNumber: 22,
    chemicalAbbreviated: "Ti",
    chemicalName: "Titanium"
  },
  {
    atomicNumber: 23,
    chemicalAbbreviated: "V",
    chemicalName: "Vanadium"
  },
  {
    atomicNumber: 24,
    chemicalAbbreviated: "Cr",
    chemicalName: "Chromium"
  },
  {
    atomicNumber: 25,
    chemicalAbbreviated: "Mn",
    chemicalName: "Manganese"
  },
  {
    atomicNumber: 26,
    chemicalAbbreviated: "Fe",
    chemicalName: "Iron"
  },
  {
    atomicNumber: 27,
    chemicalAbbreviated: "Co",
    chemicalName: "Cobalt"
  },
  {
    atomicNumber: 28,
    chemicalAbbreviated: "Ni",
    chemicalName: "Nickel"
  },
  {
    atomicNumber: 29,
    chemicalAbbreviated: "Cu",
    chemicalName: "Copper"
  },
  {
    atomicNumber: 30,
    chemicalAbbreviated: "Zn",
    chemicalName: "Zinc"
  },{
    atomicNumber: 31,
    chemicalAbbreviated: "Ga",
    chemicalName: "Gallium"
  }, 
  {
    atomicNumber: 32,
    chemicalAbbreviated: "Ge",
    chemicalName: "Germanium"
  }, 
  {
    atomicNumber: 33,
    chemicalAbbreviated: "As",
    chemicalName: "Arsenic"
  }, 
  {
    atomicNumber: 34,
    chemicalAbbreviated: "Se",
    chemicalName: "Selenium"
  }, 
  {
    atomicNumber: 35,
    chemicalAbbreviated: "Br",
    chemicalName: "Bromine"
  }, 
  {
    atomicNumber: 36,
    chemicalAbbreviated: "Kr",
    chemicalName: "Krypton"
  },
  {
    atomicNumber: 37,
    chemicalAbbreviated: "Rb",
    chemicalName: "Rubidium"
  }, 
  {
    atomicNumber: 38,
    chemicalAbbreviated: "Sr",
    chemicalName: "Strontium"
  },
  {
    atomicNumber: 39,
    chemicalAbbreviated: "Y",
    chemicalName: "Yttrium"
  },
   {
    atomicNumber: 40,
    chemicalAbbreviated: "Zr",
    chemicalName: "Zirconium"
  },
  {
    atomicNumber: 41,
    chemicalAbbreviated: "Nb",
    chemicalName: "Niobium"
  },
  {
    atomicNumber: 42,
    chemicalAbbreviated: "Mo",
    chemicalName: "Molybdenum"
  },
  {
    atomicNumber: 43,
    chemicalAbbreviated: "Tc",
    chemicalName: "Technetium"
  },
  {
    atomicNumber: 44,
    chemicalAbbreviated: "Ru",
    chemicalName: "Ruthenium"
  },
  {
    atomicNumber: 45,
    chemicalAbbreviated: "Rh",
    chemicalName: "Rhodium"
  },
  {
    atomicNumber: 46,
    chemicalAbbreviated: "Pd",
    chemicalName: "Palladium"
  },
  {
    atomicNumber: 47,
    chemicalAbbreviated: "Ag",
    chemicalName: "Silver"
  },
  {
    atomicNumber: 48,
    chemicalAbbreviated: "Cd",
    chemicalName: "Cadmium"
  },
  {
    atomicNumber: 49,
    chemicalAbbreviated: "In",
    chemicalName: "Indium"
  },
  {
    atomicNumber: 50,
    chemicalAbbreviated: "Sn",
    chemicalName: "Tin"
  },
  {
    atomicNumber: 51,
    chemicalAbbreviated: "Sb",
    chemicalName: "Antimony"
  },
  {
    atomicNumber: 52,
    chemicalAbbreviated: "Te",
    chemicalName: "Tellurium"
  },
  {
    atomicNumber: 53,
    chemicalAbbreviated: "I",
    chemicalName: "Iodine"
  },
  {
    atomicNumber: 54,
    chemicalAbbreviated: "Xe",
    chemicalName: "Xenon"
  },
  {
    atomicNumber: 55,
    chemicalAbbreviated: "Cs",
    chemicalName: "Caesium"
  },
  {
    atomicNumber: 56,
    chemicalAbbreviated: "Ba",
    chemicalName: "Barium"
  },
  {
    atomicNumber: 57,
    chemicalAbbreviated: "La",
    chemicalName: "Lanthanum"
  },
  {
    atomicNumber: 58,
    chemicalAbbreviated: "Ce",
    chemicalName: "Cerium"
  },
  {
    atomicNumber: 59,
    chemicalAbbreviated: "Pr",
    chemicalName: "Praseodymium"
  },
  {
    atomicNumber: 60,
    chemicalAbbreviated: "Nd",
    chemicalName: "Neodymium"
  },
  {
    atomicNumber: 61,
    chemicalAbbreviated: "Pm",
    chemicalName: "Promethium"
  },
  {
    atomicNumber: 62,
    chemicalAbbreviated: "Sm",
    chemicalName: "Samarium"
  },
  {
    atomicNumber: 63,
    chemicalAbbreviated: "Eu",
    chemicalName: "Europium"
  },
  {
    atomicNumber: 64,
    chemicalAbbreviated: "Gd",
    chemicalName: "Gadolinium"
  },
  {
    atomicNumber: 65,
    chemicalAbbreviated: "Tb",
    chemicalName: "Terbium"
  },
  {
    atomicNumber: 66,
    chemicalAbbreviated: "Dy",
    chemicalName: "Dysprosium"
  },
  {
    atomicNumber: 67,
    chemicalAbbreviated: "Ho",
    chemicalName: "Holmium"
  },
  {
    atomicNumber: 68,
    chemicalAbbreviated: "Er",
    chemicalName: "Erbium"
  },
  {
    atomicNumber: 69,
    chemicalAbbreviated: "Tm",
    chemicalName: "Thulium"
  },
  {
    atomicNumber: 70,
    chemicalAbbreviated: "Yb",
    chemicalName: "Ytterbium"
  },
  {
    atomicNumber: 71,
    chemicalAbbreviated: "Lu",
    chemicalName: "Lutetium"
  },
  {
    atomicNumber: 72,
    chemicalAbbreviated: "Hf",
    chemicalName: "Hafnium"
  },
  {
    atomicNumber: 73,
    chemicalAbbreviated: "Ta",
    chemicalName: "Tantalum"
  },
  {
    atomicNumber: 74,
    chemicalAbbreviated: "W",
    chemicalName: "Tungsten"
  }, 
  {
    atomicNumber: 75,
    chemicalAbbreviated: "Re",
    chemicalName: "Rhenium"
  },
  
  {
    atomicNumber: 76,
    chemicalAbbreviated: "Os",
    chemicalName: "Osmium"
  },
  {
    atomicNumber: 77,
    chemicalAbbreviated: "Ir",
    chemicalName: "Iridium"
  },
  {
    atomicNumber: 78,
    chemicalAbbreviated: "Pt",
    chemicalName: "Platinum"
  },
  {
    atomicNumber: 79,
    chemicalAbbreviated: "Au",
    chemicalName: "Gold"
  },
  {
    atomicNumber: 80,
    chemicalAbbreviated: "Hg",
    chemicalName: "Mercury"
  },
  {
    atomicNumber: 81,
    chemicalAbbreviated: "Ti",
    chemicalName: "Thallium"
  },
  {
    atomicNumber: 82,
    chemicalAbbreviated: "Pb",
    chemicalName: "Lead"
  },
  {
    atomicNumber: 83,
    chemicalAbbreviated: "Bi",
    chemicalName: "Bismuth"
  },
  {
    atomicNumber: 84,
    chemicalAbbreviated: "Po",
    chemicalName: "Polonium"
  },
  {
    atomicNumber: 85,
    chemicalAbbreviated: "At",
    chemicalName: "Astatine"
  },
  {
    atomicNumber: 86,
    chemicalAbbreviated: "Rn",
    chemicalName: "Radon"
  },
  {
    atomicNumber: 87,
    chemicalAbbreviated: "Fr",
    chemicalName: "Francium"
  },
  {
    atomicNumber: 88,
    chemicalAbbreviated: "Ra",
    chemicalName: "Radium"
  },
  {
    atomicNumber: 89,
    chemicalAbbreviated: "Ac",
    chemicalName: "Actinium"
  },
  {
    atomicNumber: 90,
    chemicalAbbreviated: "Th",
    chemicalName: "Thorium"
  },
  {
    atomicNumber: 91,
    chemicalAbbreviated: "Pa",
    chemicalName: "Protactinium"
  },
  {
    atomicNumber: 92,
    chemicalAbbreviated: "U",
    chemicalName: "Uranium"
  },
  {
    atomicNumber: 93,
    chemicalAbbreviated: "Np",
    chemicalName: "Neptunium"
  },
  {
    atomicNumber: 94,
    chemicalAbbreviated: "Pu",
    chemicalName: "Plutonium"
  },
  {
    atomicNumber: 95,
    chemicalAbbreviated: "Am",
    chemicalName: "Americium"
  },
  {
    atomicNumber: 96,
    chemicalAbbreviated: "Cm",
    chemicalName: "Curium"
  },
  {
    atomicNumber: 97,
    chemicalAbbreviated: "Bk",
    chemicalName: "Berkelium"
  },
  {
    atomicNumber: 98,
    chemicalAbbreviated: "Cf",
    chemicalName: "Californium"
  },
  {
    atomicNumber: 99,
    chemicalAbbreviated: "Es",
    chemicalName: "Einsteinium"
  },
  {
    atomicNumber: 100,
    chemicalAbbreviated: "Fm",
    chemicalName: "Fermium"
  },
  {
    atomicNumber: 101,
    chemicalAbbreviated: "Md",
    chemicalName: "Mendelevium"
  },
  {
    atomicNumber: 102,
    chemicalAbbreviated: "No",
    chemicalName: "Nobelium"
  },
  {
    atomicNumber: 103,
    chemicalAbbreviated: "Lr",
    chemicalName: "Lawrencium"
  },
  {
    atomicNumber: 104,
    chemicalAbbreviated: "Rf",
    chemicalName: "Rutherfordium"
  },
  {
    atomicNumber: 105,
    chemicalAbbreviated: "Db",
    chemicalName: "Dubnium"
  },
  {
    atomicNumber: 106,
    chemicalAbbreviated: "Sg",
    chemicalName: "Seaborgium"
  },
  {
    atomicNumber: 107,
    chemicalAbbreviated: "Bh",
    chemicalName: "Bohrium"
  },
  {
    atomicNumber: 108,
    chemicalAbbreviated: "Hs",
    chemicalName: "Hassium"
  },
  {
    atomicNumber: 109,
    chemicalAbbreviated: "Mt",
    chemicalName: "Meitnerium"
  },
  {
    atomicNumber: 110,
    chemicalAbbreviated: "Ds",
    chemicalName: "Darmstadtium"
  },
  {
    atomicNumber: 111,
    chemicalAbbreviated: "Rg",
    chemicalName: "Roentgenium"
  },
  {
    atomicNumber: 112,
    chemicalAbbreviated: "Cn",
    chemicalName: "Copernicium"
  },
  {
    atomicNumber: 113,
    chemicalAbbreviated: "Nh",
    chemicalName: "Nihonium"
  },
  {
    atomicNumber: 114,
    chemicalAbbreviated: "Fl",
    chemicalName: "Flerovium"
  },
  {
    atomicNumber: 115,
    chemicalAbbreviated: "Mc",
    chemicalName: "Moscovium"
  },
  {
    atomicNumber: 116,
    chemicalAbbreviated: "Lv",
    chemicalName: "Livermorium"
  },
  {
    atomicNumber: 117,
    chemicalAbbreviated: "Ts",
    chemicalName: "Tennessine"
  },
  {
    atomicNumber: 118,
    chemicalAbbreviated: "Og",
    chemicalName: "Oganesson"
  }
];

let elementList = document.querySelector(".element-list");

//an array of atomic numbers of alkali metals 
let alkaliMetals = [3,11,19,37,55,87];

//filter periodic table to find only alkaline metals
let onlyAlkaliMetals = periodicTable.filter(alkaliMetal => {
  return alkaliMetals.includes(alkaliMetal.atomicNumber);
});

//create alkali list items
onlyAlkaliMetals.map(alkaliMetal => {
  let alkaliListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  alkaliListItem.setAttribute("id", `${alkaliMetal.chemicalAbbreviated}`);
  
  alkaliListItem.classList.add("alkali-metal");
  
   alkaliListItem.innerHTML = `<span class="atomic-number">${alkaliMetal.atomicNumber}</span>` + `<span class="chem-abbreviation">${alkaliMetal.chemicalAbbreviated}</span>` + `<span class="chemical-name">${alkaliMetal.chemicalName}</span>`;
  
  elementList.appendChild(alkaliListItem);
});


let metalloids = [5,14,32,33,51,52];

let onlyMetalloids = periodicTable.filter(metalloid => {
 return metalloids.includes(metalloid.atomicNumber);
});

onlyMetalloids.map(metalloid => {
  let metalloidListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  metalloidListItem.setAttribute("id", `${metalloid.chemicalAbbreviated}`);
  
  metalloidListItem.classList.add("metalloid-metal");
  
   metalloidListItem.innerHTML = `<span class="atomic-number">${metalloid.atomicNumber}</span>` + `<span class="chem-abbreviation">${metalloid.chemicalAbbreviated}</span>` + `<span class="chemical-name">${metalloid.chemicalName}</span>`;
  
  elementList.appendChild(metalloidListItem);
});


let actinides = [89,90,91,92,93,94,95,96,97,98,99,100,101,102,103];

let onlyActinides = periodicTable.filter(actinide => {
  return actinides.includes(actinide.atomicNumber);
});

onlyActinides.map(actinide => {
  let actinideListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  actinideListItem.setAttribute("id", `${actinide.chemicalAbbreviated}`);
  
  actinideListItem.classList.add("actinide");
  
   actinideListItem.innerHTML = `<span class="atomic-number">${actinide.atomicNumber}</span>` + `<span class="chem-abbreviation">${actinide.chemicalAbbreviated}</span>` + `<span class="chemical-name">${actinide.chemicalName}</span>`;
  
  elementList.appendChild(actinideListItem);
});


let alkalineEarthMetals = [4,12,20,38,56,88];

let onlyAlkalineEarthMetals = periodicTable.filter(alkalineEarthMetal => {
  return alkalineEarthMetals.includes(alkalineEarthMetal.atomicNumber);
});

onlyAlkalineEarthMetals.map(alkalineEarthMetal => {
  let alkalineEarthMetalListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  alkalineEarthMetalListItem.setAttribute("id", `${alkalineEarthMetal.chemicalAbbreviated}`);
  
  alkalineEarthMetalListItem.classList.add("alkaline-earth-metal");
  
   alkalineEarthMetalListItem.innerHTML = `<span class="atomic-number">${alkalineEarthMetal.atomicNumber}</span>` + `<span class="chem-abbreviation">${alkalineEarthMetal.chemicalAbbreviated}</span>` + `<span class="chemical-name">${alkalineEarthMetal.chemicalName}</span>`;
  
  elementList.appendChild(alkalineEarthMetalListItem);
});



let reactiveNonMetals = [1,6,7,8,9,15,16,17,34,35,53];

let onlyReactiveNonMetals = periodicTable.filter(reactiveNonMetal => {
  return reactiveNonMetals.includes(reactiveNonMetal.atomicNumber);
});

onlyReactiveNonMetals.map(reactiveNonMetal => {
  let reactiveNonMetalListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  reactiveNonMetalListItem.setAttribute("id", `${reactiveNonMetal.chemicalAbbreviated}`);
  
  reactiveNonMetalListItem.classList.add("reactive-non-metal");
  
   reactiveNonMetalListItem.innerHTML = `<span class="atomic-number">${reactiveNonMetal.atomicNumber}</span>` + `<span class="chem-abbreviation">${reactiveNonMetal.chemicalAbbreviated}</span>` + `<span class="chemical-name">${reactiveNonMetal.chemicalName}</span>`;
  
  elementList.appendChild(reactiveNonMetalListItem);
});


let unknownProperties = [109,110,111,112,113,114,115,116,117,118];

let onlyUnknownProperties = periodicTable.filter(unknownProperty => {
  return unknownProperties.includes(unknownProperty.atomicNumber);
});

onlyUnknownProperties.map(unknownProperty => {
  let unknownPropertyListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  unknownPropertyListItem.setAttribute("id", `${unknownProperty.chemicalAbbreviated}`);
  
  unknownPropertyListItem.classList.add("unknown-property");
  
   unknownPropertyListItem.innerHTML = `<span class="atomic-number">${unknownProperty.atomicNumber}</span>` + `<span class="chem-abbreviation">${unknownProperty.chemicalAbbreviated}</span>` + `<span class="chemical-name">${unknownProperty.chemicalName}</span>`;
  
  elementList.appendChild(unknownPropertyListItem);
});



let transitionMetals = [21,22,23,24,25,26,27,28,29,30,39,40,41,42,43,44,45,46,47,48,72,73,74,75,76,77,78,79,80,104,105,106,107,108];

let onlyTransitionMetals = periodicTable.filter(transitionMetal => {
  return transitionMetals.includes(transitionMetal.atomicNumber);
});

onlyTransitionMetals.map(transitionMetal => {
  let transitionMetalListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  transitionMetalListItem.setAttribute("id", `${transitionMetal.chemicalAbbreviated}`);
  
  transitionMetalListItem.classList.add("transition-metal");
  
   transitionMetalListItem.innerHTML = `<span class="atomic-number">${transitionMetal.atomicNumber}</span>` + `<span class="chem-abbreviation">${transitionMetal.chemicalAbbreviated}</span>` + `<span class="chemical-name">${transitionMetal.chemicalName}</span>`;
  
  elementList.appendChild(transitionMetalListItem);
});


let nobelGases = [2,10,18,36,54,86];

let onlyNobelGases = periodicTable.filter(nobelGas => {
  return nobelGases.includes(nobelGas.atomicNumber);
});

onlyNobelGases.map(nobelGas => {
  let nobelGasListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  nobelGasListItem.setAttribute("id", `${nobelGas.chemicalAbbreviated}`);
  
  nobelGasListItem.classList.add("nobel-gas");
  
   nobelGasListItem.innerHTML = `<span class="atomic-number">${nobelGas.atomicNumber}</span>` + `<span class="chem-abbreviation">${nobelGas.chemicalAbbreviated}</span>` + `<span class="chemical-name">${nobelGas.chemicalName}</span>`;
  
  elementList.appendChild(nobelGasListItem);
});

let postTransitionMetals = [13,31,49,50,81,82,83,84,85];

let onlyPostTransitionMetals = periodicTable.filter(postTransitionMetal => {
  return postTransitionMetals.includes(postTransitionMetal.atomicNumber);
});

onlyPostTransitionMetals.map(postTransitionMetal => {
  let postTransitionMetalListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  postTransitionMetalListItem.setAttribute("id", `${postTransitionMetal.chemicalAbbreviated}`);
  
  postTransitionMetalListItem.classList.add("post-transition-metal");
  
   postTransitionMetalListItem.innerHTML = `<span class="atomic-number">${postTransitionMetal.atomicNumber}</span>` + `<span class="chem-abbreviation">${postTransitionMetal.chemicalAbbreviated}</span>` + `<span class="chemical-name">${postTransitionMetal.chemicalName}</span>`;
  
  elementList.appendChild(postTransitionMetalListItem);
});

let thalliumOnly = document.querySelectorAll("#Ti");

const [titanium, thallium] = thalliumOnly;

thallium.setAttribute("style", "grid-row: 3; grid-column: 7;")


let lanthanides = [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71];

let onlyLanthanides = periodicTable.filter(lanthanide => {
  return lanthanides.includes(lanthanide.atomicNumber);
});

onlyLanthanides.map(lanthanide => {
  let lanthanideListItem = document.createElement("li");
  //   add color-coded alkaliMetals class

  // make list item id the chemical abbreviation
  lanthanideListItem.setAttribute("id", `${lanthanide.chemicalAbbreviated}`);
  
  lanthanideListItem.classList.add("lanthanide");
  
   lanthanideListItem.innerHTML = `<span class="atomic-number">${lanthanide.atomicNumber}</span>` + `<span class="chem-abbreviation">${lanthanide.chemicalAbbreviated}</span>` + `<span class="chemical-name">${lanthanide.chemicalName}</span>`;
  
  elementList.appendChild(lanthanideListItem);
});