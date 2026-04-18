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
    else if (eventName.toLowerCase().includes("fashion")) {
      eventKey = "fashion";
    }
    else if (eventName.toLowerCase().includes("band")) {
      eventKey = "band";
    }
    else if (eventName.toLowerCase().includes("talent")) {
      eventKey = "talent";
    }

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


  // ================= FAVORITES =================
  let favorites = JSON.parse(localStorage.getItem("festFavorites")) || [];

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

  if (close2 && welcome) {
    close2.addEventListener("click", function () {
      welcome.classList.add("hidden");
    });
  }

});
