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
let spanModifier = document.querySelector('.spanModifier')
const existNum = listContact.some((element) => element.phoneNum == phoneNum.value)
const existEmail = listContact.some((element) => element.email == email.value)
spanModifier.style.display = 'none'

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
let errorMessage = document.getElementById('emailError');
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
const prenomError = document.getElementById('prenomError');
userfirstname.addEventListener('blur', function () {
  validatePrenom();
});
function validePrenom(re) {
  re = /^[a-zA-Z]/;
  return re.test(userfirstname);
}
function validatePrenom() {
  if (validePrenom(userfirstname.value)) {
    userfirstname.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom doit commencer par une lettre';
    return false;
  }
  else if (userfirstname.value.length < 3) {
    userfirstname.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom doit avoir au moins 3 caractères';
    return false;
  } else if (userfirstname.value.length > 50) {
    userfirstname.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom ne doit pas avoir plus de 50 caractères';
    return false;
  }
  else if (/[0-9]/.test(userfirstname.value)) {
    userfirstname.style.borderColor = 'red';
    prenomError.textContent = 'Le prénom ne doit pas contenir des chiffres';
    return false;
  } else {
    userfirstname.style.borderColor = "";
    prenomError.textContent = "";
    return true;
  }
}
const nameError = document.getElementById('nameError');
username.addEventListener('blur', function () {
  validateName();
});
function valideName(re) {
  re = /^[a-zA-Z]/;
  return re.test(username);
}
function validateName() {
  if (valideName(username.value)) {
    username.style.borderColor = 'red';
    nameError.textContent = 'Le nom doit commencer par une lettre';
    return false;
  }
  else if (username.value.length < 3) {
    username.style.borderColor = 'red';
    nameError.textContent = 'Le nom doit avoir au moins 3 caractères';
    return false;
  } else if (username.value.length > 50) {
    username.style.borderColor = 'red';
    nameError.textContent = 'Le nom ne doit pas avoir plus de 50 caractères';
    return false;
  } else if (/[0-9]/.test(username)) {
    username.style.borderColor = 'red';
    nameError.textContent = 'Le nom ne doit contenir que des lettres';
    return false;
  }
  else {
    username.style.borderColor = '';
    nameError.textContent = '';
    return true;
  }
}
const phoneError = document.getElementById('phoneError');
phoneNum.addEventListener('blur', function () {
  validatePhone();
});
function validatePhone() {
  let NumFormat = /^(084|085|080|089|081|082|099|097|090)\d{0,7}$/;
  let RegexNum = NumFormat.test(phoneNum.value);

  if (!RegexNum) {
    phoneNum.style.borderColor = 'red';
    phoneError.textContent = 'Veuillez renseigner un numero correct.';

  } else if (phoneNum.value.length < 10 || phoneNum.value.length > 10) {
    phoneNum.style.borderColor = 'red';
    phoneError.textContent = 'Veuillez renseigner un numero de telephone qui possede 10 chiffres.';

  } else {
    phoneNum.style.borderColor = '';
    phoneError.textContent = '';

  }
  if (existNum) {
    phoneNum.style.borderColor = 'red';
    phoneError.textContent = 'ce numero exite déjà';

  }
  else {
    phoneNum.style.borderColor = '';
    phoneError.textContent = '';

  }
}

function validateEmail(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
let emailError = document.getElementById('emailError');
email.addEventListener('blur', function () {
  EmailValidation();
});
function EmailValidation() {
  if (validateEmail(email)) {
    email.style.borderColor = 'red';
    emailError.textContent = 'Veuillez renseigner une adresse email valide';
    return false;
  } else if (existEmail) {
    email.style.borderColor = 'red';
    emailError.textContent = 'cet email existe déjà';

  }
  else {
    email.style.borderColor = '';
    emailError.textContent = '';

  }
}
const groupError = document.getElementById('groupError');
function validateGroupe() {
  if (group.value == "") {
    group.style.borderColor = 'red';
    groupError.textContent = "ce champ ne peut pas etre Vide.";
    return false;
  } else {
    group.style.borderColor = "";
    groupError.textContent = "";
    return true;
  }
}
group.addEventListener('blur', function () {
  validateGroupe();
});
const bioError = document.getElementById('bioError');
function validateBio() {
  if (bio.value == "") {
    bio.style.borderColor = 'red';
    bioError.textContent = "ce champ ne peut pas etre Vide.";
    return false;
  } else {
    bio.style.borderColor = "";
    bioError.textContent = "";
    return true;
  }
}
bio.addEventListener('blur', function () {
  validateBio();
});
file.addEventListener("change", function () {

  if (file.files[0].size < 1000000) {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
      let imgEl = document.createElement("img")
      imgEl.setAttribute('id', 'photoForApp')
      imgEl.className = 'postionPhoto'
      inputDrop.append(imgEl)
      document.querySelector("#displayNon").style.display = 'none'
      document.querySelector("#photoForApp").src = reader.result
      tabPictureForm.pop()
      tabPictureForm.push(reader.result)
      document.querySelector("#photoForApp").src = tabPictureForm[0]
    })
    reader.readAsDataURL(this.files[0]);
  }
  else {
    alert("This file is too large!")
  }
})
btncreat.addEventListener("click", function (e) {
  e.preventDefault();
  
  verifyBeforetoCreat();

})
btnRenit.addEventListener('click', contactField)
function editInfo(i) {
  tabPictureForm[0] = listContact[i].picture
  userfirstname.value = listContact[i].prenom
  username.value = listContact[i].nom
  phoneNum.value = listContact[i].phone
  group.value = listContact[i].groupe
  email.value = listContact[i].email
  bio.value = listContact[i].bio

  btncreat.innerText = "Modifier"
  btnRenit.innerText = "Annuler"
}
function verifyBeforetoCreat() {

  if (((validateName && validatePrenom) && (validatePhone && EmailValidation)) && (validateGroupe && validateBio)) {
    listContact.push({
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
  let phForAp =document.querySelector("#photoForApp")
  if(phForAp){
    phForAp.remove();
  }
  document.querySelector("#displayNon").style.display = 'block'
}
function showContacts() {
  div.innerHTML = ''
  for (let i = 0; i < listContact.length; i++) {
    let contactdiv = document.createElement("div");
    contactdiv.classList = "contactIdentity";
    div.appendChild(contactdiv);
    let imageDiv = document.createElement('div')
    imageDiv.className = 'imgDiv';
    contactdiv.appendChild(imageDiv)
    let img = document.createElement("img");
    img.className = 'img_identity'
    imageDiv.appendChild(img)
    img.src = listContact[i].picture
    let divIdentity = document.createElement("div");
    divIdentity.classList = "infoContact";
    contactdiv.appendChild(divIdentity);
    let names = document.createElement("div");
    names.classList = "fullNameAndbtns";
    divIdentity.appendChild(names);
    let personalNames = document.createElement("div");
    personalNames.classList = "fullname";
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
      let confirmation = confirm("voulez-vous vraiment supprimer?");
      if (confirmation == true) {
        deleteContact(i)
      } else {
        return false;
      }
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
    about.appendChild(bioinfoP);
  }
}
function verifyEmailExist() {
  for (const data of listContact)
    if (data.email) {
      return true;
    }
}

function deleteContact(i) {
  console.log('delete called');
  listContact.splice(i, 1);
  console.log(listContact);
  showContacts();
}

btnRenit.addEventListener('click', contactField)

function editInfo(i) {
  index = i
  tabPictureForm[0] = listContact[i].picture
  userfirstname.value = listContact[i].prenom
  username.value = listContact[i].nom
  phoneNum.value = listContact[i].phone
  group.value = listContact[i].groupe
  email.value = listContact[i].email
  bio.value = listContact[i].bio
  btncreat.style.display = 'none'
  let spanModifier = document.querySelector('.spanModifier')
  let modifier = document.querySelector('.modifier')
  if (modifier){
    modifier.remove()
    let btn = document.querySelector('.btn')
    let btnMod = document.createElement('button')
    let labelRenit = document.createElement('label')
    btnMod.className = 'modifier'
    spanModifier.appendChild(btnMod)
    labelRenit.appendChild(btnRenit)
    btn.append(labelRenit)
    
    spanModifier.style.display = 'block'
    modifier.style.display = 'block'
    labelRenit.className = 'labelRenit'
    btnMod.innerText = "Modifier"
    btnRenit.innerText = "Annuler"

    btnMod.addEventListener('click', (index) => {

      listContact.splice(index, 0, {
        picture: tabPictureForm[0],
        prenom: userfirstname.value,
        nom: username.value,
        phone: phoneNum.value,
        groupe: group.value,
        email: email.value,
        bio: bio.value,
      });
      contactField();
      showContacts();
   })

  }
 
}



















