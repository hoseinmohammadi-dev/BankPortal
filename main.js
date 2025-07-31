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

let cNum = null
cardNumberInp.addEventListener("input", () => {
    let cNum = cardNumberInp.value.trim().slice(0, 16);
    let cNum2 = cardNumberInp.value.trim().slice(4, 8)
    let cNum3 = cardNumberInp.value.trim().slice(8, 12)
    let cNum4 = cardNumberInp.value.trim().slice(12, 16)

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
    document.querySelector("#yearsShow").textContent = e.target.value;
});

let isFlipped = false;
const cardContainer = document.querySelector(".card-container");
cvv.addEventListener("click", () => {
    if(!isFlipped){
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
    input.addEventListener('click',()=>{
        if(isFlipped){
        cardContainer.classList.toggle("flipped");
            isFlipped = false
        }
    })
});

