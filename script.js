var button = document.getElementById('btn')




 async function start(){
   var response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      var data = await response.json()
      
      console.log(data.title)
      
     document.getElementById("display").innerHTML = data.title; 
};






button.addEventListener("click",start)