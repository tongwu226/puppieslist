console.log("background.js")
let winArr = []

var urlDog = chrome.runtime.getURL("./dog.wav");
var urlCat = chrome.runtime.getURL("./cat.wav");
var bark = new Pizzicato.Sound(urlDog, function() {
});

var meow = new Pizzicato.Sound(urlCat, function() {
});

chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse){
        try {

        }catch(e){
            console.log(e)
        }
        createPage(req);
        console.log(req)
    }
)

function createPage(words){
    _width = Math.floor(1280 * Math.random())
    _height = Math.floor(840 * Math.random())
    _left = Math.floor(640 * Math.random())
    _top = Math.floor(420 * Math.random())

    if(words == "eat"){
        var _link = createLink()
        var _winConfig = {
            url:_link,
            top:_top,
            left:_left,
            width:_width,
            height:_height,
            type:"popup"
            // active:true
        }
        chrome.windows.create(_winConfig, function(win){
            console.log("Open link:", _link)
            // console.log(win)
            winArr.push(win.tabs[0].id)
            bark.play();
            // console.log(winArr.tabs[0].id)
        })
    } else if(words == "cat"){
        meow.play()
        closeAll()
    }
}


function createLink(){
    links = ["https://www.chewy.com/taste-wild-high-prairie-grain-free/dp/34247",
    "https://www.chewy.com/american-journey-lamb-recipe-grain/dp/141415",
    "https://www.chewy.com/royal-canin-veterinary-diet/dp/46799",
    "https://www.petsmart.com/dog/treats/training-treats/blue-wilderness-trail-treats-grain-free-wild-bits-dog-treat-22172.html?cgid=100271",
    "https://www.chewy.com/kong-plush-duck-dog-toy-small/dp/51534"]

    return links[Math.floor(Math.random()*links.length)] // pick a link randomly
}

function closeAll() {

    chrome.tabs.remove(winArr, function() {
        console.log("Close All")
        winArr=[]
    })


}
