// Define variables

const form = document.querySelector('#item-form');
const itemList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-items');
const filter = document.querySelector('#filter');
const itemInput = document.querySelector('#item');


//Event Listener 

loadEventlisteners();


function loadEventlisteners(){


  form.addEventListener('submit',addItem);
} 

//Add item function 

function addItem(e){
if (itemInput.value === ''){
  alert('Add an item');
} 


//Create li element 
const li = document.createElement('li');
li.className = 'collection-item';


  e.preventDefault();
}