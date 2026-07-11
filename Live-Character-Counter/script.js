

const inputbox = document.getElementById("input-box")
const charcnt = document.getElementById("char-cnt")
const charfin = document.getElementById("char-fin")

inputbox.addEventListener("input", () => {
    const length = inputbox.value.length;
    charcnt.textContent = `Characters:${length}`;
    charfin.textContent = `${length}/200`;
    if (length > 180) {
        charcnt.style.color = "red";
    }
    else {
        charcnt.style.color = "black";
    }
})

