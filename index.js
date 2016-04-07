var data = "Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”,Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”,Saul sent: “I think 83MB. That’s what the guy at the store said. I think it means MegaBites.”,Gus sent: “Around 150MB. I have the receipts if you need more precise figures.”";

var data = data.replace("MB. Is that everything? I’m busy, you know.”","")
  .replace(/MB. Dat Snaptalk is a data hog, yo.”/i,"")
  .replace(/MB. That’s what the guy at the store said. I think it means MegaBites.”/i,"")
.replace(/MB. I have the receipts if you need more precise figures.”/i,"")

.replace("sent: “It was ","")
.replace("sent: “Damn, it was like ","")
.replace("sent: “I think ","")
.replace("sent: “Around ","")
.split(",");

 var moreData = data.map(function(place){
  var parts = place.split(" ");
  console.log(parts);

    return {
      name : parts[0],
      data : Number(parts[1])
    };

});

var highest = 0;
var name = "";
console.log(moreData);
console.log(moreData.length);
     for (var i = 0; i < moreData.length; i++) {

         if (moreData[i].data > highest) {
            highest = moreData[i].data;
           name = moreData[i].name;

       }
    }

var least = 300;
var name = "";
console.log(moreData);
console.log(moreData.length);
     for (var i = 0; i < moreData.length; i++) {

         if (moreData[i].data < least) {
            least = moreData[i].data;
           name = moreData[i].name;

       }
    }


var Walter ="“Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.”";

var Walter = Walter
.replace("“Hello. I’ve got ","")
.replace(". I’m too old for the other ones.”","")
.replace(" and ",",")
.split(" ")
;
 console.log(Walter)
;
 var appCountsWalter = {};

// //loop through all the colors
Walter.forEach(function(color){

    //initialize the value in the map/object
    if(appCountsWalter[color] === undefined){
        appCountsWalter[color] = 0;
    }

    // increment the counter for each color in the Map
  appCountsWalter[color] = appCountsWalter[color] + 1;
});

console.log((appCountsWalter));

var Jesse = " “Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.”";


var Jesse = Jesse
.replace(" “Yo! I’ve got ‘em all. ","")
.replace(".”","")
.replace(" and ",",")
.split(",");

console.log(Jesse);
var appCountsJesse = {};

//loop through all the colors
Jesse.forEach(function(roxy){

    //initialize the value in the map/object
    if(appCountsJesse[roxy] === undefined){
        appCountsJesse[roxy] = 0;
    }

    // increment the counter for each color in the Map
    appCountsJesse[roxy] = appCountsJesse[roxy] + 1;
});

console.log((appCountsJesse));

var Saul = "“I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.”";

var Saul = Saul
.replace("“I’m on ","")
.replace(" account for my cats. Oh, and ",",")
.replace(" for my ex-husbands.”","")
.replace(" for Business. And I have an",",")
.replace(" and ",",")
.split(",");

 console.log(Saul);

var appCountsSaul = {};

//loop through all the colors
Saul.forEach(function(solo){

    //initialize the value in the map/object
    if(appCountsSaul[solo] === undefined){
        appCountsSaul[solo] = 0;
    }

    // increment the counter for each color in the Map
    appCountsSaul[solo] = appCountsSaul[solo] + 1;
});

console.log((appCountsSaul));


var Gus = "“I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.”";

var Gus = Gus
.replace("“I use ","")
.replace(". My customers aren’t on the others, so I can’t get them to engage with my brand there.”","")
.replace(" and ",",")
.replace(" and ",",")
.split(",");
console.log(Gus);

var appCountsGus = {};

//loop through all the colors
Gus.forEach(function(yolo){

    //initialize the value in the map/object
    if(appCountsGus[yolo] === undefined){
        appCountsGus[yolo] = 0;
    }

    // increment the counter for each color in the Map
    appCountsGus[yolo] = appCountsGus[yolo] + 1;
});

console.log(appCountsGus);
console.log((appCountsSaul));
