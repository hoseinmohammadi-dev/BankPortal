const cardNumberInp = document.querySelector(".card-number > input")
const cardShow = document.querySelectorAll(".card-box >div:nth-of-type(2) > input")
const cardHolder = document.querySelector(".card-holder > input")
const holder = document.querySelector("#holder")
const month = document.querySelector("#month")
const years = document.querySelector("#years")
const cvv = document.querySelector("#cvv")
const cvvshow = document.querySelector("#cvvShow")
// const cardBox = document.querySelector(".card-box")
// const cardBack = document.querySelector("#cardBoxBack")
// const submitBtn = document.querySelector("form > input[type='submit']")

cardNumberInp.addEventListener("input", () => {
    const cNum = cardNumberInp.value.slice(0, 16); 

    const parts = [
        cNum.slice(0, 4),
        cNum.slice(4, 8),
        cNum.slice(8, 12),
        cNum.slice(12, 16)
    ];

    cardShow.forEach((input, i) => {
        input.value = parts[i] || "";
    });

    if (cNum.length === 16) {
        cardHolder.focus();
    }
});

cardHolder.addEventListener("input", () => {
    holder.textContent = cardHolder.value
})


month.addEventListener('change', (e) => {
    document.querySelector("#monthShow").textContent = e.target.value
})
years.addEventListener('change', (e) => {
    document.querySelector("#yearsShow").textContent = e.target.value;
});

let isFlipped = false;
const cardContainer = document.querySelector(".card-container");
cvv.addEventListener("click", () => {
    if (!isFlipped) {
        cardContainer.classList.toggle("flipped");
        isFlipped = true
    }
});

cvv.addEventListener("input", (e) => {
    let x = cvv.value.slice(0, 4)
    cvvshow.textContent = x

})


const otherInp = document.querySelectorAll('.otherInp')

otherInp.forEach(input => {
    input.addEventListener('click', () => {
        if (isFlipped) {
            cardContainer.classList.toggle("flipped");
            isFlipped = false
        }
    })
});

