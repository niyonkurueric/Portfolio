const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");
let BlogEdity = document.querySelector("#blog_form");
let rightBlog = document.querySelector(".recommended-list");
let url = 'https://atlp-backend-brand.herokuapp.com/api/v1/aritcles/' + id
console.log(url);
const getblog = fetch(url)
    .then((res) => res.json())
    .then((message) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <form  id="blog_form" onsubmit="update(event)">
                    <h2 class="dashboard-title">Edit a blog</h2>
                    <div class="alert alert-danger">

                    </div>
                    <div class="alert alert-success">

                    </div>
                    <div class="form-group">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" id="Title" class="form-input" value=" ${message.title}"/>
                    </div>
                    <div class="form-group">
                        <label for="image">Blog Image</label>
                        <input type="file" id="image"  class="form-input" placeholder="Image URL"/>
                       
                   <img src="${message.image}" class="article-image" />
                    </div>
                    <div class="form-group">
                        <label for="body" class="form-label">Blog content</label>
                        <textarea name="" id="message"  cols="30" rows="10" class="form-input"required>${message.content}</textarea>
                    </div>
                    <button class="btn btn-primary" type="submit" id="submit">Update</button>
                </form>
                <div class="article-icon">
                    <div class="icon">
                        <span class="ti-heart icon-article"></span>
                        <span class="icon-number">${message.likes}</span>
                    </div>
                    <div class="icon">
                        
                    </div>
        `;
        BlogEdity.appendChild(div);
    })

function update(event) {
    event.preventDefault();
    var title = document.getElementById("Title").value;
    var image = document.getElementById("image").files[0];
    var content = document.getElementById("message").value;

    const formData = new FormData();
    formData.append('image', image);
    formData.append("title", title);
    formData.append("content", content);
    console.log(image)
    let check = fetch(url, {

            method: 'PATCH',
            headers: {
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI2N2FiOThmMzhjZjljZjJhZWQ1YiIsImlhdCI6MTY0NDkxNDYyMywiZXhwIjoxNjQ1NTE5NDIzfQ.3AMt6sCC5z6NEj--NIfnU7IDJG8vUjWJDhyakSFe-jY',
            },
            body: formData
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    if (check) {
        alert("update well");
        window.location.href = "index.html";
    } else {
        alert("not updated");
    }
}

function deleteone(event) {
    event.preventDefault();

    let check = fetch(url, {

            method: 'DELETE',
            headers: {
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI2N2FiOThmMzhjZjljZjJhZWQ1YiIsImlhdCI6MTY0NDkxNDYyMywiZXhwIjoxNjQ1NTE5NDIzfQ.3AMt6sCC5z6NEj--NIfnU7IDJG8vUjWJDhyakSFe-jY',
            },
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    if (check) {
        alert("delete well");
        window.location.href = "index.html";
    }
}