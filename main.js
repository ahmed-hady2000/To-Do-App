let inputData = document.getElementById('taskData');
let btnAdd = document.getElementById('btnAdd');
let noTask = document.getElementById('noTask');
let tasks = document.getElementById('tasks');


let showNoTask = () =>{
  if(tasks.childElementCount == 0){
      noTask.classList.remove('none')
  }

}

let addTask = () =>{
    let task = inputData.value
   if(inputData.value.length <= 3)
   {
       alert('you Must Eneter Vaild Data')
   }
   else{
    noTask.classList.add('none');
    tasks.innerHTML += `
    <div class="alert alert-info">
    ${task}
    <button class="delete btn btn-danger float-right">Delete </botton>
    </div>
    `;
    inputData.value = "";


   }


}



btnAdd.addEventListener('click' ,addTask);

document.addEventListener('click',function (e) {
   if (e.target.classList.contains('delete') ) {
     e.target.parentElement.remove();
     showNoTask();
   }

})