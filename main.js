let telephone = document.getElementById('phone');

phone.addEventListener('blur', function() {
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

emailInput.addEventListener('blur', function() {
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

const nameError = document.getElementById('nameError')
nameInput.addEventListener('blur', function() {
    if (nameInput.value.length < 3) {
        nameInput.style.borderColor = 'red';
        nameError.textContent = 'Veuillez renseigner un nom valide.';
    } else {
        nameInput.style.borderColor = '';
        nameError.textContent = '';
    }
});
const groupError = document.getElementById('groupError')
groupInput.addEventListener('blur', function() {
    if (groupInput.value.length < 3) {
        groupInput.style.borderColor = 'red';
        groupError.textContent = 'Veuillez renseigner un groupe valide.';
    } else {
        groupInput.style.borderColor = '';
        groupError.textContent = '';
    }
});
const bioError = document.getElementById('bioError')
bioInput.addEventListener('blur', function() {
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

prenomInput.addEventListener('blur', function() {
  if (prenomInput.value.length < 3) {
    prenomInput.style.borderColor = 'red';
    prenomError.textContent = 'Veuillez renseigner correctement';
  } else {
    prenomInput.style.borderColor = '';
    prenomError.textContent = '';
  }
});

 // fin de condtion


const contactList = document.querySelector('.globalContact');
const formInputs = document.querySelectorAll('.formInput input');

const createContact = () => {
  const contactData = {};

  for (const input of formInputs) {
    const inputId = input.id;
    const inputValue = input.value;

    contactData[inputId] = inputValue;
  }

  const contactElement = document.createElement('div');
  contactElement.classList.add('contact');

  for (const key in contactData) {
    const contactItem = document.createElement('p');
    contactItem.textContent = `${key}: ${contactData[key]}`;

    contactElement.appendChild(contactItem);
  }

  contactList.appendChild(contactElement);
};

const clearForm = () => {
  for (const input of formInputs) {
    input.value = '';
  }
};

// ... Code existant pour la validation des entrées et les vérifications de complétude

form = document.querySelector('.form');

// Ajoute un écouteur d'événement 'submit' au formulaire
form.addEventListener('submit', (event) => {
  // Vérifie si toutes les entrées sont valides
  if (!allInputsValid) {
    // Affiche un message d'erreur
    alert('Veuillez corriger les erreurs avant de soumettre le formulaire.');
    // Empêche la soumission du formulaire
    event.preventDefault();
  }
});
const createButton = document.querySelector('.btnCreat');
createButton.addEventListener('click', createContact, function(event){
  event.preventDefault()
});

const resetButton = document.querySelector('.btnRenit');
resetButton.addEventListener('click', clearForm);


const email = document.getElementById('Email');

// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire et le champ d'e-mail ainsi que l'élément span
// dans lequel on placera le message d'erreur

var form = document.getElementsByTagName("form")[0];
    email = document.getElementById("mail");
var error = document.querySelector(".error");

email.addEventListener(
  "input",
  function (event) {
    // Chaque fois que l'utilisateur saisit quelque chose
    // on vérifie la validité du champ e-mail.
    if (email.validity.valid) {
      // S'il y a un message d'erreur affiché et que le champ
      // est valide, on retire l'erreur
      error.innerHTML = ""; // On réinitialise le contenu
      error.className = "error"; // On réinitialise l'état visuel du message
    }
  },
  false,
);
// form.addEventListener(
//   "submit",
//   function (event) {
//     // Chaque fois que l'utilisateur tente d'envoyer les données
//     // on vérifie que le champ email est valide.
//     if (!email.validity.valid) {
//       // S'il est invalide, on affiche un message d'erreur personnalisé
//       error.innerHTML =
//         "J'attends une adresse e-mail correcte, mon cher&nbsp;!";
//       error.className = "error active";
//       // Et on empêche l'envoi des données du formulaire
//       event.preventDefault();
//     }
//   },
//   false,
// );