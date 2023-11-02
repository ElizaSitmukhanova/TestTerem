const firstBtn = document.querySelector('#firstBtn'),
    secondBtn = document.querySelector('#secondBtn'),
    firstBlock = document.querySelector('.col-12'),
    leftBlock = document.querySelector(".block_left"),
    modal = document.querySelector('.modal'),
    btnClose = document.querySelector('.btn-close');

const hideElem = (elem) => {
    elem.classList.toggle('hide');
};

const switchElem = () => {
    leftBlock.classList.toggle('block_order');
}

firstBtn.addEventListener('click', () => hideElem(firstBlock));
btnClose.addEventListener('click', () => hideElem(modal));
secondBtn.addEventListener("click", () => switchElem());


 





