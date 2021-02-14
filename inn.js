const btn = document.querySelector('.btn-loc')
btn.addEventListener('click', function(){
    alert("hey now");
})




/* 

API Fetching

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);
const doggos = document.querySelector(".first-up-section");

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);

    
  });

  */