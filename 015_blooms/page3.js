//navbar
const navBar = document.getElementById('main-nav');

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 100 && top < 3168) {
    navBar.classList.add('active');
  } else {
    navBar.classList.remove('active');
  }
};

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

//Delete property by key value
function deleteByVal(val, array) {
  const index = array.indexOf(val);
  if (index > -1) {
    array.splice(index, 1);
  }
}

function checkEmptyAndDelete(prop) {
  if (filter[prop].length == 0) {
    delete filter[prop];
  }
}

//Assigning event listener to status buttons
statusButtons.forEach((status) => {
  status.addEventListener('click', (e) => {
    if (status.checked == true) {
      if (!filter.status) {
        filter.status = [];
      }
      if (e.target.id == 'cmp') {
        filter.status.push('Completed');
      } else {
        filter.status.push('Customer Aquisition');
      }
      fetchProjects();
    } else {
      if (e.target.id == 'cmp') {
        deleteByVal('Completed', filter.status);
        if (filter.status.length == 0) {
          delete filter.status;
        }
      } else {
        deleteByVal('Customer Aquisition', filter.status);
        if (filter.status.length == 0) {
          delete filter.status;
        }
      }

      fetchProjects();
    }
  });
});

//Assigning event listener to model buttons
modelButtons.forEach((model) => {
  model.addEventListener('click', (e) => {
    if (model.checked == true) {
      if (!filter.model) {
        filter.model = [];
      }
      if (e.target.id == 'cv') {
        filter.model.push('Community Villa');
      } else if (e.target.id == 'home') {
        filter.model.push('Homestead');
      } else if (e.target.id == 'land') {
        filter.model.push('Land');
      } else if (e.target.id == 'ltl') {
        filter.model.push('Long Term Lease');
      } else if (e.target.id == 'rental') {
        filter.model.push('Rental');
      } else if (e.target.id == 'stl') {
        filter.model.push('Short Term Lease');
      } else if (e.target.id == 'iv') {
        filter.model.push('Individual Villa');
      }
      fetchProjects();
    } else {
      if (e.target.id == 'cv') {
        deleteByVal('Community Villa', filter.model);
        if (filter.model.length == 0) {
          delete filter.model;
        }
      } else if (e.target.id == 'home') {
        deleteByVal('Homestead', filter.model);
        if (filter.model.length == 0) {
          delete filter.model;
        }
      } else if (e.target.id == 'land') {
        deleteByVal('Land', filter.model);
        if (filter.model.length == 0) {
          delete filter.model;
        }
      } else if (e.target.id == 'ltl') {
        deleteByVal('Long Term Lease', filter.model);
        if (filter.model.length == 0) {
          delete filter.model;
        }
      } else if (e.target.id == 'rental') {
        deleteByVal('Rental', filter.model);
        if (filter.model.length == 0) {
          delete filter.model;
        }
      } else if (e.target.id == 'stl') {
        deleteByVal('Short Term Lease', filter.model);
        if (filter.model.length == 0) {
          delete filter.model;
        }
      } else if (e.target.id == 'iv') {
        deleteByVal('Individual Villa', filter.model);
        if (filter.model.length == 0) {
          delete filter.model;
        }
      }
      fetchProjects();
    }
  });
});

//Assigning event listener to location buttons
locButtons.forEach((loc) => {
  loc.addEventListener('click', (e) => {
    if (loc.checked == true) {
      if (!filter.location) {
        filter.location = [];
      }
      if (e.target.id == 'wynd') {
        filter.location.push('Wayanad,Kerala');
      } else {
        filter.location.push('Bangalore,Karnataka');
      }
      fetchProjects();
    } else {
      if (e.target.id == 'wynd') {
        deleteByVal('Wayanad,Kerala', filter.location);
        if (filter.location.length == 0) {
          delete filter.location;
        }
      } else {
        deleteByVal('Bangalore,Karnataka', filter.location);
        if (filter.location.length == 0) {
          delete filter.location;
        }
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

  //Filtering.................. *********************

  let filteredData = projectData.filter((obj) =>
    Object.entries(filter).every(([prop, value]) => value.includes(obj[prop]))
  );

  // console.log(filteredData); *********************

  //Display data
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
