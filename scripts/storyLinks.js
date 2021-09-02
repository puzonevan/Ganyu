const storyLinks = [
    "https://genshin-impact.fandom.com/wiki/Ganyu#Profile",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Vision",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#The_Flora_of_Yujing_Terrace",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_1",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_2",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_3",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_4",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_5",
]

const background = [...document.getElementById("background").children];
const stories = [...document.getElementById("stories").children];

background.forEach((card, index) =>{
    
    let button = card.lastElementChild;
    
    button.addEventListener("click", () =>{
        window.open(storyLinks[index], "_blank");
    });

});

stories.forEach((card, index) =>{
    
    let button = card.lastElementChild; 

    button.addEventListener("click", () =>{
        window.open(storyLinks[index + 3], "_blank");
    });

})