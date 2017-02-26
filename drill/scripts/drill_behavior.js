var showThing = function (button) {
  var buttonClass = button.className;
  var msg;
  console.log(buttonClass);
  // if () {
  //
  // // }
  // $(buttonClass).find('span').text(msg);
};

Array.prototype.toSpaceString = function () {
  var spaceString = "";
  for (var i = 0; i < this.length - 1; i++) {
    spaceString += this[i] + ", ";
  }
  spaceString += this[this.length-1];
  return spaceString;
};

$(document).ready(function() {
  updateDrill();

  $('#bit').on('click', function() {
    drill1.changeBit();
    updateDrill();
  });

  $('#speed').on('click', function() {
    drill1.changeSpeed();
    updateDrill();
  });

  $('#use_drill').on('click', function() {
    useDrillPrompt();
    updateDrill();
  });

  $('#recharge').on('click', function() {
    drill1.chargeBattery();
    updateDrill();
  });

  $('#change_rotate_dir').on('click', function() {
    drill1.changeRotateDir();
    updateDrill();
  });

  $('#add_bit').on('click', function() {
    addBitPrompt();
    updateDrill();
  });
});


var updateDrill = function() {
  $('#battery_amp_hours').text(drill1.batteryAmpHours);
  $('#amp_hours_left').text(drill1.ampHoursLeft.toFixed(1));
  $('#current_bit').text(drill1.currentBit);
  $('#current_speed').text(drill1.currentSpeed);
  $('#speeds').text(drill1.speeds.toSpaceString());
  $('#bits').text(drill1.bits.toSpaceString());
  $('#rotate_dir').text(drill1.rotateDir);
};

var useDrillPrompt = function () {
  var userAmpHours = parseFloat(prompt("How many amp-hours of drilling are you doing?"));
  if (userAmpHours) {
    drill1.useDrill(userAmpHours);
  }
};

var addBitPrompt = function () {
  var userAddBit = prompt("What bit would you like to add?");
  if (userAddBit) {
    drill1.addBit(userAddBit);
  }
};
