jQuery('.header a').on('click', function (e) {
  
  e.preventDefault();
  
  jQuery(this).parent().addClass('active');
  jQuery(this).parent().siblings().removeClass('active');
  
  target = jQuery(this).attr('href');

  jQuery('.container > div').not(target).hide();
  
  jQuery(target).fadeIn(900);
  
});

var data = {
  todo: [],
  complated: []
 };
 
 var fa1 = '<i class="fa fa-trash"></i>'
 var fa2 = '<i class="fa fa-check-circle"></i>'
 document.getElementById('add').addEventListener('click', function(){
     var value = document.getElementById('item').value;
     if(value){
         addItemTodo(value);
         document.getElementById('item').value = '';
         data.todo.push(value);
     }
        
 });
 
 function removeItem(){
     var item = this.parentNode.parentNode;
     var parent = item.parentNode;
     var id = parent.id;
     var value = item.innerText;
 
     if(id === 'todo'){
         data.todo.splice(data.todo.indexOf(value),1);
     }
     else{
         data.complated.splice(data.complated.indexOf(value),1);
     }
     parent.removeChild(item);
 }
 
 function complateItem(){
     var item = this.parentNode.parentNode;
     var parent = item.parentNode;
     var id = parent.id;
     var value = item.innerText;
 
     if(id === 'todo'){
         data.todo.splice(data.todo.indexOf(value),1);
         data.complated.push(value);
     }
     else{
         data.complated.splice(data.complated.indexOf(value),1);
         data.todo.push(value);
     }
     var target = (id === 'todo') ? document.getElementById('complated'):document.getElementById('todo');
     parent.removeChild(item);
     target.insertBefore(item, target.childNodes[0]);
 
 }
 //Adds new items 
 function addItemTodo(text){
     var list = document.getElementById('todo');
 
     var item =document.createElement('li');
     item.innerText = text;
 
     var buttons = document.createElement('div');
     buttons.classList.add('buttons');
 
     var remove = document.createElement('button');
     remove.classList.add('remove');
     remove.innerHTML = fa1;
     //Removing item
     remove.addEventListener('click', removeItem);
 
     var complate = document.createElement('button');
     complate.classList.add('complate');
     complate.innerHTML = fa2;
     //Add click complate button code
     complate.addEventListener('click', complateItem);
 
 
 
     buttons.appendChild(remove);
     buttons.appendChild(complate);
     item.appendChild(buttons);
     list.appendChild(item);
 
     list.insertBefore(item, list.childNodes[0]);
 }