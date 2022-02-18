const cards = document.querySelector(".cards");
const gettoken = JSON.parse(localStorage.getItem("userInfo"));
const token = gettoken.token;
console.log(token)

function myFunction() {
    fetch('https://atlp-backend-brand.herokuapp.com/api/v1/aritcles', {
            method: 'GET',
            headers: {
                'authorization': token,
            },
        })
        .then((res) => res.json())
        .then((data) => {
            data.sort().reverse()
            data.forEach(function(post) {
                let div = document.createElement('div');
                div.innerHTML = `<div class="card">
         <a class="card-img" href="edit_blog.html?id=${post._id}"><img src="${post.image}" alt="Image"></a>
         <div class="card-details">
         <a href="edit_blog.html?id=${post._id}" class="card-title">${post.title}</a> 
         <div class="card-icons"> <div class="icon">
         <i class="ti-heart"></i><span class="icon-number">${post.likes}</span></div><div class="icon">
          </div>`;

                cards.appendChild(div);
            });
            if (data) {
                showPage()
            }

        })

}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".articles").style.display = "block";
}