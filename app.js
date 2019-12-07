// Define variables-------------------------------------------------------------

const form = document.querySelector('#item-form');
const itemList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-items');
const filter = document.querySelector('#filter');
const itemInput = document.querySelector('#item');


//Event Listener ----------------------------------------------------------------

loadEventlisteners();


function loadEventlisteners(){
  //Add item event
  form.addEventListener('submit',addItem);
  //Remove Item event
  itemList.addEventListener('click',removeItem)
  //Clear Items Event 
  clearBtn.addEventListener('click',clearItems)
  //Filter Items
  filter.addEventListener('keyup',filterItems)

} 

//Add item function----------------------------------------------------------------

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

//Remove item function ---------------------------------------------------

function removeItem(e){

if(e.target.parentElement.classList.contains('delete-item')) {
  e.target.parentElement.parentElement.remove();
 
 }
}

//Clear items function----------------------------------------------------

function clearItems(e){

itemList.innerHTML='';

} 

//Filter items function-----------------------------------------------------

function filterItems(e){

  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach(
    function(e){
  const item = e.firstChild.textContent;
  if (item.toLowerCase().indexOf(text) != -1){
     e.style.display = 'block';
  } else{
    e.style.display = 'none';
  }
    }
  );
}