// Track the user's choices (A, B, C, or D for each question)
let choices = [];

// Get all choice buttons
let buttons = document.querySelectorAll(".choice-btn");

// Add click listener to every choice button
buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Get which question we're on and what was picked
        let currentQ = this.closest(".questions");
        let choice = this.getAttribute("data-choice");

        // Store the choice
        choices.push(choice);

        // Hide current question
        currentQ.classList.add("hidden");

        // Figure out what to show next
        let nextQNum = choices.length + 1;

        if (nextQNum <= 4) {
            // Show next question
            document.getElementById("q" + nextQNum).classList.remove("hidden");
        } else {
            // All questions answered — show the result!
            showResult();
        }
    });
});

function showResult() {
    // Match the 4 choices to a player
    let resultId;

    // Anthony Edwards: C, D, C, B
    if (choices[0] === "C" && choices[1] === "D" && choices[2] === "C" && choices[3] === "B") {
        resultId = "result-ant";
    }
    // LeBron James: B, A, B, C
    else if (choices[0] === "B" && choices[1] === "A" && choices[2] === "B" && choices[3] === "C") {
        resultId = "result-lebron";
    }
    // Stephen Curry: A, B, D, A
    else if (choices[0] === "A" && choices[1] === "B" && choices[2] === "D" && choices[3] === "A") {
        resultId = "result-curry";
    }
    // Victor Wembanyama: D, C, A, D
    else {
        resultId = "result-wemby";
    }

    // Show the matching result
    document.getElementById(resultId).classList.remove("hidden");
}



