document.addEventListener("DOMContentLoaded", function() {
    const facts = [
        "There are over 500 different breeds of chickens worldwide.",
        "Chickens were one of the first animals domesticated by humans, around 8,000 years ago.",
        "Chickens can recognize over 100 different faces of their species and even remember human faces.",
        "Chickens communicate with more than 24 vocalizations, each with a specific meaning.",
        "Chickens have a highly organized social structure known as the 'pecking order'.",
        "An average hen lays about 250 to 300 eggs per year.",
        "Chickens are tetrachromatic, meaning they can see in four color channels, including ultraviolet light.",
        "Chickens can run up to 9 miles per hour when necessary.",
        "The oldest chicken on record lived to the age of 16!"
    ];

    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = randomFact;
});
