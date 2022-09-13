const card1 = document.querySelector('.component-1');
const card2 = document.querySelector('.component-2');
const submitBtn = document.querySelector(".submit-rating");

const ratingBtns = document.querySelectorAll('.rate-btn');
const score = document.querySelector('.score');

// press the button and make the card1 disappear
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    card1.classList.add ('hide');
    card2.classList.remove('hide');
});

// show the score in card2
ratingBtns.forEach((rate) => {
    rate.addEventListener("click", ()=>{
        console.log(rate.innerHTML);
        score.innerHTML = rate.innerHTML;
    })
})
