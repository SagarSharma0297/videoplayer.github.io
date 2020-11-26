var objId = window.location.search.split("=")[1];
var videoPlayer = window.document.getElementById('video-player');
var xhttp = new XMLHttpRequest();
xhttp.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/video/'+objId,true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if(xhttp.readyState===4){
        var res = JSON.parse(xhttp.responseText);
        videoPlayer.src = "https://player.vimeo.com/video/"+res.vimeoId;
    }
};