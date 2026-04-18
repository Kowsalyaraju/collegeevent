document.addEventListener("DOMContentLoaded", function () {


  var cards = document.querySelectorAll(".card");

  
  cards.forEach(function (card) {

    
    var title = card.querySelector("h3");
    var eventName = title ? title.textContent : "";

    var eventKey = "";

  
    if (eventName.toLowerCase().includes("dance")) {
      eventKey = "dance";
    } 
    else if (eventName.toLowerCase().includes("singing")) {
      eventKey = "singing";
    } 
    else if (eventName.toLowerCase().includes("drama")) {
      eventKey = "drama";
    }

    
    var detailBtn = card.querySelector(".detail-btn");
    var registerBtn = card.querySelector(".register-btn");

    
    if (detailBtn) {
      detailBtn.onclick = function () {
        if (eventKey === "dance") {
          window.location.href = "dance.html";
        } else if (eventKey === "singing") {
          window.location.href = "singing.html";
        } else if (eventKey === "drama") {
          window.location.href = "drama.html";
        }
      };
    }

  
    if (registerBtn) {
      registerBtn.onclick = function () {
        window.location.href = "form.html?event=" + eventName;
      };
    }

  });

});

// heart button functionality
let favorites = JSON.parse(localStorage.getItem("festFavorites"));

if (favorites === null) {
  favorites = [];
}


let buttons = document.querySelectorAll(".favorite");


buttons.forEach(function(button) {


  let eventName = button.nextElementSibling.textContent.trim();

  
  if (favorites.includes(eventName)) {
    button.textContent = "❤️";
  } else {
    button.textContent = "🤍";
  }

  button.addEventListener("click", function(e) {

    e.preventDefault();

    
    if (favorites.includes(eventName)) {

      
      let newList = [];

      favorites.forEach(function(item) {
        if (item !== eventName) {
          newList.push(item);
        }
      });

      favorites = newList;
      button.textContent = "🤍";

    } else {

      
      favorites.push(eventName);
      button.textContent = "❤️";
    }

    
    localStorage.setItem("festFavorites", JSON.stringify(favorites));

  });

});





