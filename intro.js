

function openNav() {
    document.getElementById("sidenavCV").style.width = "105px";
    document.getElementById("main").style.marginLeft = "105px";
    document.querySelector(".bg-light").style.marginLeft = "55px";
    document.body.style.backgroundColor = "rgba(0,00,0,0.4)";

  }
  function closeNav() {
    closeAll()

    document.querySelector(".bg-light").style.marginLeft = "0";
    document.getElementById("name").style.display = "block";
    document.querySelector(".about").style.display = "none";

    document.querySelector(".title").style.display = "block";
    document.querySelector(".container-main").style.justifyContent = "space-between";
    document.querySelector(".container-main").style.alignItems = "flex-end";
    document.querySelector(".container-main").style.flexDirection = "row";
    
    document.querySelector(".bg-light").style.marginTop = "0"; 
    /*
    document.querySelector(".info-personal").style.display = "block";
    
    document.querySelector(".info-personal").style.display = "none";
*/

  } 

  function closeAll(){
    document.getElementById("sidenavCV").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "black";
    document.getElementById("contact").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.getElementById("self-learning").style.display = "none";
    document.getElementById("work").style.display = "none";
   

  }






function showWork(){
  closeAll()
  document.getElementById("name").style.display = "none";
  document.querySelector(".quote").style.display = "none";
  document.querySelector(".title").style.display = "none";
  document.querySelector(".bg-light").style.marginLeft = "75%"; 
  document.getElementById("work").style.display = "block";
  document.querySelector(".container-main").style.justifyContent = "flex-end";
  document.querySelector(".container-main").style.alignItems = "flex-end";
  document.querySelector(".bg-light").style.background ="radial-gradient( #F3DEBA,#e66465, #9198e5)"
  document.querySelector(".bg-light").style.marginTop = "0"; 




}

function showInfo(){
  closeAll()
 
  document.getElementById("name").style.display = "block";
  document.querySelector(".container-main").style.justifyContent = "center";
  document.querySelector(".container-main").style.alignItems = "center";
  document.querySelector(".container-main").style.flexDirection = "column";
  document.querySelector(".info-personal").style.display = "block";
  document.querySelector(".about").style.display = "block";
  document.querySelector(".bg-light").style.background ="radial-gradient( #F3DEBA,#e66465, #9198e5)"
  document.querySelector(".bg-light").style.marginTop = "0"; 
  


  
}

function showSelfLearning(){
  closeAll()
  
  document.getElementById("self-learning").style.display = "block";
  document.querySelector(".container-main").style.justifyContent = "flex-end";
  document.querySelector(".bg-light").style.background ="transparent"
  document.getElementById("name").style.display = "none";


 
}

function showContact(){
  closeAll()
  document.getElementById("contact").style.display = "block";
 // document.querySelector(".info-personal").style.display = "none";
  document.getElementById("self-learning").style.display = "none";
  document.querySelector(".bg-light").style.marginTop = "6%"; 





}


function ChangeActive(){
  const courses = document.querySelectorAll(".course")
  
  courses.forEach(course=>{
    course.addEventListener("click",()=>{
      
      courses.forEach(course=> course.classList.remove("active"))
      course.classList.add("active")
    })
  })
}
ChangeActive()