// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('first-name-input');

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } 
    else {
        document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value}, for your message!`;
        nameInput.value = ''; // Clear the input field after submission
    }
}

function displayResults() {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const birthdate = document.getElementById('birthdate-input').value;
    const message = document.getElementById('text-input').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";

    document.getElementById('result-name').innerText = name;
    document.getElementById('result-email').innerText = email;
    document.getElementById('result-birthdate').innerText = birthdate;
    document.getElementById('result-gender').innerText = gender;
    document.getElementById('result-message').innerText = message;

    document.getElementById('resultDisplay').classList.remove('hidden');
  }