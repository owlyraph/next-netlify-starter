// Create a heading element
const heading = document.createElement('h1');
heading.textContent = 'View PDF';

// Create a paragraph element
const description = document.createElement('p');
description.textContent = 'Please confirm that you are 18 or older to view the document.';

// Create a label element
const label = document.createElement('label');
label.setAttribute('for', 'birthdate');
label.textContent = 'Birthdate: ';

// Create an input element
const input = document.createElement('input');
input.setAttribute('type', 'date');
input.setAttribute('id', 'birthdate');

// Create a button element
const button = document.createElement('button');
button.setAttribute('type', 'button');
button.textContent = 'View PDF';

// Add event listener to the button
button.addEventListener('click', function() {
  const birthdate = input.value;
  const age = calculateAge(birthdate);
  if (age >= 18) {
    window.location.href = 'https://mega.nz/file/T6JDRALD#JuYvnkDzDixJfNaETKj1RVFQttvQq7Vg1w0gF4ASDlc';
  } else {
    alert('You must be 18 or older to view this document.');
  }
});

// Append elements to the body
document.body.appendChild(heading);
document.body.appendChild(description);
document.body.appendChild(label);
document.body.appendChild(input);
document.body.appendChild(button);

// Calculate age function
function calculateAge(birthdate) {
  const today = new Date();
  const birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  const monthDiff = today.getMonth() - birthdateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
    age--;
  }
  return age;
}
