

document.addEventListener("DOMContentLoaded", function () {

// events
  var cards = document.querySelectorAll(".card");

  
  cards.forEach(function (card) {

    
    var eventKey = card.getAttribute('data-event');

    
    var detailBtn = card.querySelector(".detail-btn");
    var registerBtn = card.querySelector(".register-btn");

    
    if (detailBtn) {
      detailBtn.onclick = function () {
        if (eventKey) {
          window.location.href = eventKey + ".html";
        }
      };
    }

  
    if (registerBtn) {
      registerBtn.onclick = function () {
        window.location.href = "form.html?event=" + eventKey;
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



  // ================= SIDENAV =================
  var menu = document.querySelector(".nav__s3");
  var sidenav = document.querySelector(".hide");
  var close = document.getElementById("p1");
  var close2 = document.getElementById("p2");
  var welcome = document.querySelector(".welcome");

  if (menu && sidenav) {
    menu.addEventListener("click", function () {
      sidenav.classList.remove("hidden");
    });
  }

  if (close && sidenav) {
    close.addEventListener("click", function () {
      sidenav.classList.add("hidden");
    });
  }




})

