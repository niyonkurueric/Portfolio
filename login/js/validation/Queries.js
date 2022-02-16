const queryCollection = document.querySelector('.queries')

function display(doc) {
    let div = document.createElement('div');
    div.setAttribute('class', 'query');

    let h4 = document.createElement('h4');

    let p = document.createElement('p');

    let span = document.createElement('span');
    let times = document.createElement('span');
    let loca = document.createElement('span');

    h4.textContent = doc.name;
    p.textContent = doc.message;
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
            'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI2N2FiOThmMzhjZjljZjJhZWQ1YiIsImlhdCI6MTY0NDkxNDYyMywiZXhwIjoxNjQ1NTE5NDIzfQ.3AMt6sCC5z6NEj--NIfnU7IDJG8vUjWJDhyakSFe-jY',
        },
    })
    .then((res) => res.json())
    .then((query) => {
        query.sort().reverse();
        query.forEach(messages => {

            display(messages);

        })
    })