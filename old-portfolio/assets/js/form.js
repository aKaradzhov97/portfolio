const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_H1B6Jk8vV"; // APP KEY HERE
const kinveyAppSecret = "485408ebcea04153ab838f845543dac7"; //APP SECRET HERE

// Creates the authentication header
function _makeAuth(type) {
    return type === 'basic'
        ?  'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
        :  'Kinvey ' + sessionStorage.getItem('authtoken');
}

// Creates request object to kinvey
function _makeRequest(method, module, endpoint, auth) {
    return {
        method,
        url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
        headers: {
            'Authorization': _makeAuth(auth)
        }
    };
}

// Function to return GET promise
function _get(module, endpoint, auth) {
    return $.ajax(_makeRequest('GET', module, endpoint, auth));
}

// Function to return POST promise
function _post(module, endpoint, auth, data) {
    let req = _makeRequest('POST', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

function login(userData) {
    return _post('user', 'login', 'basic', userData);
}

function sendMessage(data) {
    return _post('appdata', 'messages', 'kinvey', data);
}

$(document).ready(function() {
    $("form").submit(function(event) {
        let formData = {
            name: $("input[name=name]").val(),
            email: $("input[name=email]").val(),
            message: $("textarea#ccomment").val()
        };

        let data = {
            username: "guest",
            password: "guest"
        };

        login(data)
            .then((response) => {
                let token = response._kmd.authtoken;
                sessionStorage.setItem('authtoken', token);

                sendMessage(formData)
                    .then((response) => {
                        $("form").append("<div>" + "Thank you! Your message has been sent successfully." + "</div>")
                    })
                    .catch((err) => {
                        $("form").append("<div>" + "Uh-oh, something went wrong. Please try again." + "</div>")
                        console.log(err);
                    });
            })
            .catch((err) => {
                $("form").append("<div>" + "Uh-oh, something went wrong. Please try again." + "</div>")
                console.log("Login error: " + err);
            });

        $("form").trigger("reset");
        event.preventDefault()
    })
});