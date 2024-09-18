const toggleButton = document.querySelector('#toggleModal');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#closeModal');

const modalDesk = document.querySelector('#modalDesk');
const closeModal = document.querySelector('#closeDesk');
const toggleDesk = document.querySelector('#toggleModalDesk');

const email = document.querySelector('#email');
const emailD = document.querySelector('#emailD');
const errorMessage = document.querySelector('.error_message')
const errorMessageDesk = document.querySelector('.error_message_desk')



closeButton.addEventListener('click', toggleModal);
toggleButton.addEventListener('click', manejarEnvíos);
function manejarEnvíos() {
 
    let correo = email.value
    let slicedEmail = correo.split('@');
    if (correo.includes('@') && slicedEmail.length <= 2 && slicedEmail[1].includes('.')) {
        toggleModal()
        email.classList.remove('invalid')
    }else{
        errorMessage.textContent = ('Correo no valido')
        email.classList.add('invalid')
    }
}

function toggleModal() {
    modal.classList.toggle('hidden')
}


closeModal.addEventListener('click', toggleModalDesk);
toggleDesk.addEventListener('click', manejarEnvíosDesk);
function manejarEnvíosDesk() {
 
    let correoDesk = emailD.value
    let slicedEmailDesk = correoDesk.split('@');
    if (correoDesk.includes('@') && slicedEmailDesk.length <= 2 && slicedEmailDesk[1].includes('.')) {
        toggleModalDesk()
        emailD.classList.remove('invalid')
    }else{
        errorMessageDesk.textContent = ('Correo no valido')
        emailD.classList.add('invalid')
    }
}

function toggleModalDesk() {
    modalDesk.classList.toggle('hidden2')
}




