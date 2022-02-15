const queryCollection = document.querySelector('.queries')
let a = localStorage.getItem("queries");
let split = JSON.parse(a);
let message = split.sort().reverse();

function display(doc) {
    let div = document.createElement('div');
    div.setAttribute('class', 'query');

    let h4 = document.createElement('h4');

    let p = document.createElement('p');

    let span = document.createElement('span');
    let times = document.createElement('span');
    let loca = document.createElement('span');

    h4.textContent = doc.Name;
    p.textContent = doc.Message;
    span.textContent = doc.Email;
    times.textContent = moment(doc.timestamp).fromNow();
    loca.textContent = (doc.city);

    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(span)
    div.appendChild(times)
    div.appendChild(loca)

    queryCollection.appendChild(div)
}

message.forEach(messages => {
    display(messages);
    console.log(messages);
})