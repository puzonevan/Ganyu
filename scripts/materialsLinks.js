/**
 * Material/Ascension Links
 *      - change the links below for different materials 
 */
const materialLinks = [
    "https://genshin-impact.fandom.com/wiki/Cryo_Regisvine#Rewards",
    "https://genshin-impact.fandom.com/wiki/Whopperflowers#Locations",
    "https://genshin-impact.fandom.com/wiki/Enter_the_Golden_House#Requirements_and_Rewards",
    "https://gamewith.net/genshin-impact/article/show/22434",
    "https://genshin-impact.fandom.com/wiki/Taishan_Mansion#Rewards",
    "https://genshin-impact.fandom.com/wiki/Crown_of_Insight#How_to_Obtain"
]

const talentsAscensionMaterials = [
    [...document.getElementsByClassName("stone")],
    [...document.getElementsByClassName("collectable")], 
    [...document.getElementsByClassName("boss")],
    [...document.getElementsByClassName("unique-collectable")],
    [...document.getElementsByClassName("book")],
    [...document.getElementsByClassName("crown")]
];

// Loop through each list of materials
talentsAscensionMaterials.forEach((materialList, index) =>{
    // Loop through each material in each list
    materialList.forEach((material) =>{

        // Get current text and reset 
        let text = material.innerHTML.split(" ");
        material.innerHTML = "";

        // Build new a href link
        let link = document.createElement("a");
        link.href = materialLinks[index];
        link.target="_blank";
        // Rebuild the original text
        for(let i = 0; i < text.length; i++){
            link.innerHTML += text[i] + " ";
        }

        // Readd to parent 
        material.appendChild(link);
    })
});

// Loop through each list of materials
talentsAscensionMaterials.forEach((materialList, index) =>{
    // Loop through each material in each list
    materialList.forEach((material) =>{

        // Get the image that goes along with the material
        const imageSibling = material.previousElementSibling;
        
        // Events: Mouse over and out 
        imageSibling.addEventListener("mouseover", () =>{
            imageSibling.style.transform = "scale(1.1)";
        });
        imageSibling.addEventListener("mouseout", () =>{
            imageSibling.style.transform = "scale(1)";
        });

        // Events: Click to new tab
        imageSibling.addEventListener("click", () =>{
            window.open(materialLinks[index], "_blank");
        })
    })
})

