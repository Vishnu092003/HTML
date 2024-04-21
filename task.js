function addTask(){
    var taskinput = document.getElementById("task.input")
    var tasktext = taskinput.value.trim();
     
 if(tasktext ===""){
    alert("please enter task!")
     return;

 }
 var tasklist = document.getElementById("task-list")
 var listitem = document.createElement("li");
 listitem.textContent=tasktext;

 var deletebutton = document.createElement("button");
 deletebutton.textContent="Delete";
 deletebutton.onclick=function(){
 listitem.remove();

 };

 listitem.appendChild(deletebutton);
 tasklist.appendChild(listitem);

 taskinput.value = '';
}