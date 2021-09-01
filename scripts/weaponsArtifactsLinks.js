const weaponLinks = [
    "https://genshin-impact.fandom.com/wiki/Amos%27_Bow",
    "https://genshin-impact.fandom.com/wiki/Prototype_Crescent",
    "https://genshin-impact.fandom.com/wiki/Skyward_Harp",
    "https://genshin-impact.fandom.com/wiki/The_Stringless",
]

const artifactLinks = [
    "https://genshin-impact.fandom.com/wiki/Blizzard_Strayer",
    "https://genshin-impact.fandom.com/wiki/Gladiator%27s_Finale",
    "https://genshin-impact.fandom.com/wiki/Wanderer%27s_Troupe",
    "https://genshin-impact.fandom.com/wiki/Noblesse_Oblige",
]

// Get each weapon using DOM 
const weapons = [
    document.getElementById("amos"),
    document.getElementById("prototype"),
    document.getElementById("skyward"),
    document.getElementById("stringless")
]

// Get each artifact using DOM 
const artifacts = [
    document.getElementsByClassName("blizzard"),
    document.getElementsByClassName("gladiator"),
    document.getElementsByClassName("wanderer"),
    document.getElementsByClassName("noblesse")
]

// Loop through each weapon 
weapons.forEach((weapon, index) =>{

    // Get title and image
    let title = weapon.firstElementChild;
    let image = weapon.lastElementChild;
    
    // Create new a href link for title
    let link = document.createElement("a");
    link.style.color = "#faf4b7";
    link.href = weaponLinks[index];
    link.target = "_blank";
    link.innerHTML = title.innerHTML;
    title.innerHTML = "";
    title.appendChild(link);

    // Events: Color hovers for text
    title.addEventListener("mouseover", () =>{
        title.firstElementChild.style.color = "#BF953F";
    });
    title.addEventListener("mouseout", () =>{
        title.firstElementChild.style.color = "#faf4b7";
    });

    // Events: scale hovers for image
    image.addEventListener("mouseover", () =>{
        image.firstElementChild.style.transform = "scale(1.1)";
    })
    image.addEventListener("mouseout", () =>{
        image.firstElementChild.style.transform = "scale(1)";
    })
    // Events: open weapon link on click
    image.addEventListener("click", () =>{
        window.open(weaponLinks[index], "_blank");
    })

})