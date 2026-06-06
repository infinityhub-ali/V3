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
