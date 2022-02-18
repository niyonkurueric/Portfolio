const gettoken = JSON.parse(localStorage.getItem("userInfo"));
const token = gettoken.token;
console.log(token)
var url;
document.querySelector("#image").addEventListener("change", function() {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {
        url = image.result;

    })
});
console.log();

function ceatBlog(event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var image = document.getElementById("image").files[0];
    var message = document.getElementById("body").value;
    console.log(image)
    var image_invalid = document.getElementById("image_invalid");

    var title_invalid = document.getElementById("title_invalid");
    var blog_invalid = document.getElementById("body");

    if (title.value == "" && message.value == "" && image.value == "") {
        title.style.border = "solid 1px red";
        image.style.border = "solid 1px red";
        message.style.border = "solid 1px red";

        image_invalid.style.display = "block";
        blog_invalid.style.display = "block";
        title_invalid.style.display = "block";

    } else {
        const formData = new FormData();
        formData.append('image', image);
        formData.append("title", title);
        formData.append("content", message);
        let check = fetch('https://atlp-backend-brand.herokuapp.com/api/v1/aritcles', {
            method: 'POST',
            headers: {
                'authorization': token,
            },
            body: formData
        })

        .then((res) => res.json())

        .then((data) => console.log(data));
        if (check) {
            alert("created well");
            window.location.href = "index.html";
        } else {
            alert("not created");
        }

    }
}