const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");
console.log(id)
let Blog = document.querySelector(".article-details");
let rightBlog = document.querySelector(".recommended-list");
let url = 'https://atlp-backend-brand.herokuapp.com/api/v1/aritcles/' + id
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
                <div class="article-comments">
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
                </div>
            </div>
            
        `;
        let BlogComment = document.querySelector(".article-comments");
        let div = document.createElement('div');

        data.comments.forEach((comment) => {
            let BlogComment = document.querySelector(".article-comments");
            let div = document.createElement('div');

            div.innerHTML = `
<div class="comments">
    <div class="comment">
        <h3 class="comment-name">${comment.Name}</h3>
        <div class="comment-body">
        ${comment.message}
        </div>
    </div> `;
            BlogComment.appendChild(div);
        });

    })
fetch('https://atlp-backend-brand.herokuapp.com/api/v1/aritcles')
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