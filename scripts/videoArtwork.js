/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './ganyu/images/CloudsH.jpg',
    './ganyu/images/Fan-1H.jpg',
    './ganyu/images/Fan-2H.jpg',
    './ganyu/images/Fan-3H.jpg',
    './ganyu/images/GanyuLanterns.jpg',
    './ganyu/images/GlazeLilliesH.png',
    './ganyu/images/SmileH.png',
    './ganyu/images/ganyustairs.png',
    './ganyu/images/Fan-4H.png',
]

// Get the container for the art from DOM 
const artwork = [...document.getElementsByClassName("lore-container")];

// Loop through each image container and set the image
artwork.forEach((container, index) =>{
    container.firstElementChild.src = links[index];
    container.firstElementChild.alt = "artwork";
})