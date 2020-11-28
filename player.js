/* <div id="player-container">
<iframe id="video-player" src="" allowfullscreen  frameborder="0" ></iframe>
<div id="round"></div>
</div> */
function createPlayer(res) {
    var playerContainer = document.createElement('div');
    playerContainer.id = 'player-container';
    var videoPlayer = document.createElement('iframe');
    videoPlayer.id = 'video-player';
    videoPlayer.src = "https://player.vimeo.com/video/"+res.vimeoId;
    videoPlayer.allowFullscreen = true;
    videoPlayer.frameBorder = "0";
    playerContainer.appendChild(videoPlayer);
    document.body.appendChild(playerContainer);
};


var objId = window.location.search.split("=")[1];
var xhttp = new XMLHttpRequest();
xhttp.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/video/'+objId,true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if(xhttp.readyState > 3){
        window.document.getElementById('loader').style.display='block';
    }
    if(xhttp.readyState===4){
        window.document.getElementById('loader').style.display='none';
        var res = JSON.parse(xhttp.responseText);
        createPlayer(res);
    }
};
