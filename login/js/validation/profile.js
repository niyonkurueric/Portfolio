var url;
document.querySelector("#image").addEventListener("change", function() {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {
        url = image.result;

    })
})
let profilek = document.querySelector(".profile-image__container");
let userInfo = JSON.parse(localStorage.getItem("userInfo"));

if (userInfo.image) {
    let div = document.createElement('div');
    div.innerHTML = `
<img src="${userInfo.image}" class="profile-image" alt="Image">`;
    profilek.appendChild(div);
} else {
    let div = document.createElement('div');
    div.innerHTML = `
    <img src="img/eric12.jpeg" class="profile-image" alt="Image">`;
    profilek.appendChild(div);
}
div.innerHTML = `
<img src="${userInfo.image}" class="profile-image" alt="Image">`;
profilek.appendChild(div);

function profile(event) {
    event.preventDefault();
    let FirstName = document.getElementById("Fname");
    let email = document.getElementById("email");
    let image = document.getElementById("image");
    let oldpassword = document.getElementById("oldpassword");
    let password = document.getElementById("password");
    let passwordconfirmation = document.getElementById("password_confirmation");
    let div = document.createElement('div');
    if (FirstName.value == "") {
        FirstName.style.border = "1px solid red";
    } else if (oldpassword.value == "") {
        oldpassword.style.border = "1px solid red";
    } else if (!checkPassword(password.value)) {
        password.style.border = "1px solid red";
        alert("enter new password combined with speciol character and smallchracter")
    } else if (passwordconfirmation.value == "") {
        passwordconfirmation.style.border = "1px solid red";
    } else if (!check_email(email.value)) {
        email.style.border = "1px solid red";
    } else {
        if (oldpassword.value === userInfo.password) {

            if (password.value === passwordconfirmation.value) {
                const obj = {
                    FirstName: FirstName.value,
                    oldpassword: oldpassword.value,
                    email: email.value,
                    passwordconfirmation: passwordconfirmation.value,
                    password: password.value,
                    image: url,
                    islogin: true
                }
                localStorage.setItem("userInfo", JSON.stringify(obj))
                let div = document.createElement('div');
                window.location.reload();

            } else {
                alert("new password is not equal to confirm PAssword");
            }
        } else {
            alert("check old password");
        }
    }
}

function check_email(email) {
    if (!email.match(/\S+@\S+\.\S+/)) {
        return false;
    }
    if (email.indexOf(' ') != -1 || email.indexOf('..') != -1) {
        return false;
    }
    return true;
}

function checkPassword(password) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}