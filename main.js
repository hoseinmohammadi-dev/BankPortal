const cardNumberInp = document.querySelector(".card-number > input")
const cardHolder = document.querySelector(".card-holder > input")
const month = document.querySelector("#month")
const years = document.querySelector("#years")
const cvv = document.querySelector("#cvv")
const submitBtn = document.querySelector("form > input[type='submit']")
const cardShow = document.querySelectorAll(".card-box >div:nth-of-type(2) > input")
const holder = document.querySelector("#holder")
const cardBox = document.querySelector(".card-box")
const cardBack = document.querySelector("#cardBoxBack")
const cvvshow = document.querySelector("#cvvShow")
let cNum = []
cardNumberInp.addEventListener("input", () => {
    let cNum = cardNumberInp.value.trim().slice(0, 16);
    let cNum2 = cardNumberInp.value.slice(4, 8)
    let cNum3 = cardNumberInp.value.slice(8, 12)
    let cNum4 = cardNumberInp.value.slice(12, 16)
    console.log(cNum);

    console.log(cNum.length);

    if (cNum.length <= 4) {
        cardShow[0].value = cNum

    } else if (cNum.length <= 8) {
        cardShow[1].value = cNum2
    } else if (cNum.length <= 12) {
        cardShow[2].value = cNum3
    } else if (cNum.length <= 16) {
        cardShow[3].value = cNum4
    }

    if (cNum.length == 16) {
        cardHolder.focus()
    }
});

cardHolder.addEventListener("input", () => {
    holder.textContent = cardHolder.value
})


month.addEventListener('change', (e) => {
    document.querySelector("#monthShow").textContent = e.target.value
})
years.addEventListener('change', (e) => {
    let val = e.target.value;
    document.querySelector("#yearsShow").textContent = val;
});
const cardContainer = document.querySelector(".card-container");

cvv.addEventListener("focus", () => {
    cardContainer.classList.toggle("flipped");
});

cvv.addEventListener("input" , (e)=>{
    let x = cvv.value.slice(0,4)
    cvvshow.innerHTML = x

})

