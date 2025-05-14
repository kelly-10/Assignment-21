// Get references to elements
const animateButton = document.getElementById("animateButton");
const animatedDiv = document.getElementById("animatedDiv");
const savePreferencesButton = document.getElementById("savePreferences");

// Function to trigger animation on the box
function triggerAnimation() {
    // Toggle the 'animate' class to trigger the CSS animation
    animatedDiv.classList.toggle("animate");
}

// Event listener to trigger animation when button is clicked
animateButton.addEventListener("click", triggerAnimation);

// Function to save user preferences to localStorage
function savePreferences() {
    const preferences = {
        backgroundColor: "#3498db",
        buttonText: "Click me again!",
    };

    // Save preferences to localStorage
    localStorage.setItem("userPreferences", JSON.stringify(preferences));

    // Apply the saved preferences
    applyPreferences();
}

// Function to apply user preferences from localStorage
function applyPreferences() {
    const savedPreferences = localStorage.getItem("userPreferences");

    if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences);
        
        // Change the background color of the body
        document.body.style.backgroundColor = preferences.backgroundColor;
        
        // Change button text
        animateButton.textContent = preferences.buttonText;
        
        // Add a class to indicate preferences are saved
        savePreferencesButton.classList.add("saved");
    }
}

// Event listener to save preferences when button is clicked
savePreferencesButton.addEventListener("click", savePreferences);

// Apply saved preferences when the page loads
window.onload = applyPreferences;
