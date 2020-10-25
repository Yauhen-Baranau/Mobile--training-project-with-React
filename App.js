import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import MobileCompany from './components/MobileCompany'


let companyName='Velcom';
let clientsArr=[ 
  {id:1, f:"Иванов", i:"Иван", o:'Иванович', balance:250, active:true}, 
  {id:2, f:"Сидоров", i:"Сидор", o:'Сидорович', balance:10, active:true}, 
  {id:3, f:"Петров", i:"Петр", o:'Петрович', balance:200,  active:true},
  {id:4, f:"Григорьев", i:"Григорий", o:'Григорьевич', balance:-200,  active:false},
  {id:5, f:"Мосько", i:"Артем", o:'Иванович', balance:-207,  active:false},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
    mode={1}
  />
  , document.getElementById('container') 
);