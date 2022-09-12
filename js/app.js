let card_content_1 = document.querySelector('.card__component-1');
let card_content_2 = document.querySelector('.card__component-2');
let ratingBtns = document.querySelector('.rate-btn');
let score = document.querySelector('.score');
let ratingSubmitContainerEl = document.querySelector('.rate-submit-container');
const submitBtn = document.querySelector(".submit-rating");

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    card_content_1.classList.add ('hide');
    card_content_2.classList.remove('hide');
});




// ratingSubmitContainerEl.addEventListener('click', (e) => {
//     const button = e.target;

//     if (!button) {
//         return;
//     }

//     if (button.matches('.rate-btn')){
//         ratingBtns.forEach((btn) => {
//             btn.dataset.rating = '';
//         });
//         button.dataset.rating = button.value;
//     }
// })






// submit_btn.addEventListener('click', onSubmit);
// ratingBtns.forEach( btn => {
//     btn.addEventListener('click', handleRatingBtnClick);
// })

// function onSubmit(){
//     card_content_1.classList.add('hide');
//     card_content_2.classList.remove('hide');
    // console.log('submit click');
// }

// function handleRatingBtnClick(event){
//     ratingBtns.forEach( btn => {
//         btn.classList.remove('active');
//     });
//     event.target.classList.add('active');
// }

// console.log(ratingBtns);