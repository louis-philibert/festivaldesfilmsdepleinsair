let togg1 = document.getElementById("togg1");

let navbarSupportedContent = document.getElementById("navbarSupportedContent");

togg1.addEventListener("click", () => {
  if(getComputedStyle(navbarSupportedContent).display != "none"){
    navbarSupportedContent.style.display = "none";
  } else {
    navbarSupportedContent.style.display = "block";
  }
});
