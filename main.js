// recuperation des elemnts
let form = document.querySelector(".formInput")
let div = document.querySelector(".globalContact")
let userfirstname = document.querySelector("#userfirstname")
let username = document.querySelector("#username")
let phoneNum = document.querySelector("#phone")
let group = document.querySelector("#group")
let email = document.querySelector("#Email")
let bio = document.querySelector(".inputBio")
let btncreat = document.querySelector(".btnCreat")
let listContact = []




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
// let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('error');

email.addEventListener('blur', function () {
  if (!validateEmail(this.value)) {
    this.style.borderColor = 'red';
    emailError.textContent = 'Veuillez renseigner une adresse email valide';
  } else {
    this.style.borderColor = '';
    emailError.textContent = '';
  }
});

// Validate other input fields (name, group, bio)
// let nameInput = document.getElementById('nom');
let groupInput = document.getElementById('group');
let bioInput = document.getElementById('bio');

const nameError = document.getElementById('nameError');
userfirstname.addEventListener('blur', function () {
  // Condition 1: Le prénom doit commencer par une lettre
  if (!/^[a-zA-Z]/.test(userfirstname.value)) {
    userfirstname.style.borderColor = 'red';
    nameError.textContent = 'Le prénom doit commencer par une lettre';
    return;
  }

  // Condition 2: Le prénom doit avoir au moins 3 caractères
  if (userfirstname.value.length < 3) {
    userfirstname.style.borderColor = 'red';
    nameError.textContent = 'Le prénom doit avoir au moins 3 caractères';
    return;
  }

  // Condition 3: Le prénom ne doit pas contenir de chiffres
  if (/[0-9]/.test(userfirstname.value)) {
    userfirstname.style.borderColor = 'red';
    nameError.textContent = 'Le prénom ne doit pas contenir de chiffres';
    return;
  }

  // Si toutes les conditions sont remplies, le prénom est valide
  userfirstname.style.borderColor = '';
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

// const username = document.getElementById('prenomInput');
const prenomError = document.getElementById('prenomError');

username.addEventListener('blur', function () {
  // Condition 1: Le prénom doit commencer par une lettre
  if (!/^[a-zA-Z]/.test(username.value)) {
  username.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom doit commencer par une lettre';
    return; // Arrête l'exécution de la fonction si la condition n'est pas remplie
  }

  // Condition 2: Le prénom doit avoir au moins 3 caractères
  if (username.value.length < 3) {
    username.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom doit avoir au moins 3 caractères';
    return;
  }

  // Condition 3: Le prénom ne doit pas contenir de chiffres
  if (/[0-9]/.test(prenomInput.value)) {
    username.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom ne doit pas contenir de chiffres';
    return;
  }

  // Si toutes les conditions sont remplies, le prénom est valide
  username.style.borderColor = '';
  prenomError.textContent = '';
});

// fin de condtion

// fonctions for adding contacts and buttons

btncreat.addEventListener("click", function (e) {
    e.preventDefault();

    listContact.push({
        prenom: userfirstname.value,
        nom: username.value,
        phone: phoneNum.value,
        groupe: group.value,
        email: email.value,
        bio: bio.value,


    });
    showContacts();
    contactField();

})


function showContacts() {
    div.innerHTML = ''
    for (let i = 0; i < listContact.length; i++) {
        // const element = listContact[i];
        // let index = listContact.indexOf(element);
        console.log(i);
        let contactdiv = document.createElement("div");
        contactdiv.classList = "contactIdentity";
        div.appendChild(contactdiv);

        let img = document.createElement("div");
        img.classList = "img_identity";
        img.scr = "image/home-02-480x480.jpg";
        img.alt = "ma photo";
        contactdiv.appendChild(img);

        let divIdentity = document.createElement("div");
        divIdentity.classList = "infoContact";
        contactdiv.appendChild(divIdentity);

        let names = document.createElement("div");
        names.classList = "fullNameAndbtns";
        divIdentity.appendChild(names);

        let personalNames = document.createElement("div");
        personalNames.classList = "fullname";
        personalNames.innerHTML = userfirstname.value + " " + username.value + "-" + group.value;
        names.appendChild(personalNames);

        let btndeleteandmodify = document.createElement('div');
        btndeleteandmodify.classList = "btns";
        names.appendChild(btndeleteandmodify);

        let modifyButton = document.createElement("button");

        btndeleteandmodify.appendChild(modifyButton);

        let modifyImg = document.createElement("img")
        modifyImg.src = "image/Vector.svg";
        modifyButton.appendChild(modifyImg);

        let deleteButton = document.createElement("button");


        btndeleteandmodify.appendChild(deleteButton);

        let deleteImg = document.createElement("img");
        deleteImg.src = "image/Vector (1).svg";
        deleteButton.addEventListener("click", function () {
            deleteContact(i)
        });
        deleteButton.appendChild(deleteImg);

        let adress = document.createElement("div");
        adress.classList = "telNum"
        divIdentity.appendChild(adress);

        let phone = document.createElement("p");
        phone.innerHTML = phoneNum.value;
        adress.appendChild(phone);

        let emailP = document.createElement("p");
        emailP.innerHTML = email.value;
        adress.appendChild(emailP);

        let about = document.createElement("div");
        about.classList = "bioInfo";
        divIdentity.appendChild(about);

        let bioinfoP = document.createElement("p");
        bioinfoP.innerHTML = bio.value;
        about.appendChild(bioinfoP);
    }
}

function contactField() {
    userfirstname.value = "";
    username.value = "";
    phoneNum.value = "";
    group.value = "";
    email.value = "";
    bio.value = "";
}
function deleteContact(i) {
    console.log('delete called');
    listContact.splice(i, 1);
    console.log(listContact);
    showContacts();
}
















