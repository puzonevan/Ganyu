const imageVideo = document.getElementsByClassName('image-video-break');


for(var i = 0; i < imageVideo.length; i++){

    let container = imageVideo.item(i);
    
    container.addEventListener('mouseover', (e) =>{
        container.firstElementChild.style.display="none";
        container.lastElementChild.style.display="block";
    })
    
    container.addEventListener('mouseout', (e) =>{
        container.firstElementChild.style.display="block";
        container.lastElementChild.style.display="none";
    })
}