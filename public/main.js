var housetask = document.getElementsByClassName("housetask");
var completeTask = document.getElementsByClassName("complete-task");
var trash = document.getElementsByClassName("fa-trash");

Array.from(housetask).forEach(function(element) {
      element.addEventListener('click', function(event){
        event.stopPropagation();
        const taskId = element.dataset.taskId
        console.log(taskId)
        fetch('assign', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            taskId
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(completeTask).forEach(function(element) {
      element.addEventListener('click', function(event){
        event.stopPropagation();


        

        const taskId = this.parentNode.parentNode.dataset.taskId

        const completed = element.checked

        fetch('completeTask', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            taskId,
            completed
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
      });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const taskId = this.parentNode.parentNode.dataset.taskId
        fetch('trash', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            taskId,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
