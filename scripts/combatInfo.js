const combatInfo = [
    {
        name: "Liuthian Archery", 
        description: "Normal Attack: Perform up to 6 consecutive shots with a bow<br><br>\
                    Charged Attack: Perform a more precise Aimed Shotwith increased DMG. \
                    While aiming, an icy aura will accumulate on the arrowhead before the arrow is fired. \
                    Has different effects based on how long the energy has been charged:<br>\
                    &emsp; &emsp; Charge Level 1: Fires off an icy arrow that deals <strong>Cryo DMG</strong><br>\
                    &emsp; &emsp; Charge Level 2: Fires off a Frostflake Arrow that deals <strong>Cryo DMG</strong><br>\
                    &emsp; &emsp; The Frostflake Arrow blooms after hitting its target, dealing <strong>AoE Cryo DMG</strong><br><br>\
                    Plunging Attack: Fires off a shower of arrows in mid-air before falling \
                    and striking the ground, dealing AoE DMG upon impact."
    },
    {
        name: "Trail of the Qilin", 
        description: "Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning all impurity and \
                    dealing AoE Cryo DMG.<br> Ice Lotus:<br> 1. Continuously taunts surrounding\
                    opponents, attracting them to attack it.<br> 2. Endurance scales based on Ganyu's Max HP.<br>\
                    3. Blooms profusely when destroyed or once its duration ends, dealing <strong>AoE Cryo DMG.<strong>"
    },
    {
        name: "Celestial Shower",
        description: "Coalesces atmospheric frost and snow to summon a Sacred Cryo Pearl that exorcises evil.<br>\
                    During its ability duration, the Sacred Cryo Pearl will continuously rain down shards of ice, \
                    striking opponents within an AoE and dealing <strong>Cryo DMG</strong>."
    },
    {
        name: "Undivided Heart",
        description: "After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their \
        resulting bloom effects is increased by <strong>20%</strong> for 5s."
    },
    {
        name: "Harmony between Heaven and Earth",
        description: "Celestial Shower grants a 20% <strong>Cryo DMG Bonus</strong> to active members in the AoE."
    },
    {
        name: "Preserved for the Hunt",
        description: "Refunds <strong>15%</strong> of the ores used when crafting Bow-type weapons."
    }
]

const combatInfoContainer = document.getElementById("combat-info");
const combatImageContainer = document.getElementById('abilities');
const combatImageChildren = [...combatImageContainer.children];
const combatBorder = document.getElementById('borderOpen');

combatImageChildren.forEach((ability, index) => {
    
    ability.addEventListener('mouseover', function(e) {
        ability.firstElementChild.style.transform = "scale(.9)";
    });
    ability.addEventListener('mouseout', function(e) {
        ability.firstElementChild.style.transform = "scale(1)";
    });

    ability.addEventListener('click', function(e){
        combatInfoContainer.firstElementChild.innerHTML = combatInfo[index].name;
        combatInfoContainer.lastElementChild.innerHTML = combatInfo[index].description;
        combatBorder.scrollIntoView({behavior: 'smooth'});
    });

});

