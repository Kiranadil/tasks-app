let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let clickButton = document.getElementsByClassName('crossButton');
let displayClicks = document.getElementById('displayClicks');
let countButtonClicks= 0;
addToDoButton.addEventListener('click', function(){
    var paragraph =document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    countButtonClicks = countButtonClicks + 1;
    displayClicks.innerText=countButtonClicks;
    inputField.value='';
    function clickButton(){
        toDoContainer.removeChild(paragraph);
    }
   

})
