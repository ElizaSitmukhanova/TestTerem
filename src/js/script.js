const firstBtn = document.querySelector('#firstBtn'),
    secondBtn = document.querySelector('#secondBtn'),
    firstBlock = document.querySelector('.col-12');

firstBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("hello");
    firstBlock.classList.toggle('hide')
});


const leftBlock = document.querySelector(".block_green"),
      middleBlock = document.querySelector(".block_dashed");
let isSwapped = false;

secondBtn.addEventListener("click", function () {
    if (!isSwapped) {
        leftBlock.parentNode.insertBefore(middleBlock, leftBlock);
        isSwapped = true;
    } else {
        leftBlock.parentNode.insertBefore(leftBlock, middleBlock);
        isSwapped = false;
    }
    console.log(1)
}); 

const modal = document.querySelector('.modal'),
btnClose = document.querySelector('.btn-close');

btnClose.addEventListener('click', () => {
    console.log(45)
    modal.classList.remove('show');
    modal.classList.add('hide');
})


 





