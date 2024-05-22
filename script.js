// Get the title
const title = document.getElementById("title");

// Get the status
const status = document.getElementById("status");

// Get the description
const description = document.getElementById("description");

// Get the create button
const create = document.getElementById("create-button");

// Create a new card based on the status
function createCard() {
  if(status === "To-Do") {
    
  }
}


// Modal section

// Get the modal
var modal = document.getElementById("newModal");

// Get the button that opens the modal
var btn = document.getElementById("new-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}