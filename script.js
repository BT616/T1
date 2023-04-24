var button = document.getElementById('btn')
var nextBtn= document.createElement('button')

var form = document.getElementById('form');







 async function start(){
   var response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      var data = await response.json()
      
      console.log(data)

      function next(){
      nextBtn.innerHTML= ">"
      form.appendChild(nextBtn)
    } next()

     document.getElementById("display").innerHTML = data.title; 
};






button.addEventListener("click",start)