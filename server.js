const express = require('express');
const fetch = require('node-fetch');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

let urlcat = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCYPrd7A27nLhQONcCIfFTaA&maxResults=50&key=AIzaSyDjNfdI_kf7kqeF0oicB5J9slwlOuq56Kw`

let urldog = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCgCCM94_xVRPMR20fzT0AkA&maxResults=50&key=AIzaSyDjNfdI_kf7kqeF0oicB5J9slwlOuq56Kw`

let urlbird = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCE6MnKGeeyk3TsjJ_qn0WWw&maxResults=50&key=AIzaSyDjNfdI_kf7kqeF0oicB5J9slwlOuq56Kw`

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/public'));


app.get('/good-cat', async (req,res) => {
    let response = await fetch(urlcat);
    let json = await response.json();
    let videos = json.items;

    let videoId = null;
    if (!Array.isArray(videos)) {
        videoId = 'dQw4w9WgXcQ';
    } else {
        let randomNum = Math.floor(Math.random()*(videos.length + 1));
        let randomVid = videos[randomNum];
        videoId = randomVid.id.videoId
    }
    
    let link = 'https://www.youtube.com/embed/' + videoId; 
    console.log("VIDEOID:", link);
    res.json({
        file: link
    });
})

app.get('/good-dog', async (req,res) => {
    let response = await fetch(urldog);
    let json = await response.json();
    let videos = json.items;

    let videoId = null;
    if (!Array.isArray(videos)) {
        videoId = 'dQw4w9WgXcQ';
    } else {
        let randomNum = Math.floor(Math.random()*(videos.length + 1));
        let randomVid = videos[randomNum];
        videoId = randomVid.id.videoId
    }

    //res.send(json);
    
    let link = 'https://www.youtube.com/embed/' + videoId; 
    console.log("VIDEOID:", link);
    res.json({
        file: link
    });
})

app.get('/good-bird', async (req,res) => {
    let response = await fetch(urlbird);
    let json = await response.json();
    let videos = json.items;

    let videoId = null;
    if (!Array.isArray(videos)) {
        videoId = 'dQw4w9WgXcQ';
    } else {
        let randomNum = Math.floor(Math.random()*(videos.length + 1));
        let randomVid = videos[randomNum];
        videoId = randomVid.id.videoId
    }
    
    let link = 'https://www.youtube.com/embed/' + videoId; 
    console.log("VIDEOID:", link);
    res.json({
        file: link
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})