const toggleButton = document.querySelector('#toggleModal');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#closeModal');

const modalDesk = document.querySelector('#modalDesk');
const closeModal = document.querySelector('#closeDesk');
const toggleDesk = document.querySelector('#toggleModalDesk');

const email = document.querySelector('#email');
const emailD = document.querySelector('#emailD');
const errorMessage = document.querySelector('.error_message')

toggleButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);


emailValidation.addEventListener('input', validacion)
toggleDesk.addEventListener('click', toggleModalDesk);
closeModal.addEventListener('click', toggleModalDesk);


function toggleModal() {
    modal.classList.toggle('hidden')
}

function toggleModalDesk() {
    modalDesk.classList.toggle('hidden2')
}

function validacion() {
    let ev = email.value;
    let slicedEmail = ev.split('@');

    if (ev.includes('@') && slicedEmail.length <= 2 && slicedEmail[1].includes('.')){
        email.textContent.remove('este correo no es valido')
    } else{
        email.textContent.add('este correo no es valido')
    }
}



