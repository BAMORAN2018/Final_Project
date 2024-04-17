    
// Clear fields
function clearFields() {
    const inputElements = document.querySelectorAll('input[type="text"]');
    inputElements.forEach((input) => {
        input.value = ''; 
    });
};
