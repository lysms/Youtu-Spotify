async function sendRequest() {
    
    //Send differen requests for server.js to handle.
    let userPicked = document.getElementById("requests").value;

    console.log(userPicked);
    //Check which request to sent
    switch (userPicked) {
        case "":
            alert("Please select an option")
            break;
        case "cat":
            getCat();
            break;
        case "dog":
            getDog();
            break;
        case "bird":
            getBird();
            break;
    }
}


// get cat function
async function getCat(){
    fetch('/good-cat')
    .then(response => response.json())
    .then(data => {
        console.log("this is the ", data);
        // let presrc = "https://www.youtube.com/embed/";
        document.querySelector('#youtubeVideo').src = data.file;
    });
}

//get dog function
async function getDog(){
    fetch('/good-dog')
    .then(response => response.json())
    .then(data => {
        console.log("this is the ", data);
        document.querySelector('#youtubeVideo').src = data.file;
    });
}

async function getBird(){
    fetch('/good-bird')
    .then(response => response.json())
    .then(data => {
        console.log("this is the ", data);
        // let presrc = "https://www.youtube.com/embed/";
        document.querySelector('#youtubeVideo').src = data.file;
    });
}