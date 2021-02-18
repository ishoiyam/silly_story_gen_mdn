// 1. complete variable and function definition
//
let customName = document.getElementById("customname");
let randomize = document.querySelector(".randomize");
let story = document.querySelector(".story");

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}


// 2. raw text strings
let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Dosneyland", "the White House"];
let insertZ = ["spontanesously combusted", "melted into a pubble on the side walk", "turned into a slug and crawled away"];


// 3. eventt listener and partial function definition
randomize.addEventListener("click", result);

function result() {
    
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":inertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":insertx:", xItem); 
    
    if (customName.value !== "") {
        let name = customName.value;
        newStory = newStory.replace("Bob", name);
    }
    
    if (document.getElementById("uk").checked) {
        let weight = Math.round(24.4286) + " stone";
        let temperature = Math.round(34.4444) + " centigrade";

        newStory = newStory.replace("300 pounds", weight);
        newStory = newStory.replace("94 farenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}




// pounds to stones -> 
// stone = pound / 14 
// f to c = 
//
// weight = Math.round(300 / 14) + " stones";
// tamperature = Math.round((97-32) / 1.8) + " centigrade";
