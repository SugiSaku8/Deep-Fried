let als = 0;
document.getElementById("select").style.display = "none";
document.getElementById("cal").style.display = "none";
document.getElementById("asterisk").style.display = "none";
document.getElementById("shutdown").style.display = "none";
document.getElementById("search_result").style.display = "none";
document.getElementById("notice").style.display = "none";
document.getElementById("ajaxreload").style.display = "none";
document.getElementById("situmon").style.display = "none";
document.getElementById("SCR").style.display = "none";
document.getElementById("Erorr").style.display = "none";
document.getElementById("help").style.display = "none";
document.getElementById("feedback").style.display = "none";
document.getElementById("aboutt").style.display = "none";
document.getElementById("voice").style.display = "none";
document.getElementById("newfunction").style.display = "none";
document.getElementById("situmon_kotaeru").style.display = "none";
document.getElementById("restore").style.display = "none";
document.getElementById("spotlight").style.display = "none";
document.getElementById("saver1").style.display = "none";
document.getElementById("saver2").style.display = "none";
document.getElementById("upgrade").style.display = "none";
document.getElementById("vignette_menu").style.display = "none";


document.getElementById("setting").style.display = "none";

//新しい壁紙どう?5Kだけど、
function voice() {
	var change = document.getElementById("voice")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function asterisk() {
	var change = document.getElementById("asterisk")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function cal() {
	var change = document.getElementById("cal")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function s_open() {
	var change = document.getElementById("shutdown")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function V_OPEN() {
	var change = document.getElementById("vignette_menu")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function opensv() {
	var change = document.getElementById("saver1")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function search_open() {
	var change = document.getElementById("spotlight")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function opennotice() {
	var change = document.getElementById("notice")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function openstore() {
	var change = document.getElementById("estore")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function tuchi() {
	var change = document.getElementById("ajaxreload")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function situmon() {
	var change = document.getElementById("situmon");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function aiopen() {
	var change = document.getElementById("AI");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function scr_open() {
	var change = document.getElementById("SCR");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function Erorr() {
	var change = document.getElementById("Erorr");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function pad_open() {
	als += 1;
	var change = document.getElementById("DeepPad");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
	if (als === 10) {
		snow();
	}
}
function kotaeru_open() {
	var change = document.getElementById("situmon_kotaeru");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function new_open() {
	var change = document.getElementById("newfunction");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function welcome() {
	var change = document.getElementById("welcome");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function feedback() {
	var change = document.getElementById("feedback");

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function help() {
	var change = document.getElementById("help")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function M_open() {
	var change = document.getElementById("M")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function about() {
	var change = document.getElementById("aboutt")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}
function kanji() {
	var change = document.getElementById("kanji")

	if (change.style.display == "block") {
		change.style.display = "none";
	} else {
		change.style.display = "block";
	}
}

shortcut.add("Ctrl+Q", function () {
	situmon();
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
shortcut.add("Ctrl+Z", function () {
	feedback();
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
shortcut.add("Ctrl+Y", function () {
	help();
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
shortcut.add("Ctrl+X", function () {
	window.close();
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
shortcut.add("Ctrl+1", function () {
	M_open();
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
shortcut.add("Ctrl+B", function () {
	about();
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
shortcut.add("Ctrl+T", function () {
	new_open();
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
shortcut.add("Ctrl+O", function () {
	scr_open();
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
shortcut.add("Ctrl+shift+Alt+R", function () {
	document.getElementById("restore").style.display = "block";
},
	{
		'type': 'keydown',
		'propagate': false,
		'target': document
	});
window.onload = function () {
	document.body.addEventListener('contextmenu', function (e) {
		e.preventDefault();
		document.getElementById('contextmenu').style.left = e.pageX + "px";
		document.getElementById('contextmenu').style.top = e.pageY + "px";
		document.getElementById('contextmenu').style.display = "block";
	});

	document.body.addEventListener('click', function (e) {
		e.stopPropagation();
		document.getElementById('contextmenu').style.display = "none";
	});
}