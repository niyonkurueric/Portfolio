const cards = document.querySelector(".cards");
fetch('https://atlp-backend-brand.herokuapp.com/api/v1/aritcles')
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
        document.getElementById('output').innerHTML = output
    })