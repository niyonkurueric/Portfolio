var obj = {};

function Contact(event) {
    event.preventDefault();

    var fname = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var email_invalid = document.getElementById("email_invalid");

    var Name_invalid = document.getElementById("Name_invalid");
    var Message_invalid = document.getElementById("message");

    if (fname.value == "" && message.value == "") {
        fname.style.border = "solid 1px red";

        message.style.border = "solid 1px red";

        Name_invalid.style.display = "block";
        Message_invalid.style.display = "block";

    } else if (!check_email(email.value)) {
        email.style.border = "solid 1px red";
        email_invalid.style.display = "block";

    } else {
        let check = fetch('https://atlp-backend-brand.herokuapp.com/api/v1/queries', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain,*/*',
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: fname.value,
                    email: email.value,
                    message: message.value,
                    timestamp: Date.now(),
                }),
            })
            .then((res) => res.json())

        .then((data) => console.log(data));
        if (check) {
            alert("Send Messege Well");
            window.location.href = "index.html";
        } else {
            alert("not Send Messege");
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

function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const locationAPI = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=13f33db6084847fcae6bf192cff57501`
    fetch(locationAPI)
        .then(response => response.json())
        .then(data => {
            var resultlocation = data.results[0].formatted;
            body = {...body, city: resultlocation }

        })
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

} else {
    console.log("Geolocation is not supported by this browser.");
}