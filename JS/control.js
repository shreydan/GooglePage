var web = false;
var img = false;
var yt = false;

function ytmode() {

    yt = true;
    img = false;
    web = false;
    document.getElementsByName('searchbox')[0].placeholder = 'YouTube';
    document.getElementById("srch").style.borderBottom = "4px #ed4343 solid";
    document.title = "YouTube";

}

function imgmode() {

    img = true;
    yt = false;
    web = false;
    document.getElementsByName('searchbox')[0].placeholder = 'Google Images';
    document.getElementById('srch').style.borderBottom = "4px #43c1ef solid";
    document.title = "Google Images";

}

function webmode() {

    web = true;
    img = false;
    yt = false;
    document.getElementsByName('searchbox')[0].placeholder = 'Google';
    document.getElementById("srch").style.borderBottom = "4px #efd10e solid";
    document.title = "Google";

}

function openurl(e) {

    var url;
    var input = document.getElementById("srch").value;
    input = input.trim();

    input = input.replace("+", "%2B");

    input = input.replace(" ", "+");
    input = input.replace("=", "%3D");
    input = input.replace("&", "%26");


    var srchurl = "https://www.google.com/search?q=";
    var imgurl = "https://www.google.com/search?tbm=isch&q=";
    var yturl = "https://www.youtube.com/results?search_query=";

    if (img == true) {
        url = imgurl.concat(input);
    } else if (yt == true) {
        url = yturl.concat(input);
    } else if (web == true) {
        url = srchurl.concat(input);
    } else {
        url = srchurl.concat(input);
    }

    if (e.keyCode == 13 && input != "") {
        window.location = url;
    }

}
