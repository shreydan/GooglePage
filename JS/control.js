var web = false;
var img = false;
var yt = false;
                
function ytmode() {
         
    yt = true;
    img = false;
    web = false;
    document.getElementsByName('searchbox')[0].placeholder='YouTube';
                    
}

function imgmode() {
                    
    img = true;
    yt = false; 
    web = false; 
    document.getElementsByName('searchbox')[0].placeholder='Google Images';
                            
}
                
function webmode() {
                    
    web = true;
    img = false;
    yt = false;
    document.getElementsByName('searchbox')[0].placeholder='Google';
                    
}
                
function openurl(e) {
                        
    var url;
    var input = document.getElementById("srch").value;
    input = input.trim()
    input = input.replace(" ","+")
    var srchurl = "https://www.google.com/search?q=";
    var imgurl = "https://www.google.com/search?tbm=isch&q="
    var yturl = "https://www.youtube.com/results?search_query="
                                            
    if (img == true) {
        url = imgurl.concat(input);
    }
                        
    else if (yt == true) {
        url = yturl.concat(input);
    }

    else if (web == true) {
        url = srchurl.concat(input);
    }
                        
     else {
        url = srchurl.concat(input);
    }
                        
    if (e.keyCode == 13 && input != "") { 
        window.location = url;
    }
             
}
