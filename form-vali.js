//COMO VALIDAR FORMULARIO

//Capturar los imputs a validar con JS.
const form = document.querySelector("#form")
const userInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const password2Input = document.querySelector("#password2")

//Detener el comportamiento por default del boton Submit.
form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputsValidate();
})

//Crear una funcion que valide la informacion ingresada al input.
//La funcion debe capturar el value de cada input.
const inputsValidate = ()=> {
  const userName = userInput.value.trim()
  const userEmail = emailInput.value.trim()
  const userPassword = passwordInput.value.trim()
  const userPassword2 = password2Input.value.trim()
  
  //Si la informacion submiteada es "", entonces hacer algo(ej: mostrar por consola un mensaje de error), sino otra cosa(ej: mostrar por consola el 'input.value')
  !userName ? createErrorMsj(userInput, "Debe introducir un nombre") :
  dataIsCorrect(userInput)
  // !userEmail ? console.log("CAMPO VACIO") :
  // console.log(userEmail); 
  
  
  if(!userEmail) {
    console.log("CAMPO VACIO");
  }else if(isEmail(userEmail)) {
    createErrorMsj(emailInput, "Email incorrecto")
  }else {
    dataIsCorrect(emailInput)
  }


  // !userPassword ? console.log("CAMPO VACIO") :
  // console.log(userPassword); 
  // !userPassword2 ? console.log("CAMPO VACIO") :
  // console.log(userPassword2); 
}

const isEmail = (email)=> {
  console.log("isEmailFunction", /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
 }



//Crear 2 funciones, una para si hay un error, otra para si todo salio bien.
//input.parentElement, equivale al elemento padre (osea al div ".form-field" que envuelve ese campo/label) del input ingresado por parametro.
const createErrorMsj = (input, msg)=> {
  const formField = input.parentElement
  formField.innerHTML += `<p class="form-error">${msg}</p>`
}
const dataIsCorrect = (input)=> {
  input.classList.add("succefull")
  const formField = input.parentElement
   formField.innerHTML += `<span style="color: green">✔</span>`
}


