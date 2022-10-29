let feet = document.getElementById("feet");
let inches = document.getElementById("inches");
let yards = document.getElementById("yards");
let miles = document.getElementById("miles");
let meters = document.getElementById("meters");
let cm = document.getElementById("cm");
let kilometers = document.getElementById("kilometers");

function feet_converter() {

	if (!feet.value == "") {
		inches.value = feet.value * 12;
		yards.value = feet.value / 3;
		miles.value = feet.value / 5280;
		meters.value = feet.value / 3.281;
		cm.value = feet.value * 30.48;
		kilometers.value = feet.value / 3281;
	} else {
		inches.value = "";
		yards.value = "";
		miles.value = "";
		meters.value = "";
		cm.value = "";
		kilometers.value = "";
	}
}

function inches_converter() {
	if (!inches.value == "") {
		feet.value = inches.value / 12;
		yards.value = inches.value / 36;
		miles.value = inches.value / 63360;
		meters.value = inches.value / 39.37;
		cm.value = inches.value * 2.54;
		kilometers.value = inches.value / 39370;
	} else {
		feet.value = "";
		yards.value = "";
		miles.value = "";
		meters.value = "";
		cm.value = "";
		kilometers.value = "";
	}
}

function yards_converter() {
	if (!yards.value == "") {
		feet.value = yards.value * 3;
		inches.value = yards.value * 36;
		miles.value = yards.value / 1760;
		meters.value = yards.value / 1.094;
		cm.value = yards.value * 91.44;
		kilometers.value = yards.value / 1094;
	} else {
		feet.value = "";
		inches.value = "";
		miles.value = "";
		meters.value = "";
		cm.value = "";
		kilometers.value = "";
	}
}

function miles_converter() {
	if (!miles.value == "") {
		feet.value = miles.value * 5280;
		inches.value = miles.value * 63360;
		yards.value = miles.value * 1760;
		meters.value = miles.value * 1609;
		cm.value = miles.value * 160900;
		kilometers.value = miles.value * 1.609;
	} else {
		feet.value = "";
		inches.value = "";
		yards.value = "";
		meters.value = "";
		cm.value = "";
		kilometers.value = "";
	}
}

function meters_converter() {
	if (!meters.value == "") {
		feet.value = meters.value * 3.281;
		inches.value = meters.value * 39.37;
		yards.value = meters.value * 1.094;
		miles.value = meters.value / 1609;
		cm.value = meters.value * 100;
		kilometers.value = meters.value / 1000;
	} else {
		feet.value = "";
		inches.value = "";
		yards.value = "";
		miles.value = "";
		cm.value = "";
		kilometers.value = "";
	}
}

function cm_converter() {
	if (!cm.value == "") {
		feet.value = cm.value / 30.48;
		inches.value = cm.value / 2.54;
		yards.value = cm.value / 91.44;
		miles.value = cm.value / 160900;
		meters.value = cm.value / 100;
		kilometers.value = cm.value / 100000;
	} else {
		feet.value = "";
		inches.value = "";
		yards.value = "";
		miles.value = "";
		meters.value = "";
		kilometers.value = "";
	}
}

function kilometers_converter() {
	if (!kilometers.value == "") {
		feet.value = kilometers.value * 3281;
		inches.value = kilometers.value * 39370;
		yards.value = kilometers.value * 1094;
		miles.value = kilometers.value / 1.609;
		meters.value = kilometers.value * 1000;
		cm.value = kilometers.value * 100000;
	} else {
		feet.value = "";
		inches.value = "";
		yards.value = "";
		miles.value = "";
		meters.value = "";
		cm.value = "";
	}
}