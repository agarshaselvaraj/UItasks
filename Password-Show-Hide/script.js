const checkbox = document.getElementById("checkbox");
const password = document.getElementById("password-box");
checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
})