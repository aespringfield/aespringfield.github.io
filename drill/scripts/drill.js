function Drill(batteryAmpHours, bits, speeds) {
  this.batteryAmpHours = batteryAmpHours;
  this.bits = bits;
  this.speeds = speeds;
  this.ampHoursLeft = this.batteryAmpHours;
}

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
  checkCharge: function() {
    console.log(this.ampHoursLeft.toFixed(2) + " amp-hours left");
    return this.ampHoursLeft;
  },
  changeRotateDir: function () {
    if (this.rotateDir === "clockwise") {
      this.rotateDir = "counter-clockwise";
    } else {
      this.rotateDir = "clockwise";
    }
    console.log("Rotate direction switched to " + this.rotateDir);
  },
  changeBit: function () {
    this.currentBit = changeSomething("bit", this.currentBit, this.bits);
  },
  addBit: function (bit) {
    this.bits.push(bit);
    console.log("Bit added: " + bit);
  },
  changeSpeed: function() {
    this.currentSpeed = changeSomething("speed", this.currentSpeed, this.speeds);
  }
};

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

var bits1 = ["pointy one", "super pointy one", "stubby one", "busted one"];
var speeds1 = ["fast", "ultra fast", "warp speed"];

var drill1 = new Drill(1.2, bits1, speeds1);
