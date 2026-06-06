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
function searchWeb(){

let query =
document.getElementById("searchInput").value;

let engine =
document.getElementById("searchEngine").value;

if(query.trim()==="") return;

let url="";

if(engine==="google"){
url="https://www.google.com/search?q=";
}

else if(engine==="bing"){
url="https://www.bing.com/search?q=";
}

else if(engine==="duckduckgo"){
url="https://duckduckgo.com/?q=";
}

else if(engine==="brave"){
url="https://search.brave.com/search?q=";
}

window.open(
url + encodeURIComponent(query),
"_blank"
);

}
