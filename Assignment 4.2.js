// Array of possible shot outcomes
const shotOutcomes = ["Swish!", "Rimmed Out", "Blocked"];

// Array of possible pass outcomes
const passOutcomes = ["Completed Pass", "Intercepted", "Out of Bounds"];

// Array of possible dribble outcomes
const dribbleOutcomes = ["Successful Dribble", "Turnover", "Travel"];

// Function to handle the shoot button click
function shoot() {
    // Generate a random index to select a shot outcome
    const randomIndex = Math.floor(Math.random() * shotOutcomes.length);
    const outcome = shotOutcomes[randomIndex];
    
    // Display the result
    document.getElementById("result").textContent = outcome;
}

// Function to handle the pass button click
function pass() {
    // Generate a random index to select a pass outcome
    const randomIndex = Math.floor(Math.random() * passOutcomes.length);
    const outcome = passOutcomes[randomIndex];
    
    // Display the result
    document.getElementById("result").textContent = outcome;
}

// Function to handle the dribble button click
function dribble() {
    // Simulate a dribble sequence with a for loop
    let dribbles = 0;
    for (let i = 0; i < 5; i++) {
        dribbles++;
        console.log("Dribble " + dribbles);
    }
    
    // Generate a random index to select a dribble outcome after the sequence
    const randomIndex = Math.floor(Math.random() * dribbleOutcomes.length);
    const outcome = dribbleOutcomes[randomIndex];
    
    // Display the result
    document.getElementById("result").textContent = outcome;
}

// Event listeners for the buttons
document.getElementById("shootButton").addEventListener("click", shoot);
document.getElementById("passButton").addEventListener("click", pass);
document.getElementById("dribbleButton").addEventListener("click", dribble);