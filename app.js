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
li.appendChild(document.createTextNode(itemInput.value));
//Creat a new link element
const link =document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML='<i class ="fa fa-remove"></i>';
li.appendChild(link);

//Append li to ul 
itemList.appendChild(li);

//Clear input 
itemInput.value='';

  e.preventDefault();
}