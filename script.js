var button = document.getElementById('btn')




 async function start(){
   await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      console.log(response)
}
document.getElementById("display").innerHTML = response

button.addEventListener("click",start)