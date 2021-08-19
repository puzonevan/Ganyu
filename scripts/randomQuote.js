quotes = [
    'If you lie on the grass, you can feel the heartbeat of the world.', 
    'To exist in the first place is a beautiful thing, and that\'s enough... isn\'t it?', 
    'With authority over a thousand comes responsibility to a thousand.', 
    'May Rex Lapis watch over you. May your dreams be peaceful and sweet.', 
    'Could we maybe... find a peaceful resolution instead...? Never mind, doesn\'t matter...',
    'I suppose this is the new way of life, then. I\'m not going to complain. I\'ll try to embrace it.',
    'Should the time come for battle, and should you need me, then I will give it every ounce of my strength.'
]

const randomQuote = document.getElementById('randomQuote');

const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

window.onload = getRandomQuote;