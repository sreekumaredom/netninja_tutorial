//Location sort buttons
const wyndBtn = document.getElementById('wynd');
const bnglrBtn = document.getElementById('bnglr');

//Model sort buttons
const cvBtn = document.getElementById('cv');
const homeBtn = document.getElementById('home');
const landBtn = document.getElementById('land');
const ltlBtn = document.getElementById('ltl');
const rentalBtn = document.getElementById('rental');
const stlBtn = document.getElementById('stl');
const ivBtn = document.getElementById('iv');

//Status sort buttons
const cmpBtn = document.getElementById('cmp');
const acqBtn = document.getElementById('acq');

//Cards container
var cardsContainer = document.getElementById('cards-container');

//Array of location buttons
const locButtons = [wyndBtn, bnglrBtn];

//Array of status buttons
const statusButtons = [cmpBtn, acqBtn];

//Array of model buttons
const modelButtons = [
  cvBtn,
  homeBtn,
  landBtn,
  ltlBtn,
  rentalBtn,
  stlBtn,
  ivBtn,
];

//Filter object
let filter = {};

//Assigning event listener to location buttons
locButtons.forEach((loc) => {
  loc.addEventListener('click', () => {
    if (loc.checked == true) {
      console.log('sorting on');
    } else {
      console.log('sorting off');
    }
  });
});

function deleteByVal(val) {
  for (var key in filter) {
    if (filter[key] == val) delete filter[key];
  }
}

//Assigning event listener to status buttons
statusButtons.forEach((status) => {
  status.addEventListener('click', (e) => {
    if (status.checked == true) {
      if (e.target.id == 'cmp') {
        filter.status = 'Completed';
      } else {
        filter.status = 'Customer Aquisition';
      }
      fetchProjects();
    } else {
      if (e.target.id == 'cmp') {
        deleteByVal('Completed');
      } else {
        deleteByVal('Customer Aquisition');
      }
      fetchProjects();
    }
  });
});

//Assigning event listener to model buttons
modelButtons.forEach((model) => {
  model.addEventListener('click', (e) => {
    if (model.checked == true) {
      if (e.target.id == 'cv') {
        filter.model = 'Community Villa';
      } else if (e.target.id == 'home') {
        filter.model = 'Homestead';
      } else if (e.target.id == 'land') {
        filter.model = 'Land';
      } else if (e.target.id == 'ltl') {
        filter.model = 'Long Term Lease';
      } else if (e.target.id == 'rental') {
        filter.model = 'Rental';
      } else if (e.target.id == 'stl') {
        filter.model = 'Short Term Lease';
      } else if (e.target.id == 'iv') {
        filter.model = 'Individual Villa';
      }
      fetchProjects();
    } else {
      if (e.target.id == 'cv') {
        deleteByVal('Community Villa');
      } else if (e.target.id == 'home') {
        deleteByVal('Homestead');
      } else if (e.target.id == 'land') {
        deleteByVal('Land');
      } else if (e.target.id == 'ltl') {
        deleteByVal('Long Term Lease');
      } else if (e.target.id == 'rental') {
        deleteByVal('Rental');
      } else if (e.target.id == 'stl') {
        deleteByVal('Short Term Lease');
      } else if (e.target.id == 'iv') {
        deleteByVal('Individual Villa');
      }
      fetchProjects();
    }
  });
});

//For storing fetched data
let projectData;

async function fetchProjects() {
  let res = await fetch('./page3.json');

  //Fetch and store here
  projectData = await res.json();

  let filteredData = projectData.filter((item) => {
    for (let key in filter) {
      if (item[key] === undefined || item[key] != filter[key]) return false;
    }
    return true;
  });

  populateUI(filteredData);
}

//Display cards
function populateUI(cards) {
  let output = '';

  cardsContainer.innerHTML = ''; //initial reset

  cards.map((card) => {
    output += `<div class="card">
    <img src="${card.src}" class="echo-img" alt="house" />
    <div class="card-details">
      <h1>${card.name}</h1>
      <p class="card-location">${card.location}</p>
      <p class="card-desc">${card.model}</p>
      <div class="legal-process">
        <label for="file" class="legal-lbl">Legal Process</label>
        <progress id="file" value="${card.legal}" class="progress" max="100">
          32%
        </progress>
        <span class="progress-value">${card.legal}%</span>
      </div>
      <div class="ratings-bar">
        <p>Plot Availability</p>
        <div class="bars checked"></div>
        <div class="bars checked"></div>
        <div class="bars unchecked"></div>
        <div class="bars unchecked"></div>
        <div class="bars unchecked"></div>
      </div>
      <p class="cmn-mrgn">
        Current Project Status : ${card.status}
      </p>
      <div class="card-btns">
        <button class="project-btn">
          <a href=""
            >Project Details
            <span
              ><i class="fa fa-arrow-down" aria-hidden="true"></i></span
          ></a>
        </button>
        <button class="enquire-btn"><a href="">Enquire</a></button>
      </div>
    </div>
  </div>`;
  });
  cardsContainer.innerHTML = output;
}

fetchProjects();
