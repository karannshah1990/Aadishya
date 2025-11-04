// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Projects Modal
function openModal(img){
    const modal = document.getElementById("projectModal");
    modal.style.display="block";
    document.getElementById("modalImage").src = img.src;
    document.getElementById("caption").innerText = img.alt;
}

function closeModal(){
    document.getElementById("projectModal").style.display="none";
}

window.onclick = function(event){
    if(event.target.id==="projectModal"){ closeModal(); }
}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
