var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)


var result;

let canvasWidth = 100;
let canvasHeight = 100;


function setup() {
  let c = createCanvas(canvasWidth, canvasHeight);
  c.position (0,0)

  textAlign(LEFT, TOP);
  textSize(14);


  myRec.onResult = showResult;
  myRec.start();
  // 	// mic = new p5.AudioIn();
  // 	// mic.start();
}


function draw(){
  // setTimeout(timetoLeave, 15000);
  // setTimeout(letGo,26000)
}
var numberOfTimes = 0;

function showResult() {
  // recognition system will often append words into phrases.
  // so hack here is to only use the last word:
  //if (myRec.resultValue == true) {
  //text(myRec.resultString, width / 2, height / 2);


  var mostrecentword = myRec.resultString.split(' ').pop();
  console.log(mostrecentword)

  let msg = mostrecentword
  chrome.runtime.sendMessage(msg,function(){
    console.log("send hey to the bg.js")
  })


  if (mostrecentword.indexOf("hey") !== -1 ){

    console.log(myRec.resultString);
  //replace
     $("#logo a").replaceWith('<img src="https://www.min-petlife.com/images/dogKind/shiba.jpg?2017110701 height="100" width="150">');
    setTimeout(function(){
     $("#postlks li:first-child").replaceWith("<h1>Can we</h1>")
   }, 1000);
    setTimeout(function(){
    $("#postlks li:nth-child(2)").replaceWith("<h1>have a</h1>");
  }, 2000);
     setTimeout(haveawalk,2500);

  }
  else if (mostrecentword.indexOf("stop") !== -1 ){
    console.log(myRec.resultString);
    for (var s = document.getElementsByTagName("span"), t = 0; t < s.length; t++) {
      s[t].classList.remove('shake-hard','shake-constant');

    }
  }
  else if (mostrecentword.indexOf("okay") !== -1 ){
    console.log(myRec.resultString);
    okok();
  }
  else if (mostrecentword.indexOf("ready") !== -1  ) {

    numberOfTimes = numberOfTimes + 1;
    var numberOfElementsToShake = 2 * numberOfTimes;

    $('h4').slice(0,numberOfElementsToShake).addClass('shake-chunk shake-constant');
    setTimeout(function(){
      $('h4').removeClass('shake-chunk shake-constant' );
    }, 3000);

    if (numberOfTimes === 1) {
      // this is the first time someone said ‘talk’ or 'me'
    } else if (numberOfTimes === 2) {

      // this is the second time...
    } else {
      // third time or more,
    }
    console.log(myRec.resultString);
    //document.getElementsByClassName('txt')[0].innerText = "WOW"
    // document.getElementsByClassName('txt')[0].style.backgroundColor = "orange"

  } else if (mostrecentword.indexOf("eat") !== -1) {
		console.log(myRec.resultString);
    // function createTab(){
    //   chrome.tabs.create({url:"https://www.google.com/"});//should be in background?
    // }
		//setTimeout(pleaseLeave, 1500);
 } else if (mostrecentword.indexOf("go") !== -1){
	 console.log(myRec.resultString);
    //setTimeout(tellstory,2500);
  } else {
		return;
	}
}


function haveawalk(){
  var post = document.getElementById('postlks')
  var walkMe = document.createElement('h1')
  walkMe.innerText="walk";
  walkMe.classList.add('walkMe', 'animated', 'tada');
  post.appendChild(walkMe);

}
var j=0;
function okok(){
  var addheart = document.getElementsByTagName('td')
  for ( var i = 0; i< addheart.length; i++) {
    addheart[i].classList.add('popheart');
  }
   $('.popheart:eq(0), .popheart:eq(1)').html('<a>❤️</a>');
   $('.popheart a').replaceWith('<a>❤️</a>');
}

// function timetoLeave(){
//   p1.html("Now it's time to ask the spirit to leave. Say 'please leave'.")
// }
// function pleaseLeave(){
// 	p2.html("I finally found you. I won't leave. ");
// }
// function letGo(){
// 	p3.html("Say 'Please GO!'to force the spirit to leave!")
// }

// function tellstory() {
//   var grammar = tracery.createGrammar(grammarSource);
//   grammar.addModifiers(tracery.baseEngModifiers);
// 	var output1 = grammar.flatten("#origin1#");
// 	var output2 = grammar.flatten("#origin2#");
// 	var output3 = grammar.flatten("#origin3#");
// 	var output4 = grammar.flatten("#origin4#");
// 	var output5 = grammar.flatten("#origin5#");
// 	var output6 = grammar.flatten("#origin6#");
//   d.html("Do you know what I just write?"+"<br />" + "<br />"+output1 + "<br />" + "<br />"  +output2 + "<br />" +output3 + "<br />" + output4 + "<br />" + "I will never let you go." + "<br />" +"<br />"+ output5 +"<br />" + output6);
// }
//
// var grammarSource = {
//   // "origin": [
//   //   "My #names#, my #sals#: \n \n \
// 	// 	You are my #adjs# #nouns#. \n \
// 	// 	My #nouns# #verbs# for your #adjs# #nouns#, my #nouns# #advs# #verbs# your #nouns#.\n \
// 	// 	My #adjs# #nouns#.\n \n \
// 	// 	Yours #advs#,\n \
// 	// 	Mr.FollowYou "
//   // ],
// 	"origin1": ["My #names#, my #sals#:"],
// 	"origin2": ["You are my #adjs# #nouns#. "],
// 	"origin3": ["My #nouns# #verbs# for your #adjs# #nouns#, my #nouns# #advs# #verbs# your #nouns#."],
// 	"origin4":["My #adjs# #nouns#."],
// 	"origin5":["Yours #advs#,"],
// 	"origin6":["Mr. BehindYou"],
//
//   "sals": ["Beloved", "Darling", "Dear", "Dearest", "Fanciful", "Honey"],
//
//   "names": ["Princess", "Dear", "Baby", "Jewel", "Love", "Moppet", "Sweetheart"],
//
//   "adjs": ["affectionate", "amorous", "anxious", "avid", "beautiful", "breathless", "burning", "covetous", "craving", "curious", "eager", "fervent", "fondest", "loveable", "lovesick", "loving", "passionate", "precious", "seductive", "sweet", "sympathetic", "tender", "unsatisfied", "winning", "wistful"],
//
//   "nouns": ["adoration", "affection", "ambition", "appetite", "ardour", "being", "burning", "charm", "craving", "desire", "devotion", "eagerness", "enchantment", "enthusiasm", "fancy", "fellow feeling", "fervour", "fondness", "heart", "hunger", "infatuation", "little liking", "longing", "love", "lust", "passion", "rapture", "sympathy", "thirst", "wish", "yearning"],
//
//   "advs": ["affectionately", "ardently", "anxiously", "beautifully", "burningly", "covetously", "curiously", "eagerly", "fervently", "fondly", "impatiently", "keenly", "lovingly", "passionately", "seductively", "tenderly", "wistfully"],
//
//   "verbs": ["adores", "attracts", "clings to", "holds dear", "hopes for", "hungers for", "likes", "longs for", "loves", "lusts after", "pants for", "pines for", "sighs for", "tempts", "thirsts for", "treasures", "yearns for", "woos"],
//
// }
