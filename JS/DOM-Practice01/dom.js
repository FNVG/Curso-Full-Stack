var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
//Evento de eliminacion
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;


  var li = document.createElement('li');

  li.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(newItem));

  
  var deleteBtn = document.createElement('button');

 
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


  deleteBtn.appendChild(document.createTextNode('X'));


  li.appendChild(deleteBtn);


  itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Estas seguro?')){
            var li = e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    //convertir a minuscula
    var text = e.target.value.toLowerCase();
    console.log(text);
    var items= itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });
    

}