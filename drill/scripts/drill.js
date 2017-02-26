/**
* Represents an electric drill
* @constructor
* @param {Number} batteryAmpHours - the maximum amount of charge this drill's battery is able to hold (in ampere hours)
* @param {Array} bits - an array of strings representing the different kinds of bits included with this drill
* @param {Array} speeds - an array of numbers representing the different speed settings on this drill
* @property {Number} ampHoursLeft - the amount of charge this drill's battery has left
*/
function Drill(batteryAmpHours, bits, speeds) {
  this.batteryAmpHours = batteryAmpHours;
  this.bits = bits;
  this.speeds = speeds;
  this.ampHoursLeft = this.batteryAmpHours;
}

/**
* Adds properties and methods to the Drill prototype
* @property {String} rotateDir - the direction ("clockwise" or "counter-clockwise") the drill is set to rotate
* @property {String} currentBit - the bit currently in use. Starts as undefined.
* @property {Number} currentSpeed - the speed to which the drill is currently set. Starts as undefined.
* @property {Function} chargeBattery - increases the battery's current amount of charge (ampHoursLeft) to its maximum (batteryAmpHours)
* @property {Function} useDrill - simulates using the drill. Takes a number of ampere hours as a parameter and subtracts it from ampHoursLeft, if possible.
* @property {Function} changeRotateDir - switches rotateDir to the opposite of its current state ("clockwise" or "counter-clockwise")
* @property {Function} addBit - takes a user input to add a new bit to the drill's array of bits
* @property {Function} changeBit - takes a user input to change currentBit to a different bit from the drill's array of bits
* @property {Function} changeSpeed - takes a user input to change currentSpeed to a different speed from the drill's array of speeds
*/
Drill.prototype = {
  rotateDir: "clockwise",
  currentBit: undefined,
  currentSpeed: undefined,
  chargeBattery: function() {
    if (this.ampHoursLeft < this.batteryAmpHours) {
      this.ampHoursLeft = this.batteryAmpHours;
      console.log("Battery charged");
    } else {
      console.log("Battery is already charged");
    }
  },
  useDrill: function(ampHours) {
    if (this.ampHoursLeft > ampHours) {
      this.ampHoursLeft -= ampHours;
      console.log("Drilled successfully. Battery has " + this.ampHoursLeft.toFixed(2) + " amp-hours left.");
    } else {
      alert("Insufficient charge to complete drilling. Recharge battery.");
      console.log("Did " + this.ampHoursLeft.toFixed(2) + " amp-hours of drilling. Recharge battery.");
      this.ampHoursLeft = 0;
    }
  },
  changeRotateDir: function() {
    if (this.rotateDir === "clockwise") {
      this.rotateDir = "counter-clockwise";
    } else {
      this.rotateDir = "clockwise";
    }
    console.log("Rotate direction switched to " + this.rotateDir);
  },
  addBit: function (bit) {
    this.bits.push(bit);
    console.log("Bit added: " + bit);
  },
  changeBit: function() {
    this.currentBit = changeSomething("bit", this.currentBit, this.bits);
  },
  changeSpeed: function() {
    this.currentSpeed = changeSomething("speed", this.currentSpeed, this.speeds);
  }
};

/**
* Takes a user input to switch a thing currently in use (i.e. currentBit or currentSpeed) to different thing from the appropriate array (i.e. bits or speeds)
* @param {String} thingName - the kind of thing that is being switched (i.e. "bit" or "speed")
* @param {String} currentThing - the thing currently in use (i.e. value of currentBit or currentSpeed property of Drill object)
* @param {Array} thingArray - the array of possible things to switch to (i.e. value of bits or speeds property of Drill object)
*/
var changeSomething = function (thingName, currentThing, thingArray) {
  if (currentThing) {
    if (confirm("Current " + thingName + ": " + currentThing + ".\nWould you like to change to a different " + thingName + "?") === false) {
        console.log("Kept current " + thingName + ": " + currentThing);
        return currentThing;
    }
  }
  if (thingArray.length > 0) {
    var thingString = thingArray[0].toString();
    for (var i = 1; i < thingArray.length; i++) {
      thingString += ", " + thingArray[i];
    }
    var thingChoice = prompt("Choose a new " + thingName + ".\n" + thingName.charAt(0).toUpperCase() + thingName.substring(1, thingName.length) + " options: " + thingString + ".");
    for (i = 0; i < thingArray.length; i++) {
      if (thingChoice == thingArray[i]) {
        console.log("Switched to new " + thingName + ": " + thingArray[i]);
        return thingArray[i];
      }
    }
    console.log("Your selection is not a valid " + thingName + "\nKeeping current " + thingName + ": " + currentThing);
  } else {
    console.log("There aren't any " + thingName + " options.");
  }
};

//Creating an example Drill object:
var bits1 = ["dowel bit", "auger drill bit", "wood spade bit", "masonry drill bit"];
var speeds1 = [1, 2, 3];
var drill1 = new Drill(1.2, bits1, speeds1);
