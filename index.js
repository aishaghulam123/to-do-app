var ul = document.getElementById("ul");


function addTask() {
   let input = document.getElementById('input');

   if (input.value ) {

    // li element
      let li = document.createElement('li');
     

    //   label for checkbox
      let label = document.createElement('label');

    //   label.setAttribute("id", "checked");
   let labelText = document.createTextNode(input.value);
  
// checkbox

        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
    label.appendChild(checkbox);

     label.appendChild(labelText);

         li.appendChild(label);

// buttons

         let div = document.createElement('div');
            div.setAttribute("class", "btn");
        li.appendChild(div);

        // edit button
        let  editbutton = document.createElement('button');
        editbutton.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editbutton.setAttribute("onclick", "editTask(this)");


        // delete button
        let deletebutton = document.createElement('button');
        deletebutton.innerHTML=('<i class="fa-solid fa-trash-can"></i>');
        deletebutton.setAttribute("onclick", "deleteTask(this)");


        div.appendChild(editbutton);
        div.appendChild(deletebutton);

        

      ul.appendChild(li);
      
       
input.value = "";

  checkbox.addEventListener("click", function() {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
            label.style.color = "gray";
            updateTaskCounts();
        } else {
            label.style.textDecoration = "none";
            label.style.color = "#041f62";
             updateTaskCounts();
        }
    });

////// task counter

function updateTaskCounts() {
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
var checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
// document.getElementById("total").textContent = allCheckboxes.length;

document.getElementById("comp").innerHTML = checkedCount;


document.getElementById("remain").innerHTML = allCheckboxes.length - checkedCount;

}
// document.getElementById("total").textContent = allCheckboxes.length;

    // document.getElementById("comp").textContent = document.querySelectorAll('input[type="checkbox"]:checked').length;
    // document.getElementById("remain").textContent = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
    document.getElementById("total").textContent = document.querySelectorAll('input[type="checkbox"]').length;

   
}
else {
    alert("Please enter a task");
   }
  

}


///////////// delete all task function
function deleteAll() {
    ul.innerHTML = "";
    document.getElementById("total").innerHTML = 0;
    document.getElementById("comp").innerHTML = 0;
    document.getElementById("remain").innerHTML = 0;
    
}


///////////// delete this task function
function deleteTask(btn) {
    let li = btn.parentNode.parentNode;
    ul.removeChild(li);
}
//////////// edit this task function

function editTask(btn) {
    let li = btn.parentNode.parentNode;
    let oldTask = li.firstChild.textContent;
    let newTask = prompt("Update task", oldTask);
    if (newTask) {
        li.firstChild.childNodes[1].nodeValue = newTask;
    }
}








