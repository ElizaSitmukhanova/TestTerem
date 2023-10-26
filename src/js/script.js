const firstBtn = document.querySelector('#firstBtn'),
    secondBtn = document.querySelector('#secondBtn'),
    firstBlock = document.querySelector('.col-12'),
    leftBlock = document.querySelector(".block_left"),
    middleBlock = document.querySelector(".block_middle"),
    modal = document.querySelector('.modal'),
    btnClose = document.querySelector('.btn-close');

let blocks = [ leftBlock, middleBlock ];

const hideElem = (elem) => {
    elem.classList.toggle('hide');
};

const switchElem = () => {
    blocks.forEach(item => {
        if (item.classList.contains('block_left')) {
            item.classList.remove('block_left');
            item.classList.add('block_middle');
        } else {
            item.classList.remove('block_middle');
            item.classList.add('block_left');
        } 
    })
}

firstBtn.addEventListener('click',() => hideElem(firstBlock));
btnClose.addEventListener('click', () => hideElem(modal));
secondBtn.addEventListener("click", () => switchElem());


 





