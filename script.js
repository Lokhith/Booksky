//selecting popup box , overlay and button
// when we are accessing the element used in class we must use query selector or else we can use by id
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")
var cancelpopup = document.getElementById("cancel-popup")

addpopupbutton.addEventListener("click", function(event){
  popupoverlay.style.display = "block"
  popupbox.style.display = "block"
  
})

cancelpopup.addEventListener("click", function(event){
  event.preventDefault() 
  popupoverlay.style.display = "none"
  popupbox.style.display = "none"
})
// the page automatically reloads the page if we press the button so to prevent that we are using this prevent default

//select container, add book button, book title input, book author input, book description input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click", function(event){
  event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class", "book-container")
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
      <h5>${bookauthorinput.value}</h5>
      <p>${bookdescriptioninput.value}</p>
      <button onClick = "deletebook(event)">Delete</button>`
// when we use ${} it means that the input which we get from the user should be displayed

  container.append(div)
  popupoverlay.style.display = "none"
  popupbox.style.display = "none"

})

function deletebook(event){
  event.target.parentElement.remove()

// when we want to remove the values which are above the button we use parentelement to be removed
}

