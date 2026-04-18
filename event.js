document.addEventListener("DOMContentLoaded", function () {

  // ================= EVENTS =================
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
      detailBtn.addEventListener("click", function () {
        if (eventKey) {
          window.location.href = eventKey + ".html";
        }
      });
    }

    if (registerBtn) {
      registerBtn.addEventListener("click", function () {
        window.location.href = "form.html?event=" + encodeURIComponent(eventName);
      });
    }
  });


  // ================= FAVORITES =================
  let favorites = JSON.parse(localStorage.getItem("festFavorites")) || [];

  let buttons = document.querySelectorAll(".favorite");

  buttons.forEach(function(button) {

    let title = button.parentElement.querySelector("h3");
    let eventName = title ? title.textContent.trim() : "";

    button.textContent = favorites.includes(eventName) ? "❤️" : "🤍";

    button.addEventListener("click", function(e) {
      e.preventDefault();

      if (favorites.includes(eventName)) {
        favorites = favorites.filter(item => item !== eventName);
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