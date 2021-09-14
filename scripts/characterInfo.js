/**
 * Character Info 
 *      - Change the character object below based on the character 
 *      - Change the name, materials, builds, and lore 
 *      - Initializes the HTML based on the character
 */

const character = {

    name: "Ganyu", 

    materials: {
        stone: [
            [1, 9, 9, 6, 46],
            "Jade Sliver", 
            "Jade Fragment", 
            "Jade Chunk", 
            "Jade Gemstone", 
            "Hoarfrost Core",
        ],
        collectable: [
            [18, 30, 36, 168],
            [18, 66, 93, 3],
            "Whopperflower Nectar", 
            "Shimmering Nectar", 
            "Energy Nectar", 
            "Qingxin",
        ],
        book: [
            [9, 63, 114, 18],
            "Teaching of Diligence",
            "Guide to Diligence", 
            "Philosophies of Diligence", 
        ],
        boss: [
            18,
            "Shadow of the Warrior",
        ],
        crown: [
            3,
            "Crown of Insights",
        ]
    },

    builds: [
        {
            name: "Cryo DPS Build", 
            description: "This build focuses on empowering Ganyu's charged attack with the Wanderer's Troupe set \
                        since it amplifies both the initial hit and the AoE explosion from each shot.",
            weapons: [
                {
                    name: "Amos' Bow", 
                    substat: "Atk", 
                    description: "Increases Normal Attack and Aimed Shot DMG by 12/15/18/21/24%. Increases DMG from \
                                arrows shot by a further 8/10/12/14/16% for every 0.1s that the arrow is in flight, up \
                                to 0.5s. Stacks up to 5 times on each arrow.",
                    image: "./ganyu/weapons/Weapon_Amos_Bow.png"
                },
                {
                    name: "Prototype Crescent",
                    substat: "Atk", 
                    description: "Aimed Shot hits on weak points increase Movement SPD by 10% and ATK by 36/45/54/63/72% for 10s.",
                    image: "./ganyu/weapons/Weapon_Prototype_Crescent.png"
                }
            ],
            artifacts: [
                {
                    name: "Wanderer's Troupe", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Elemental Mastery +80 <br><br><strong>(4)</strong> Increases Charged Attack\
                                 DMG by 35% if the character uses a Catalyst or Bow.",
                    image: "./ganyu/weapons/Item_Troupe_Wanderers.png"
                },
                {
                    name: "Gladiator's Finale", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> ATK +18%",
                    image: "./ganyu/weapons/Item_Gladiators_Nostalgia.png"
                },
                {
                    name: "Blizzard Strayer", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Cryo DMG Bonus +15%",
                    image: "./ganyu/weapons/Item_Snowswept_Memory.png"
                }
            ]
        },
        {
            name: "Cryo Support Build", 
            description: "Ganyu is the premier Cryo sub DPS thanks to her high damage and uptime on her skills, even when not on the field.",
            weapons: [
                {
                    name: "Skyward Harp", 
                    substat: "Crit Rate", 
                    description: "Increases CRIT DMG by 20/25/30/35/40%. \
                                Hits have a 60/70/80/90/100% chance to inflict a small AoE attack, \
                                dealing 125% Physical ATK DMG. Can only occur once every 4/3.5/3/2.5/2s.",
                    image: "./ganyu/weapons/Weapon_Skyward_Harp.png"
                },
                {
                    name: "The Stringless",
                    substat: "Elemental Mastery", 
                    description: "Increases Elemental Skill and Elemental Burst DMG by 24/30/36/42/48%.",
                    image: "./ganyu/weapons/Weapon_The_Stringless.png"
                }
            ],
            artifacts: [
                {
                    name: "Noblesse Oblige", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Elemental Burst DMG +20%",
                    image: "./ganyu/weapons/Item_Royal_Flora.png"
                },
                {
                    name: "Blizzard Strayer", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Cryo DMG Bonus +15%",
                    image: "./ganyu/weapons/Item_Snowswept_Memory.png"
                },
                {
                    name: "Noblesse Oblige", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Elemental Burst DMG +20%<br><br>\
                    <strong>(4)</strong> Using an Elemental Burst increase all party members' \
                    ATK by 20% for 12s. This effect cannot stack.",
                    image: "./ganyu/weapons/Item_Royal_Flora.png"
                }
            ]
        }
    ],

    lore: [
        {
            name: "Introduction",
            story: "The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins.\
                    Graceful and quiet by nature, yet the gentle disposition of qilin sees not even the slightest conflict with \
                    even the most arduous of workloads. After all, Ganyu firmly believes that all the work she does is in honor of \
                    her contract with Rex Lapis, seeking the well-being of all living things within Liyue. . .",
        },
        {
            name: "Vision",
            story:  "Qilin are paragons of benevolence among the adepti, drinking only springwater and eating only whole grain.\
                    Flies they will not hurt, and a bruised reed they will not break. They do not travel in groups, and no trap will \
                    hold them. They are leisurely yet composed, active but reserved — a gentle and elegant race. Yet when a wicked \
                    beast from the sea arose and threatened the land  . . .",
        },
        {
            name: "The Flora of Yujing Terrace",
            story: "Handwritten notes detail the morphological features and behaviors of the plants in Yujing Terrace, with each \
                    beautiful stroke penned by Ganyu's own hand. The notes are succinct, comprehensive, and well-categorized, and \
                    even offer some insights that one would be hard-pressed to find elsewhere on the market. These include pointers \
                    on caring for Glaze Lilies . . . " 
        },
        {
            name: "Story 1",
            story: "Ganyu is not the secretary of any one leader in the Liyue Qixing but is instead the general secretary for the \
                    entire organization. Under her gentle exterior, Ganyu is as persevering as stone itself. This was something that \
                    Rex Lapis, the leader of the adepti, noticed very early on. Thus when the Liyue Qixing first emerged ages ago, \
                    Ganyu was their secretary. . ."
        },
        {
            name: "Story 2",
            story: "\"I work for the well-being of all living things in Liyue.\" Under almost all circumstances, Ganyu is a very \
                    trustworthy secretary. It is hard to imagine anyone outperforming her in the face of such an enormous workload, \
                    especially given her unique and penetrating insights into all of Liyue's matters. Nevertheless, her reliability \
                    can only be guaranteed under \"almost all circumstances.\" The more important the matter. . ."
        },
        {
            name: "Story 3",
            story: "How long is a thousand years? Long enough for the Glaze Lilies that once teemed throughout Dihua Marsh to be wiped \
                    out by floodwaters, and long enough for the thriving settlement that sprung up upon Guili Plains to come to ruin in \
                    war. How short is a thousand years? To Ganyu, it has felt shorter than the blink of an eye. Throughout a passage of \
                    time unimaginable to mortals. . ."
        },
        {
            name: "Story 4",
            story: "Outside the confines of her work, Ganyu very quickly shows how different she is from most other people. She has a \
                    habit of taking afternoon naps and has a shockingly accurate internal clock. When lunch hour arrives, no matter where \
                    she is, she will simply curl up into a ball and fall asleep on the spot. Even the raucous dancing of hilichurls will \
                    fail to wake her. . ."
        },
        {
            name: "Story 5",
            story: "Ganyu's qilin heritage is little-known in Liyue Harbor. Whenever she is asked by someone walking along Feiyun Slope as \
                    to the obvious protrusions in her hair, she says that they are ornamental heirlooms. \"If I told them the truth, they \
                    would distance themselves from me...\" Despite never having been on particularly close terms with Liyue's citizens in the \
                    first place. . . "
        }

    ]

}

// Change Character Title 
document.getElementById("character-name").innerHTML = character.name;


// Change Talent and Ascension Materials 
[...document.getElementsByClassName("stone")].forEach((stone, index) =>{
    stone.innerHTML = `${character.materials.stone[index + 1]} <strong>x${character.materials.stone[0][index]}</strong>`;
});

[...document.getElementsByClassName("collectable")].forEach((collect, index) =>{
    if(index < 3){
        collect.innerHTML = `${character.materials.collectable[index + 2]} <strong>x${character.materials.collectable[0][index]}</strong>`;
    }
    else{
        collect.innerHTML = `${character.materials.collectable[index - 1]} <strong>x${character.materials.collectable[1][index - 3]}</strong>`;
    }
});

[...document.getElementsByClassName("unique-collectable")].forEach((unique) =>{
    unique.innerHTML = `${character.materials.collectable[5]} <strong>x${character.materials.collectable[0][3]}</strong>`;
});

[...document.getElementsByClassName("book")].forEach((book, index) =>{
    book.innerHTML = `${character.materials.book[index + 1]} <strong>x${character.materials.book[0][index]}</strong>`;
});

[...document.getElementsByClassName("boss")].forEach((boss) =>{
    boss.innerHTML = `${character.materials.boss[1]} <strong>x${character.materials.boss[0]}</strong>`;
});

[...document.getElementsByClassName("crown")].forEach((crown) =>{
    crown.innerHTML = `${character.materials.crown[1]} <strong>x${character.materials.crown[0]}</strong>`
});


// Change Builds 
[...document.getElementsByClassName("build")].forEach((build, index) =>{
    
    // Get current build from index 
    let currentBuild = character.builds[index];

    // Initialize build name and description
    build.querySelector("#build-title").innerHTML = currentBuild.name;
    build.querySelector("#build-description").innerHTML = currentBuild.description;

    // Get the weapons div from the build 
    let weapons = [...build.querySelector(".weapons-artifacts").querySelector(".weapons").querySelectorAll(".weapon")];

    // Loop through each weapon div 
    weapons.forEach((weapon, index) =>{
        // Initialize weapon name, substat, description, image, 
        weapon.querySelector("#weapon-title").innerHTML = currentBuild.weapons[index].name;
        weapon.querySelector("#weapon-substat").innerHTML = currentBuild.weapons[index].substat;
        weapon.querySelector("#weapon-description").innerHTML = currentBuild.weapons[index].description;
        weapon.querySelector("#weapon-image").firstElementChild.src = currentBuild.weapons[index].image;
        weapon.querySelector("#weapon-image").firstElementChild.alt = currentBuild.weapons[index].name;
    });

    // Get the Artifacts div from the build 
    let artifacts = [...build.querySelector(".weapons-artifacts").querySelector(".artifacts").querySelectorAll(".artifact")];
    
    // Loop through each Artifact div
    artifacts.forEach((artifact, index) =>{
        // Initialize artifact name, substat, description, image, 
        artifact.querySelector("#artifact-title").innerHTML = currentBuild.artifacts[index].name;
        artifact.querySelector("#artifact-substats").innerHTML = currentBuild.artifacts[index].substat;
        artifact.querySelector("#artifact-description").innerHTML = currentBuild.artifacts[index].description;
        artifact.querySelector("#artifact-image").firstElementChild.src = currentBuild.artifacts[index].image;
        artifact.querySelector("#artifact-image").firstElementChild.alt = currentBuild.artifacts[index].name;
    }); 

});

// Change Lore
[...document.getElementById("background").children].forEach((story, index) =>{
    story.querySelector("#lore-title").innerHTML = character.lore[index].name;
    story.querySelector("#lore-story").innerHTML = character.lore[index].story;
});

[...document.getElementById("stories").children].forEach((story, index) =>{
    story.querySelector("#lore-title").innerHTML = character.lore[index + 3].name;
    story.querySelector("#lore-story").innerHTML = character.lore[index + 3].story;
})