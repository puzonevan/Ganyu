/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './ganyu/images/CloudsH.webp',
    './ganyu/images/Fan-1H.webp',
    './ganyu/images/Fan-2H.webp',
    './ganyu/images/Fan-3H.webp',
    './ganyu/images/GanyuLanterns.webp',
    './ganyu/images/GlazeLilliesH.webp',
    './ganyu/images/SmileH.webp',
    './ganyu/images/ganyustairs.webp',
    './ganyu/images/Fan-4H.webp',
]

// Get the container for the art from DOM 
const artwork = [...document.getElementsByClassName("lore-container")];

// Loop through each image container and set the image
artwork.forEach((container, index) =>{
    container.firstElementChild.src = links[index];
    container.firstElementChild.alt = "artwork";
})