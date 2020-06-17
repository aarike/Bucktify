// select the Elements
const list = document.getElementById("list");
const input = document.getElementById("input");
//const myBtn = document.querySelector('.myBtn');

// Variables
let LIST = []
, id = 0;

// add to do function

function addToDo(toDo, trash) {

    const item = `
    <li class="item"
        <p class="text">${toDo}</p>
        <i class="fa fa-trash-o" job="delete" id="0"></i><hr>
     </li>
    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

//add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13 ) {
        let toDo = input.value;
        // if the input isn't empty
        if(toDo){
            addToDo(toDo, false);

            LIST.push({
                name : toDo,
                trash : false
            });

            id++;

        }
        input.value = "";
    }
});

//remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

list.addEventListener('click', function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

   if(elementJob == "delete") {
       removeToDo(element);
   }

});
 