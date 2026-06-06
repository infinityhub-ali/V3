function showSection(sectionId){

  let sections = document.querySelectorAll("main section");

  sections.forEach(function(section){
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

window.onload = function(){
  showSection("home");
};

function updateClock(){

  let now = new Date();

  let time = now.toLocaleTimeString();

  let date = now.toDateString();

  document.getElementById("clock").textContent = time;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock,1000);

updateClock();

function searchGoogle(){

  let query = document.getElementById("searchInput").value;

  if(query.trim() === "") return;

  window.open(
    "https://www.google.com/search?q=" +
    encodeURIComponent(query),
    "_blank"
  );
}
