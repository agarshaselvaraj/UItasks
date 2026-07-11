const countelement = document.getElementById("count")
console.log(countelement.textContent);
let count = 0;
const plusbtn = document.getElementById("plusbtn");
const minusbtn = document.getElementById("minusbtn");
const resetbtn = document.getElementById("resetbtn");
plusbtn.addEventListener("click", () => {
    console.log("plus clicked");
    count++;
    countelement.textContent = count;
})
minusbtn.addEventListener("click", () => {
    console.log("minus clicked");
    count--;
    countelement.textContent = count;
})
resetbtn.addEventListener("click", () => {
    count = 0;
    console.log("reset clicked");
    countelement.textContent = count;
})