const formLogin = document.querySelector('.trybewarts-login');
const formUser = document.querySelector('#evaluation-form');
const checkbox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const house = document.querySelector('#house');
const headerr = document.querySelector('#headerr');
const backgroundChanger = document.querySelector('.main')

function validateFormUser(event) {
  if (event.target.checked) btn.removeAttribute('disabled');
  else btn.setAttribute('disabled', true);
}

function countTextArea(event) {
  const limit = 500;
  const { textLength } = event.target;
  const rest = limit - textLength;
  counter.textContent = rest;
}

function checkNameFromInputs(inputs, type) {
  let inputsChecked = [];
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].name === type && inputs[index].checked) {
      inputsChecked.push(inputs[index].value);
    }
  }
  inputsChecked = inputsChecked.join(', ');
  return inputsChecked;
}

function checkColor(houseColor) {
  if (houseColor === 'Reactpuff'){
    formUser.style.backgroundColor = 'rgba(252, 218, 84, 0.5)';
    headerr.style.backgroundColor = 'rgb(252, 218, 84)';
  }
  
  if (houseColor === 'Corvinode') {
    formUser.style.backgroundColor = 'rgba(93, 139, 208, 0.5)';
    headerr.style.backgroundColor = 'rgb(93, 139, 208)';
  } 
  
  if (houseColor === 'Pytherina') {
    formUser.style.backgroundColor = 'rgba(43, 158, 88, 0.5)';
    headerr.style.backgroundColor = 'rgb(43, 158, 88)';
  } 
  
  if (houseColor === 'Gitnória'){
  headerr.style.backgroundColor = 'rgb(230, 83, 31)'; 
  formUser.style.backgroundColor = 'rgba(230, 83, 31, 0.5)';
  }
}


function changeBackground(houseColor) {
if (houseColor === 'Gitnória')  backgroundChanger.style.background = 'url("images/gryffindor.jpg")'
if (houseColor === 'Reactpuff')  backgroundChanger.style.background = 'url("images/huflepuff2.jpg")'
if (houseColor === 'Corvinode')  backgroundChanger.style.background = 'url("images/ravenclaw.jpg")'
if (houseColor === 'Pytherina')  backgroundChanger.style.background = 'url("images/slytherin.jpg")'
}

function getInformation(event) {
  event.preventDefault();
  const name = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  // const house = document.querySelector('#house');
  const inputs = document.querySelectorAll('input');
  const family = checkNameFromInputs(inputs, 'family');
  const materias = checkNameFromInputs(inputs, 'content');
  const rate = checkNameFromInputs(inputs, 'rate');
  checkColor(house.value);
  changeBackground(house.value);
  formUser.style.height = '50%'
  formUser.style.width = '20%'
  formUser.innerHTML = '';
  formUser.innerHTML += (`Nome: ${name.value} ${lastname.value} <br>`);
  formUser.innerHTML += (`Email: ${email.value} <br>`);
  formUser.innerHTML += (`Casa: ${house.value} <br>`);
  formUser.innerHTML += (`Família: ${family} <br>`);
  formUser.innerHTML += (`Matérias: ${materias} <br>`);
  formUser.innerHTML += (`Avaliação: ${rate} <br>`);
  formUser.innerHTML += (`Observações: ${textarea.value} <br>`);
}

function validateFormLogin(event) {
  const username = event.target[0];
  const password = event.target[1];
  if (username.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
    return;
  }
  alert('Olá, Tryber!');
}

window.onload = () => {
  counter.textContent = 500;
  btn.setAttribute('disabled', true);
  checkColor(house.value);
  formLogin.addEventListener('submit', validateFormLogin);
  formUser.addEventListener('submit', getInformation);
  checkbox.addEventListener('change', validateFormUser);
  textarea.addEventListener('input', countTextArea);
  house.addEventListener('change', (e) => checkColor(e.target.value));
};
