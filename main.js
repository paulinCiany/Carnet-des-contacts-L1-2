
let telephone = document.getElementById('phone');

phone.addEventListener('blur', function () {
  let numerophone = this.value;
  if (!validatePhone(numerophone)) {
    this.style.borderColor = 'red';
    phoneError.textContent = 'Veuillez renseigner un numero correct.';
  } else if (phone.value.length < 10 || phone.value.length > 10) {
    phone.style.borderColor = 'red';
    phoneError.textContent = 'Veuillez renseigner un numero de telephone qui possede 10 chiffre.';
  } else {
    phone.style.borderColor = '';
    phoneError.textContent = '';
  }
});

// Function to validate phone number format
function validatePhone(phone) {
  let format = /^(084|085|080|089|081|082|099|097|090)/;
  return format.test(phone);
}

// Function to validate email format
function validateEmail(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('error');

emailInput.addEventListener('blur', function () {
  if (!validateEmail(this.value)) {
    this.style.borderColor = 'red';
    emailError.textContent = 'Veuillez renseigner une adresse email valide';
  } else {
    this.style.borderColor = '';
    emailError.textContent = '';
  }
});

// Validate other input fields (name, group, bio)
let nameInput = document.getElementById('nom');
let groupInput = document.getElementById('group');
let bioInput = document.getElementById('bio');

const nameError = document.getElementById('nameError');
nameInput.addEventListener('blur', function () {
  // Condition 1: Le prénom doit commencer par une lettre
  if (!/^[a-zA-Z]/.test(nameInput.value)) {
    nameInput.style.borderColor = 'red';
    nameError.textContent = 'Le prénom doit commencer par une lettre';
    return;
  }

  // Condition 2: Le prénom doit avoir au moins 3 caractères
  if (nameInput.value.length < 3) {
    nameInput.style.borderColor = 'red';
    nameError.textContent = 'Le prénom doit avoir au moins 3 caractères';
    return;
  }

  // Condition 3: Le prénom ne doit pas contenir de chiffres
  if (/[0-9]/.test(nameInput.value)) {
    nameInput.style.borderColor = 'red';
    nameError.textContent = 'Le prénom ne doit pas contenir de chiffres';
    return;
  }

  // Si toutes les conditions sont remplies, le prénom est valide
  nameInput.style.borderColor = '';
  nameError.textContent = '';
});

const groupError = document.getElementById('groupError')
groupInput.addEventListener('blur', function () {
  if (groupInput.value.length < 3) {
    groupInput.style.borderColor = 'red';
    groupError.textContent = 'Veuillez renseigner un groupe valide.';
  } else {
    groupInput.style.borderColor = '';
    groupError.textContent = '';
  }
});
const bioError = document.getElementById('bioError')
bioInput.addEventListener('blur', function () {
  if (bioInput.value.length < 10) {
    bioInput.style.borderColor = 'red';
    bioError.textContent = 'Veuillez renseigner une bio d\'au moins 10 caractères.';
  } else {
    bioInput.style.borderColor = '';
    bioError.textContent = '';
  }
});

const prenomInput = document.getElementById('prenomInput');
const prenomError = document.getElementById('prenomError');

prenomInput.addEventListener('blur', function () {
  // Condition 1: Le prénom doit commencer par une lettre
  if (!/^[a-zA-Z]/.test(prenomInput.value)) {
    prenomInput.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom doit commencer par une lettre';
    return; // Arrête l'exécution de la fonction si la condition n'est pas remplie
  }

  // Condition 2: Le prénom doit avoir au moins 3 caractères
  if (prenomInput.value.length < 3) {
    prenomInput.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom doit avoir au moins 3 caractères';
    return;
  }

  // Condition 3: Le prénom ne doit pas contenir de chiffres
  if (/[0-9]/.test(prenomInput.value)) {
    prenomInput.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom ne doit pas contenir de chiffres';
    return;
  }

  // Si toutes les conditions sont remplies, le prénom est valide
  prenomInput.style.borderColor = '';
  prenomError.textContent = '';
});

// fin de condtion