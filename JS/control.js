class Mode {
    constructor(type, placeholder, border, url) {
        this.type = type;
        this.placeholder = placeholder;
        this.border = border;
        this.url = url;
    }

    setup() {
        srch.placeholder = this.placeholder;
        srch.style.borderBottom = this.border;
        document.title = this.placeholder;
    }
}

const srch = document.querySelector('#srch');
const srchurl = "https://www.google.com/search?q=";
const imgurl = "https://www.google.com/search?tbm=isch&q=";
const yturl = "https://www.youtube.com/results?search_query=";
let modeObj;

document.addEventListener('DOMContentLoaded',init);

function init() {
    modeObj = new Mode('web', 'Google', '4px #efd10e solid',srchurl);
    modeObj.setup();
}

function ytmode() {
    modeObj = new Mode('yt', 'YouTube', '4px #ed4343 solid',yturl);
    modeObj.setup();
}

function imgmode() {
    modeObj = new Mode('img', 'Google Images', '4px #43c1ef solid',imgurl);
    modeObj.setup();
}

function openurl(e) {
    let url = modeObj.url
    let input = srch.value.trim().replace("+", "%2B").replace("=", "%3D").replace("&", "%26").replace(" ", "+");
    url = url.concat(input);
    if (e.keyCode == 13 && input != "") {
        window.location = url;
    }
}
