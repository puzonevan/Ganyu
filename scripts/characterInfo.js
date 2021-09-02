
const ganyu = {
    name: "Ganyu", 

    materials: {
        stone: {
            small: "Jade Sliver", 
            medium: "Jade Fragment", 
            large: "Jade Chunk", 
            extraLarge: "Jade Gemstone", 
            unique: "Hoarfrost Core"
        },
        collectable: {
            small: "Whopperflower Nectar", 
            medium: "Shimmering Nectar", 
            large: "Energy Nectar", 
            unique: "Qingxin"
        },
        book: {
            small: "Teaching of Diligence",
            medium: "Guide to Diligence", 
            large: "Philosophies of Diligence", 
        },
        boss: {
            unique: "Shadow of the Warrior"
        },
        crown: {
            unique: "Crown of Insight"
        }
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
                    image: "../ganyu/weapons/Weapon_Amos'_Bow_2nd.png"
                },
                {
                    name: "Prototype Crescent",
                    substat: "Atk", 
                    description: "Aimed Shot hits on weak points increase Movement SPD by 10% and ATK by 36/45/54/63/72% for 10s.",
                    image: "../ganyu/weapons/Weapon_Prototype_Crescent.png"
                }
            ],
            artifacts: [
                {
                    name: "Wanderer's Troupe", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Elemental Mastery +80 <br><br><strong>(4)</strong> Increases Charged Attack\
                                 DMG by 35% if the character uses a Catalyst or Bow.",
                    image: "../ganyu/weapons/Item_Troupe_Wanderers.png"
                },
                {
                    name: "Gladiator's Finale", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> ATK +18%",
                    image: "../ganyu/weapons/Item_Gladiator's_Nostalgia.png"
                },
                {
                    name: "Blizzard Strayer", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Cryo DMG Bonus +15%",
                    image: "../ganyu/weapons/Item_Snowswept_Memory.png"
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
                    image: "../ganyu/weapons/Weapon_Skyward_Harp.png"
                },
                {
                    name: "The Stringless",
                    substat: "Elemental Mastery", 
                    description: "Increases Elemental Skill and Elemental Burst DMG by 24/30/36/42/48%.",
                    image: "../ganyu/weapons/Weapon_The_Stringless.png"
                }
            ],
            artifacts: [
                {
                    name: "Noblesse Oblige", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Elemental Burst DMG +20%",
                    image: "../ganyu/weapons/Item_Royal_Flora.png"
                },
                {
                    name: "Blizzard Strayer", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Cryo DMG Bonus +15%",
                    image: "../ganyu/weapons/Item_Snowswept_Memory.png"
                },
                {
                    name: "Blizzard Strayer", 
                    substat: "Atk% / Cryo DMG / Crit DMG",
                    description: "<strong>(2)</strong> Elemental Burst DMG +20%<br><br>\
                    <strong>(4)</strong> Using an Elemental Burst increase all party members' \
                    ATK by 20% for 12s. This effect cannot stack.",
                    image: "../ganyu/weapons/Item_Royal_Flora.png"
                }
            ]
        }
    ],


    
}