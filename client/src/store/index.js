import { createStore } from 'vuex';
import axiosClient from '../axios';
import router  from '../router';

const tempData = {
  data: [
    {
      _id: "asd1231231",
      flankNumber: "US001",
      poducent: "General Dynamics",
      model: "Abrams",
      actualModification: "SEP v3",
      vintage: "2012",
      entryDate: "2021-07-28",
      mileage: 12000,
      ammunition: 60,
      armorThickness: [300,200,150],
    },
    {
      _id: "asd1231232",
      flankNumber: "US00211",
      poducent: "General Dynamics",
      model: "Abrams",
      actualModification: "SEP v2",
      vintage: "2012",
      entryDate: "2021-07-28",
      mileage: 12000,
      ammunition: 60,
      armorThickness: [300,200,150],
    },
    {
      _id: "asd12312312",
      flankNumber: "US0012",
      poducent: "General Dynamics",
      model: "Abrams",
      actualModification: "SEP v3",
      vintage: "2012",
      entryDate: "2021-07-28",
      mileage: 12000,
      ammunition: 60,
      armorThickness: [300,200,150],
    },
    {
      _id: "asd12312313",
      flankNumber: "US0013",
      poducent: "General Dynamics",
      model: "Abrams",
      actualModification: "SEP v3",
      vintage: "2012",
      entryDate: "2021-07-28",
      mileage: 12000,
      ammunition: 60,
      armorThickness: [300,200,150],
    },
    {
      _id: "asd12312314",
      flankNumber: "US0014",
      poducent: "General Dynamics",
      model: "Abrams",
      actualModification: "SEP v1",
      vintage: "2012",
      entryDate: "2021-07-28",
      mileage: 12000,
      ammunition: 60,
      armorThickness: [300,200,150],
    },
  ]
}

const oneTankTemp = {
  data: {
      _id: "asd12312314",
      flankNumber: "US0014",
      poducent: "General Dynamics",
      model: "Abrams",
      actualModification: "SEP v1",
      vintage: "2012",
      entryDate: "2021-07-28",
      mileage: 12000,
      ammunition: 60,
      armorThickness: [300,200,150],
  }
}

const store = createStore({
  state: {
    user: {
      data: {},
      token: null,
    },
    tanks: {
      data: [],
      loading: false
    },
    currentTank: {
      data: {},
      loading: false,
    },
    countryList: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas (the)",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia (Plurinational State of)",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory (the)",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cayman Islands (the)",
      "Central African Republic (the)",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands (the)",
      "Colombia",
      "Comoros (the)",
      "Congo (the Democratic Republic of the)",
      "Congo (the)",
      "Cook Islands (the)",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czechia",
      "Côte d'Ivoire",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic (the)",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Falkland Islands (the) [Malvinas]",
      "Faroe Islands (the)",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories (the)",
      "Gabon",
      "Gambia (the)",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See (the)",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea (the Democratic People's Republic of)",
      "Korea (the Republic of)",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic (the)",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands (the)",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia (Federated States of)",
      "Moldova (the Republic of)",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands (the)",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger (the)",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands (the)",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines (the)",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Republic of North Macedonia",
      "Romania",
      "Russian Federation (the)",
      "Rwanda",
      "Réunion",
      "Saint Barthélemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin (French part)",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten (Dutch part)",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan (the)",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania, United Republic of",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands (the)",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates (the)",
      "United Kingdom of Great Britain and Northern Ireland (the)",
      "United States Minor Outlying Islands (the)",
      "United States of America (the)",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela (Bolivarian Republic of)",
      "Viet Nam",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
      "Åland Islands"
    ]
  },
  getters: {
    
  },
  actions: {
    getTanks({ commit }) {
      // commit("setTanksLoading", true)
      // return axiosClient.get("/api/tanks").then((res) => {
      //   commit("setTanksLoading", false)
      //   commit("setTanks", res.data)
      //   return res;
      // })
      commit("setTanks", tempData)
    },
    getTank({ commit }) {
      // commit("setCurrentTankLoading", true)
      // return axiosClient.get("/api/tank").then((res) => {
      //   commit("setCurrentTankLoading", false)
      //   commit("setCurrentTank", res.data)
      //   return res;
      // })
      commit("setCurrentTank", oneTankTemp)
      return oneTankTemp
    },
    updateTank({ commit }, tank) {
      // return axiosClient.put(`/api/tank/${tank._id}`, tank).then((res) => {
      //   commit("updateTanks", res.data);
      //   return res;
      // })
    },
    createTank({ commit }, tank) {
      // return axiosClient.post(`/api/tank`, tank).then((res) => {
      //   commit("saveTank", res.data);
      //   return res;
      // })
    },
    deleteTank({ commit }, id) {
      return axiosClient.delete(`/api/surveys/${id}`).then((res) => {
        commit("deleteTank", res.data)
      });
    },
    register({ commit }, user) {
      return axiosClient.post('/api/register', user).then(({data}) => {
        commit('setUser', data);
        return data;
      })
    },
    login({ commit }, user) {
      return axiosClient.post('/api/login', user).then(({data}) => {
        commit('setUser', data);
        return data;
      })
    },
  },
  mutations: {
    setTanks: (state, tanks) => {
      state.tanks.data = tanks.data
    },
    setCurrentTank: (state, currentTank) => {
      state.currentTank.data = currentTank.data
    },
    setTanksLodaing: (state, loading) => {
      state.tanks.loading = loading
    },
    setCurrentTankLodaing: (state, loading) => {
      state.currentTank.loading = loading
    },
    updateTanks: (state, tank) => {
      state.tanks.data = state.tanks.data.map((t) => {
        if(t._id == tank._id) {
          return tank;
        }
        return t;
      });
    },
    saveTank: (state, tank) => {
      state.tanks.data = [...state.tanks.data, tank];
    },
    deleteTank: (state, id) => {
      state.tanks.data = state.tanks.data.filter((t) => t._id != id)
    },
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem('TOKEN');
      router.push({
        name: "Login",
      });
    },
    setUser: (state, userData) => {
      const user = {
        name: userData.name,
        email: userData.email,
        id: userData._id
      }
      state.user.token = userData.token;
      state.user.data = user;
      sessionStorage.setItem('TOKEN', userData.token);
      sessionStorage.setItem('USER', JSON.stringify(user));
    },
  },
  modules: {},
})


export default store;