// Create cookie object

var cookie = {
    cookietype: "Chocolate Chip",
    cost: 0,
    count: 0,
    logMessage: "Default Message",
    purchaseID: 1,
    upgradesPurchased:[], // store booleans for each purchased Example: TRUE= this upgrade has be
    numberOfUpgrades: 4,
    upgradeCount: 0,
    upgradeCosts:[5,10,15,20]
};

// When the page loads

// Show the default of clicks in the Clicker Section

document.getElementById("clickCount").innerHTML =
"Cookie clicks: " + cookie.count;

document.getElementById("StatClickCount").innerHTML =
"Cookie clicks: " + cookie.count;

// Keep track of the game seconds while the page is loaded
var seconds = 0;
var gamecount = document.getElementById("seconds-count");

function incrementSeconds() {
    seconds += 1;
    gamecount.innerText = "Game duration (seconds): " + seconds;
}
    setInterval(incrementSeconds, 1000); // Repeat the function every 1000 millseconds

    // Initalize the array of booleans for upgrades purchased

    for (var i = 0; i < cookie.numberOfUpgrades; i++) {
        cookie.upgradesPurchased.push(false);

    }
    showUpgrades();

 // FUNCTIONS

 // DEBUG
 // Show the status of upgrades purchased as true or false for each upgrade
 function showUpgrades() {
   document.getElementById("UgradePurchases").innerHTML =

   "Chocolate Chip:  " + cookie.upgradesPuchased[0] + "<br>" + 
   "Chocolate Swirl:  " + cookie.upgradesPuchased[1] + "<br>" + 
   "Double Chocolate:  " + cookie.upgradesPuchased[2] + "<br>" + 
   "M&M:   " + cookie.upgradesPuchased[3] + "<br>"  
 }

 // Increase the count when clicking on the cookie in the Clicker Section

function increaseCount() {
cookie.count += 1;
document.getElementById("clickCount").innerHTML =
"Cookie clicks: " + cookie.count;
document.getElementById("StatClickCount").innerHTML =
"Cookie clicks: " + cookie.count;

}

function increaseUpgradeCount() {
    cookie.upgradesCount +=1;
    document.getElementById("UpgradeCount").innerHTML = 
    "Number of upgrades: " + cookie.upgradesCount;

}

// --------------Add a log text to the Log Section

function addLogText() {
   var li = document.createElement("li");
   var t = document.createTextNode(cookie.logMessage);

   li.appendChild(t);
   document.getElementById("LogUL").appendChild(li);
   document.getElementById("LogText").value = "";
   var span = document.createElement("SPAN");
   li.appendChild(span);
}

// Clicking on the Chocolate Chip upgrade

function purchaseChocChip() {

    if(!cookie.count >= cookie.upgradesPurchased[0]){
    
      if(cookie.count >= cookie.upgradeCosts[0])  {
        cookie.cookieType = "Chocolate Chip";
        cookie.logMessage = "New Upgrade: " + cookie.cookieType;
        addLogText();
        cookie.upgradesPurchased[0] = true; // Change the boolean of the first index Chocolate Chip to true
        increaseUpgradeCount();
        showUpgrades(); // refreshes the boolean array
    }
    
    else {
        alert("You must have " + cookie.upgradeCosts[0] + "clicks!");
         }
      }
    else {
        alert("You  have already purchaed this upgrade!");

    }
}

// Clicking on the Chocolate Swirl upgrade

function purchaseChocSwirl() {
    if(!cookie.count >= cookie.upgradesPurchased[0]){
    
        if(cookie.count >= cookie.upgradeCosts[0])  {
          cookie.cookieType = "Chocolate Chip";
          cookie.logMessage = "New Upgrade: " + cookie.cookieType;
          addLogText();
          cookie.upgradesPurchased[0] = true; // Change the boolean of the first index Chocolate Chip to true
          increaseUpgradeCount();
          showUpgrades(); // refreshes the boolean array
      }
      
      else {
          alert("You must have " + cookie.upgradeCosts[0] + "clicks!");
           }
        }
      else {
          alert("You  have already purchaed this upgrade!");
  
      }
    }

 // Clicking on the Double Chocolate upgrade

function purchaseDoubleChoc() {
    if(!cookie.count >= cookie.upgradesPurchased[0]){
    
        if(cookie.count >= cookie.upgradeCosts[0])  {
          cookie.cookieType = "Chocolate Chip";
          cookie.logMessage = "New Upgrade: " + cookie.cookieType;
          addLogText();
          cookie.upgradesPurchased[0] = true; // Change the boolean of the first index Chocolate Chip to true
          increaseUpgradeCount();
          showUpgrades(); // refreshes the boolean array
      }
      
      else {
          alert("You must have " + cookie.upgradeCosts[0] + "clicks!");
           }
        }
      else {
          alert("You  have already purchaed this upgrade!");
  
      }
 }
 
 // Clicking on the M&M upgrade
 
 function purchaseMM(){
    if(!cookie.count >= cookie.upgradesPurchased[0]){
    
        if(cookie.count >= cookie.upgradeCosts[0])  {
          cookie.cookieType = "Chocolate Chip";
          cookie.logMessage = "New Upgrade: " + cookie.cookieType;
          addLogText();
          cookie.upgradesPurchased[0] = true; // Change the boolean of the first index Chocolate Chip to true
          increaseUpgradeCount();
          showUpgrades(); // refreshes the boolean array
      }
      
      else {
          alert("You must have " + cookie.upgradeCosts[0] + "clicks!");
           }
        }
      else {
          alert("You  have already purchaed this upgrade!");
  
      }
 
  }