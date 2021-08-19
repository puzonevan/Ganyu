const combatInfo = [
    {
        name: "Liuthian Archery", 
        description: "<strong>Normal Attack:</strong> Perform up to 6 consecutive shots with a bow<br>\
                    <strong>Charged Attack:</strong>Perform a more precise Aimed Shotwith increased DMG. \
                    While aiming, an icy aura will accumulate on the arrowhead before the arrow is fired. \
                    Has different effects based on how long the energy has been charged:<br>\
                    <strong>Charge Level 1:</strong>Fires off an icy arrow that deals Cryo DMG<br>\
                    <strong>Charge Level 2:</strong>Fires off a Frostflake Arrow that deals Cryo DMG\
                    The Frostflake Arrow blooms after hitting its target, dealing AoE Cryo DMG<br>\
                    <strong>Plunging Attack</strong>Fires off a shower of arrows in mid-air before falling \
                    and striking the ground, dealing AoE DMG upon impact."
    },
    {
        name: "Trail of the Qilin", 
        description: "Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning all impurity and \
                    dealing AoE Cryo DMG.<br> <strong>Ice Lotus:</strong><br> 1. Continuously taunts surrounding\
                    opponents, attracting them to attack it.<br> 2. Endurance scales based on Ganyu's Max HP.<br>\
                    3. Blooms profusely when destroyed or once its duration ends, dealing AoE Cryo DMG."
    },
    {
        name: "Celestial Shower",
        description: "Coalesces atmospheric frost and snow to summon a Sacred Cryo Pearl that exorcises evil.<br>\
                    During its ability duration, the Sacred Cryo Pearl will continuously rain down shards of ice, \
                    striking opponents within an AoE and dealing Cryo DMG."
    },
    {
        name: "Undivided Heart",
        description: "After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their \
        resulting bloom effects is increased by 20% for 5s."
    },
    {
        name: "Harmony between Heaven and Earth",
        description: "Celestial Shower grants a 20% Cryo DMG Bonus to active members in the AoE."
    },
    {
        name: "Preserved for the Hunt",
        description: "Refunds 15% of the ores used when crafting Bow-type weapons."
    }
]

const combatInfoContainer = document.getElementById("combat-info");
const combatImageContainer = document.getElementById('abilities');
const combatImageChildren = [...combatImageContainer.children];

combatImageChildren.forEach((ability, index) => {
    console.log(ability);
    console.log(index);
    ability.addEventListener('click', function(e){
        combatInfoContainer.firstElementChild.innerHTML = combatInfo[index].name;
        combatInfoContainer.lastElementChild.innerHTML = combatInfo[index].description;
    });
});
