// Collect user information - name, email, & goal
// function collectUserInfo() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const goal = document.getElementById('goal').value;

// }

// Clear Fields Function
function clearFields() {
    const inputElements = document.querySelectorAll('input[type="text"]');
    inputElements.forEach(function(input) {
        input.value = '';
    });
}

// Print Fields Function
function printFields() {
    window.print();
};

// Generate Meal Plan - For this particular function, I had trouble trying to get the "td id" to read correctly.  I 
// searched online to get ideas of how to compile this together.  Admittedly, it is not exactly what I wanted
// but it does read the "td id", not only into the array, but also into the new window. 
function generateMealPlan() {
    // Initialize an empty object for the meal plan
    const mealPlan = {};
    // Select all input elements within the 'meals' table
    const userInputs = document.querySelectorAll('#meals input[type="text"]');
    // Iterate over each input to build the meal plan
    userInputs.forEach(function(input) {
        // Extract the day and mealType from the input's id
        const dayMatch = input.id.match(/^[a-zA-Z]+/);
        if (dayMatch) {
            const day = dayMatch[0];
            const mealType = input.id.substring(day.length);
            // Initialize the day object if it doesn't exist
            mealPlan[day] = mealPlan[day] || {};
            // Assign the input value to the corresponding meal type
            mealPlan[day][mealType] = input.value;
        }
    });

    // Log the meal plan to verify it's being created
    console.log('Meal Plan:', mealPlan);

    // Open a new window and write the meal plan content to it
    const mealPlanWindow = window.open('', 'Meal Plan', 'width=600,height=600');
    mealPlanWindow.document.write('<html><head><title>Meal Plan</title></head><body>');
    mealPlanWindow.document.write('<style>h1 {text-align: center; } </style>'); // Center the title across top of page
    
    //Get user information
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const goal = document.getElementById("goal").value;

    //Indiviudaized header
    mealPlanWindow.document.write('<h1>' + name + "'s Meal Plan</h1>");
    mealPlanWindow.document.write('<p>' + name + ' at ' + email +
        ', here is your personal meal plan. Your goal is to ' + goal + '.</p>')
    
    //Get daily user entries based on day and meal
    for (const day in mealPlan) {
        mealPlanWindow.document.write('<h2>' + day + '</h2>');
        for (const mealType in mealPlan[day]) {
            mealPlanWindow.document.write('<p>' + mealType + ': ' + mealPlan[day][mealType] + '</p>');
        }
    }
    mealPlanWindow.document.write('</body></html>');
    mealPlanWindow.document.close(); // Close the document for writing
}
//}

// Event Listeners
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearFields);

const printButton = document.getElementById('print');
printButton.addEventListener('click', printFields);

const generateButton = document.getElementById('button');
generateButton.addEventListener('click', generateMealPlan);



