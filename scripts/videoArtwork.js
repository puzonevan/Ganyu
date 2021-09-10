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

const artwork = [...document.getElementsByClassName("lore-container")];

artwork.forEach((container, index) =>{
    container.firstElementChild.src = links[index];
    container.firstElementChild.alt = "artwork";
})