// let overlay = document.querySelector('.overlay');
// let modal = document.querySelector('.modal');
// let cross = document.querySelector('.modal__cross');

// window.addEventListener('click', closeModal);
// ////браузер отслеживает клики по всему окну и 
// //когда он попадает на заданные элементы,функция срабатывает


// let timer = setTimeout(openModal, 1200);

// function openModal() {
//     overlay.classList.add('show-modal');
//     modal.classList.add('modal-animation') //animation

// }

// function closeModal(e) {
//     if (e.target === overlay || e.target === cross) {
//         overlay.classList.remove('show-modal');
//         modal.classList.remove('modal-animation') //animation
//     }
// }


let overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.modal'),
    cross = document.querySelector('.modal__cross'),
    policy_overlay = document.querySelector('#overlay-policy'),
    policy_cross = document.querySelector('#modal-cross'),
    modal_overlay = document.querySelector('#modal-policy');

if ($(overlay).length) {

    let timer = setTimeout(openModal, 2800);

    function openModal() {
        overlay.classList.add('show-modal');
        modal.classList.add('modal-animation');
    }

    function addSecondModal(policy) {
        policy.forEach(elem => {
            elem.addEventListener('click', () => {
                policy_overlay.classList.add('show-modal');
                modal_overlay.classList.add('modal-animation');
            });
        });
    }
    addSecondModal(document.querySelectorAll('.policy__link'));


    window.addEventListener('click', closeModal);

    function closeModal(e) {
        if (e.target === overlay || e.target === cross) {
            overlay.classList.remove('show-modal');
            modal.classList.remove('modal-animation') //animation

        } else if (e.target === policy_overlay || e.target === policy_cross) {
            policy_overlay.classList.remove('show-modal');
            modal_overlay.classList.remove('modal-animation') //animation

        }
    }
}