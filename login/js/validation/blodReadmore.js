const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");
console.log(id)
let Blog = document.querySelector(".article-details");
let rightBlog = document.querySelector(".recommended-list");
let url = 'http://localhost:3000/api/v1/aritcles/' + id
let urlcomment = 'http://localhost:3000/api/v1/comments/' + id
console.log(url);
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        Blog.innerHTML = `     
        <img src="${data.image}" class="article-image" />
            <div class="article-content">
                <h2 class="article-title">
                ${data.title}
                </h2>
                <p class="article-text">
                ${data.content}
                </p>
                <div class="article-icon">
                    <div class="icon">
                        <span class="ti-heart icon-article" onclick="like(event)"></span>
                        <span class="icon-number">${data.likes}</span>
                    </div>
                </div>
                <div class="article-commentss">
                   <h3 class="comments-title">Comments</h3>
                   
                    </div>
                    <form class="comment-form" onsubmit="commet(event)">
                        <div class="form-group">
                            <input type="text" id="name" class="form-input" placeholder="Names" />
                            <span class="text-invalid" id="Name_invalid">invalid Name</span>
                        </div>
                        <div class="form-group">
                            <textarea name="" id="message" class="form-input" placeholder="Leave a comment..."></textarea>
                            <span class="text-invalid" id="message">invalid Message</span>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">Post Comment</button>
                        </div>
                    </form>
                    <div class="article-comments">
                    <h3 class="comments-title">Comments</h3>
                     </div>
                </div>
            </div>
        `;
        display()
    })

let BlogComment = document.querySelector(".article-comments");

fetch('http://localhost:3000/api/v1/aritcles')
    .then((res) => res.json())
    .then((Articles) => {
        Articles;

        Articles.forEach((rightblog) => {

            let div = document.createElement('div');
            div.innerHTML = `
                <a href="#" class="recommended-article">
                            <img src="${rightblog.image}" class="recommended-image" />
                            <div class="recommended-title">
                            ${rightblog.title}
                            </div>
                        </a>
                `;
            rightBlog.appendChild(div);

        });
    })



function commet(event) {
    event.preventDefault();
    var fname = document.getElementById("name");
    var message = document.getElementById("message");

    var Name_invalid = document.getElementById("Name_invalid");
    var Message_invalid = document.getElementById("message");
    let check = fetch(urlcomment, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain,*/*',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: fname.value,
                comment: message.value,

            }),
        })
        .then((res) => res.json())

    .then((data) => console.log(data));
    console.log(message.value);
    if (check) {
        alert("Created Well");
    } else {
        alert("not created");
    }



}

function display() {

    let BlogComment = document.querySelector(".article-comments");
    fetch(urlcomment)
        .then((res) => res.json())
        .then((query) => {
            const comments = query.data;
            comments.forEach(message => {
                let div = document.createElement('div');
                div.innerHTML = `
            <div class="comments">
                <div class="comment">
                    <h3 class="comment-name">${message.name}</h3>
                    <div class="comment-body">
                    ${message.comment}
                    </div>
                </div> `;
                BlogComment.appendChild(div)
            })

        })
}