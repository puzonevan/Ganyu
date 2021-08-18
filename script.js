const combatContainer = document.getElementById('ability');
const combatImage = combatContainer.firstElementChild; 
const combatName = combatContainer.lastElementChild;

combatImage.addEventListener("mouseover", function(e){
    combatName.style.opacity = "1";
    combatImage.style.transform = "scale(1.1)";
});