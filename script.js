var button = document.getElementById('btn')
var nextBtn = document.createElement('button')
var form = document.getElementById('form');


var url = 'https://jsonplaceholder.typicode.com'

async function start() {
  var response = await fetch(`${url}/posts/1`);
  var data = await response.json()

  document.getElementById("display").innerHTML = data.title;
  console.log(data)

  function next() {
    nextBtn.innerHTML = ">"
    form.appendChild(nextBtn);
  } next()



};


// nextBtn.addEventListener('click', function event(){
nextBtn.addEventListener('click', increment)



function increment() {

  var count = 1;
  nextBtn.onclick = function() {
    count ++;
nextBtn.innerHTML = count
}

  var nextQuote = `${url}/posts/${count}`



  console.log(count)

  fetch(nextQuote).then(function (response) {
    return response.json()

  }).then(function (data) {
    console.log(data.title)
    if (data.results === 0) {
      console.log("No results.");
    } else {
      document.getElementById("display").innerHTML = data.body;
    }
  });

  //     .then(function (data) {
  //       if (data.length === 0) {
  //           console.log("No results.");
  //       } else {
  //         console.log('thank you')
  //       }
  // })
}





button.addEventListener("click", start)