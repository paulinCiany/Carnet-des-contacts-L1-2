// recuperation des elemnts
let form = document.querySelector(".formInput")
let div = document.querySelector(".globalContact")
let userfirstname = document.querySelector("#userfirstname")
let username = document.querySelector("#username")
let phoneNum = document.querySelector("#phone")
let group = document.querySelector("#group")
let email = document.querySelector("#Email")
let bio = document.querySelector(".inputBio")
let file = document.querySelector("#file")
let btncreat = document.querySelector(".btnCreat")
let btnRenit = document.querySelector(".btnRenit")
let inputDrop = document.querySelector(".inputDrop")
let pic
let tabPictureForm = []
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
  if (/[0-9]/.test(username.value)) {
    username.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom ne doit pas contenir de chiffres';
    return;
  }

  // Si toutes les conditions sont remplies, le prénom est valide
  username.style.borderColor = '';
  prenomError.textContent = '';
});

// add picture to the form
file.addEventListener("change", function () {

  if (file.files[0].size < 1000000) {  // 1MB = 1000000
    const reader = new FileReader()
    reader.addEventListener("load", () => { // <img id="photoForApp" class="postionPhoto" width="70px" height="70px">
      let imgEl = document.createElement("img")
      imgEl.setAttribute('id', 'photoForApp')
      imgEl.className = 'postionPhoto'
      inputDrop.append(imgEl)
      document.querySelector("#displayNon").remove();
      document.querySelector("#photoForApp").src = reader.result

      tabPictureForm.pop()
      tabPictureForm.push(reader.result)
    })
    reader.readAsDataURL(this.files[0]);
  }
  else {
    alert("This file is too large!")
  }
})
// fonctions for adding contacts and buttons

btncreat.addEventListener("click", function (e) {
  e.preventDefault();

  listContact.push({
    // picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
    picture: tabPictureForm[0],
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

  console.log(listContact);

  for (let i = 0; i < listContact.length; i++) {
    // const element = listContact[i];
    // let index = listContact.indexOf(element);
    console.log(i);
    let contactdiv = document.createElement("div");
    contactdiv.classList = "contactIdentity";
    div.appendChild(contactdiv);

    let imageDiv = document.createElement('div')
    imageDiv.className = 'imgDiv';
    contactdiv.appendChild(imageDiv)

    let img = document.createElement("img");
    img.className = 'img_identity'
    imageDiv.appendChild(img)
    // img.src = tabPictureForm[0]
    img.src = listContact[i].picture

    let divIdentity = document.createElement("div");
    divIdentity.classList = "infoContact";
    contactdiv.appendChild(divIdentity);

    let names = document.createElement("div");
    names.classList = "fullNameAndbtns";
    divIdentity.appendChild(names);

    let personalNames = document.createElement("div");
    personalNames.classList = "fullname";
    // personalNames.innerHTML = userfirstname.value + " " + username.value + "-" + group.value;
    personalNames.innerHTML = listContact[i].prenom + " " + listContact[i].nom + "-" + listContact[i].groupe;
    names.appendChild(personalNames);

    let btndeleteandmodify = document.createElement('div');
    btndeleteandmodify.classList = "btns";
    names.appendChild(btndeleteandmodify);

    let modifyButton = document.createElement("button");

    btndeleteandmodify.appendChild(modifyButton);

    let modifyImg = document.createElement("img")
    modifyImg.src = "image/Vector.svg";
    modifyButton.appendChild(modifyImg);
    modifyButton.addEventListener("click", function () {
      editInfo(i)
    });

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
    phone.innerHTML = listContact[i].phone;
    adress.appendChild(phone);

    let emailP = document.createElement("p");
    emailP.innerHTML = listContact[i].email;
    adress.appendChild(emailP);

    let about = document.createElement("div");
    about.classList = "bioInfo";
    divIdentity.appendChild(about);

    let bioinfoP = document.createElement("p");
    bioinfoP.innerHTML = listContact[i].bio
    // bioinfoP.innerHTML = bio.value;
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
  file.value = "";
  document.querySelector("#photoForApp").remove();

  let spanPhotoApp = document.createElement('span');
  spanPhotoApp.className = 'spanInfo';
  spanPhotoApp.setAttribute('id', 'displayNon');
  inputDrop.appendChild(spanPhotoApp)
  spanPhotoApp.innerHTML = 'deposez votre photo ici'
}

function deleteContact(i) {
  console.log('delete called');
  listContact.splice(i, 1);
  console.log(listContact);
  showContacts();
}
// renitializing the form
btnRenit.addEventListener('click', contactField)

// edit infolet inputDrop = document.querySelector(".inputDrop")

function editInfo(i) {
  tabPictureForm[0] = listContact[i].picture
  userfirstname.value = listContact[i].prenom
  username.value = listContact[i].nom
  phoneNum.value =  listContact[i].phone
  group.value =  listContact[i].groupe
  email.value =  listContact[i].email
  bio.value =   listContact[i].bio

  btncreat.innerText = "Modifier"
  btnRenit.innerText = "Annuler"
}



















