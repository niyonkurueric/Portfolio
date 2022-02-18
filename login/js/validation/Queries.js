const queryCollection = document.querySelector('.queries')
const gettoken = JSON.parse(localStorage.getItem("userInfo"));
const token = gettoken.token;
console.log(token)

function display(doc) {
    let div = document.createElement('div');
    div.setAttribute('class', 'query');

    let h4 = document.createElement('h4');

    let p = document.createElement('p');

    let span = document.createElement('span');
    let times = document.createElement('span');
    let loca = document.createElement('span');
    h4.textContent = doc.name;
    p.textContent = doc.content;
    span.textContent = doc.email;
    times.textContent = moment(doc.created_on).fromNow();
    loca.textContent = (doc.city);

    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(span)
    div.appendChild(times)
    div.appendChild(loca)

    queryCollection.appendChild(div)
}

let queries = fetch('https://atlp-backend-brand.herokuapp.com/api/v1/queries', {
        method: 'GET',
        headers: {
            'authorization': token,
        },
    })
    .then((res) => res.json())
    .then((query) => {
        query.reverse()
        query.forEach(messages => {
            display(messages);

        })
    })