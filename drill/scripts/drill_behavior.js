$(document).ready(function() {
  updateDrill();

//Calls methods of Drill object when buttons are clicked
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
//Updates values shown in browser
  $('#battery_amp_hours').text(drill1.batteryAmpHours);
  $('#amp_hours_left').text(drill1.ampHoursLeft.toFixed(1));
  $('#current_bit').text(noneForUndefined(drill1.currentBit));
  $('#current_speed').text(noneForUndefined(drill1.currentSpeed));
  $('#speeds').text(drill1.speeds.toSpaceString());
  $('#bits').text(drill1.bits.toSpaceString());
  $('#rotate_dir').text(drill1.rotateDir);
};

//Helper functions for prompting user input for certain methods
var useDrillPrompt = function() {
  var userAmpHours = parseFloat(prompt("How many amp-hours of drilling are you doing?"));
  if (userAmpHours) {
    drill1.useDrill(userAmpHours);
  }
};

var addBitPrompt = function() {
  var userAddBit = prompt("What is the name of the bit you are adding?");
  if (userAddBit) {
    drill1.addBit(userAddBit);
  }
};

//Functions for cleaning up the presentation of outputs in the browser
var noneForUndefined = function(value) {
//Makes undefined values display in the browser as "none" instead of empty
  if (value === undefined) {
    return "none";
  } else {
    return value;
  }
};

Array.prototype.toSpaceString = function () {
//Returns an array as a more readable string, with each item separated by a comma and a space (no comma or space for last item)
  var spaceString = "";
  for (var i = 0; i < this.length - 1; i++) {
    spaceString += this[i] + ", ";
  }
  spaceString += this[this.length-1];
  return spaceString;
};

var breakAppended3 = false;

//Making buttons tidier
if (window.innerWidth > $('#buttons1').width()) {
  $('#buttons1').after('<br id="buttonBreak"/>');
  breakAppended3 = true;
}

var windowWidth = window.innerWidth;

$(document).ready(function() {
  $(window).resize(function() {
    console.log("break appended is " + breakAppended3);
    if (breakAppended3) {
      if (window.innerWidth <= $('#buttons1').width()) {
        $('#buttonBreak').remove();
        breakAppended3 = false;
      }
    } else {
      if (window.innerWidth > $('#buttons1').width()) {
        $('#buttons1').after('<br id="buttonBreak"/>');
        var breakAppended3 = true;
      }
    }
  });
});

console.log(window.innerWidth);
console.log($('#buttons1').width());
console.log($('#add_bit').width());
console.log(3*$('button').width());
