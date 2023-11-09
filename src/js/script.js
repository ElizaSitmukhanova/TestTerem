const firstBtn = document.querySelector('#firstBtn'),
    secondBtn = document.querySelector('#secondBtn'),
    firstBlock = document.querySelector('.col-12'),
    leftBlock = document.querySelector(".block_middle"),
    modal = document.querySelector('.modal'),
    btnClose = document.querySelector('.btn-close');

const toggleElem = (elem, classActive) => {
    elem.classList.toggle(classActive);
};

firstBtn.addEventListener('click', () => toggleElem(firstBlock, 'hide'));
btnClose.addEventListener('click', () => toggleElem(modal, 'hide'));
secondBtn.addEventListener("click", () => toggleElem(leftBlock, 'order'));


 





