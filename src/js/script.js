const firstBtn = document.querySelector('#firstBtn'),
    secondBtn = document.querySelector('#secondBtn'),
    firstBlock = document.querySelector('.col-12'),
    leftBlock = document.querySelector(".block_left"),
    middleBlock = document.querySelector(".block_middle"),
    modal = document.querySelector('.modal'),
    btnClose = document.querySelector('.btn-close');

const hideElem = (elem) => {
    elem.classList.toggle('hide');
};

const switchElem = () => {
    const leftBlockOrder = leftBlock.style.order,
        middleBlockOrder = middleBlock.style.order;

    leftBlock.style.order = middleBlockOrder;
    middleBlock.style.order = leftBlockOrder;

}

firstBtn.addEventListener('click', () => hideElem(firstBlock));
btnClose.addEventListener('click', () => hideElem(modal));
secondBtn.addEventListener("click", () => switchElem());


 





