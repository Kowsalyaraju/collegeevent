



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





