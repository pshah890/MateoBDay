var active = [
    'Go Ice Skating',
    'Drunk Just Dance',
    'Workout together',
    'Couples Yoga',
    'Walk along the river trail',
    'Walk around Rittenhouse',
    'Mini-golfing',
    'Rock-climbing',
    'Top Golf',
    'Trampoline Park/ Skyzone',
    'Play frisbee',
    'Learn to Skateboard',
    'Go Hiking',
    'Kayaking',
    
];

var home = [
    'Watch a Romantic Comedy',
    'Watch a favorite movie again',
    'Play Minecraft',
    'Play Bloons TD',
    'Cook a fancy dinner together',
    'Make cupcakes',
    'Write a song',
    'Watch funny YouTube videos',
    'Take Quizzes Online',
    'Puzzles'
];

var romantic = [
    'Go on a picnic',
    'Candlelit Dinner',
    'Go to the Movies',
    'Face-Masks',
    'Pick a holiday and pretend it\'s that day',
    'Massages',
    'Childhood Movies',
    'Assume new identities and try to pick each other up',
    'Role-play',
    'Star Gaze',
    'Breakfast in Bed',
    'Hammock Park',
    'Spruce Street Harbor Park',
    'Take A Ferry Ride'

];

var fun = [
    'Go to an Arcade',
    'Go to the Aquarium',
    'Go Bowling',
    'Go-karting',
    'Get Game Tickets',
    'Go shopping and try on new outfits',
    'Go to a museum',
    'Go to the beach',
    'Pub Crawl',
    'Zoo',
    'Pretend to be food critics',
    'Look through very old newspapers',
    'Laser Tag',
    'Crash a Party',
    'Throw a Dinner Party',
    'Go to a Farmer\'s Market',
    'Go to Kings',
    'Dinner Date',


];


function activeIdea() {
    var randomNumber = Math.floor(Math.random() * (active.length));
    document.getElementById('mainDisplay').innerHTML = active[randomNumber];
}

function homeIdea() {
    var randomNumber = Math.floor(Math.random() * (home.length));
    document.getElementById('mainDisplay').innerHTML = home[randomNumber];
}

function romanticIdea() {
    var randomNumber = Math.floor(Math.random() * (romantic.length));
    document.getElementById('mainDisplay').innerHTML = romantic[randomNumber];
}

function funIdea() {
    var randomNumber = Math.floor(Math.random() * (fun.length));
    document.getElementById('mainDisplay').innerHTML = fun[randomNumber];
}
