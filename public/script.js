(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = dashboard;
function dashboard() {
	var d = document,
	    c = console.log,
	    ajax = new XMLHttpRequest(),
	    READY_STATE_COMPLETE = 4,
	    OK = 200,
	    linkOutLogin = document.getElementById("outLoginDashboard");
	//d.getElementsByTagName("body").dashboard.style.display="none"
	window.addEventListener("DOMContentLoaded", function () {
		var data = { "cedula": localStorage.getItem("userSession") };
		ajax.open('POST', 'http://localhost:3000/dashboard-login', true);
		ajax.setRequestHeader('Content-Type', 'application/json');
		ajax.send(JSON.stringify(data));
		ajax.addEventListener('load', function (e) {
			if (ajax.readyState === READY_STATE_COMPLETE) {
				var response = JSON.parse(ajax.responseText);
				if (response.login == false) {
					window.location.href = "login.html";
				}
				if (ajax.status === OK) {
					if (response[0].cedula == data.cedula) {
						window.location.href;
						d.getElementsByTagName("body").dashboard.style.display = "block";
					}
				}
			}
		});
	});
	linkOutLogin.addEventListener("click", function (e) {
		e.preventDefault();
		localStorage.removeItem("userSession");
		window.location.href = "login.html";
	});
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dropdown;
function dropdown() {
  var c = console.log(),
      d = document,
      articlesShopOneContainer = d.querySelector('.articlesShop-one');
  var dropdown = d.querySelectorAll('#dropdown'),
      dropdownLength = dropdown.length,
      dropdownBtnChild = d.querySelectorAll('#dropdown ul a'),
      dropdownBtnChildLength = dropdownBtnChild.length,
      varShow = "Hola mundo";

  var _loop = function _loop(i) {
    if (dropdownLength > 1) {
      d.querySelectorAll('#dropdown button')[i].setAttribute('id', 'dropdownBtn' + i);
      d.querySelectorAll('#dropdown ul')[i].setAttribute('id', 'dropdownContent' + i);
      d.querySelector('#dropdownBtn' + i).onclick = function (e) {
        e.preventDefault();
        d.querySelector('#dropdownContent' + i).classList.toggle('toggleSidebarList');
      };

      var _loop2 = function _loop2(j) {
        d.querySelectorAll('#dropdown ul a')[j].setAttribute('id', 'dropdownBtnChild' + j);
        d.querySelectorAll('#dropdown ul div')[j].setAttribute('id', 'dropdownChildContent' + j);
        d.querySelector('#dropdownBtnChild' + j).onclick = function (e) {
          e.preventDefault();
          d.querySelector('#dropdownChildContent' + j).classList.toggle('toggleSidebarList');
        };
      };

      for (var j = 0; j < dropdownBtnChildLength; j++) {
        _loop2(j);
      }
    } else {
      console.log("No es array");
    }
  };

  for (var i = 0; i < dropdownLength; i++) {
    _loop(i);
  }
  if (document.querySelector('#dropdownContent0') != null) {
    d.querySelector('#dropdownContent0').classList.toggle('toggleSidebarList');
    d.querySelector('#dropdownChildContent0').classList.toggle('toggleSidebarList');
  }
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = helpers;
function helpers() {
	var c = console.log(),
	    d = document,
	    navToggleBtn = d.getElementById('navToggleBtn'),
	    navToggle = d.getElementById('navToggle');

	navToggleBtn.addEventListener('click', function (e) {
		e.preventDefault();
		navToggle.classList.toggle('toggle');
	});
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = login;
function login() {
	var d = document,
	    c = console.log,
	    buttonLogin = d.getElementById("FormButtonLogin"),
	    dataFalse = d.getElementById("dataFalse"),
	    ajax = new XMLHttpRequest(),
	    READY_STATE_COMPLETE = 4,
	    OK = 200;
	function validarCorreo(correo) {
		var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
		var isValid = expReg.test(correo);
		var passwordLength = loginPassword.value.length;

		if (isValid == true && passwordLength >= 8) {
			loginPassword.style.border = "1px solid #CCC";
			loginPassword.style.boxShadow = "none";
			d.querySelector(".formLogin-div_labelPassword").style.color = "#5e5e5e";
			d.querySelector(".formLogin-div_labelPassword").style.fontWeight = 100;

			var data = { user: { "email": loginEmail.value, "password": loginPassword.value } };
			ajax.open('POST', 'http://localhost:3000/login/', true);
			ajax.setRequestHeader('Content-Type', 'application/json');
			ajax.send(JSON.stringify(data));

			ajax.addEventListener('load', function (e) {
				if (ajax.readyState === READY_STATE_COMPLETE) {
					if (ajax.status === OK) {
						var response = JSON.parse(ajax.responseText);
						if (response.login == false) {
							dataFalse.innerHTML = "El email y la contraseña son incorrectos.";
						} else {
							dataFalse.innerHTML = "";
							//console.log(response)
							var _user = response[0];
							localStorage.setItem("userSession", _user.cedula);
							window.location.href = "/dashboard.html";
						}
					}
				}
			});
		} else if (!isValid || passwordLength <= 7) {
			alert("El correo electronico NO valido");
			loginEmail.style.border = "1px solid #f44336";
			loginEmail.style.boxShadow = "2px 2px 3px #f4433621";
			d.querySelector(".formLogin-div_labelEmail").style.color = "#f44336";
			d.querySelector(".formLogin-div_labelEmail").style.fontWeight = 600;
			if (isValid) {
				loginEmail.style.border = "1px solid #CCC";
				loginEmail.style.boxShadow = "none";
				d.querySelector(".formLogin-div_labelEmail").style.color = "#5e5e5e";
				d.querySelector(".formLogin-div_labelEmail").style.fontWeight = 100;
			}
			loginPassword.style.border = "1px solid #f44336";
			loginPassword.style.boxShadow = "2px 2px 3px #f4433621";
			d.querySelector(".formLogin-div_labelPassword").style.color = "#f44336";
			d.querySelector(".formLogin-div_labelPassword").style.fontWeight = 600;
		}
	}
	var user = localStorage.getItem("userSession");
	if (user == null) {
		window.location.href;
	} else {
		window.location.href = "/dashboard.html";
	}
	function responseData(data) {
		console.log(JSON.parse(data.currentTarget.responseText)[0]);
	}
	buttonLogin.addEventListener("click", function (e) {
		e.preventDefault();
		validarCorreo(loginEmail.value);
	});
}

},{}],5:[function(require,module,exports){
"use strict";

var _dropdown = require("./helpers/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _index = require("./helpers/index.js");

var _index2 = _interopRequireDefault(_index);

var _login = require("./helpers/login.js");

var _login2 = _interopRequireDefault(_login);

var _dashboard = require("./helpers/dashboard.js");

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (document.getElementsByTagName("body")[0].id == "login") {
	(0, _login2.default)();
}
if (document.getElementsByTagName("body")[0].id == "dashboard") {
	(0, _dashboard2.default)();
}

(0, _dropdown2.default)();
(0, _index2.default)();

},{"./helpers/dashboard.js":1,"./helpers/dropdown.js":2,"./helpers/index.js":3,"./helpers/login.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaGVscGVycy9kYXNoYm9hcmQuanMiLCJzcmMvanMvaGVscGVycy9kcm9wZG93bi5qcyIsInNyYy9qcy9oZWxwZXJzL2luZGV4LmpzIiwic3JjL2pzL2hlbHBlcnMvbG9naW4uanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNBd0IsUztBQUFULFNBQVMsU0FBVCxHQUFvQjtBQUNsQyxLQUFNLElBQUksUUFBVjtBQUFBLEtBQ0MsSUFBSSxRQUFRLEdBRGI7QUFBQSxLQUVDLE9BQU8sSUFBSSxjQUFKLEVBRlI7QUFBQSxLQUdDLHVCQUF1QixDQUh4QjtBQUFBLEtBSUMsS0FBSyxHQUpOO0FBQUEsS0FLQyxlQUFlLFNBQVMsY0FBVCxDQUF3QixtQkFBeEIsQ0FMaEI7QUFNQTtBQUNBLFFBQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQVU7QUFDckQsTUFBSSxPQUFPLEVBQUMsVUFBVSxhQUFhLE9BQWIsQ0FBcUIsYUFBckIsQ0FBWCxFQUFYO0FBQ0EsT0FBSyxJQUFMLENBQVUsTUFBVixFQUFrQix1Q0FBbEIsRUFBMkQsSUFBM0Q7QUFDRSxPQUFLLGdCQUFMLENBQXNCLGNBQXRCLEVBQXNDLGtCQUF0QztBQUNBLE9BQUssSUFBTCxDQUFVLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBVjtBQUNBLE9BQUssZ0JBQUwsQ0FBc0IsTUFBdEIsRUFBOEIsYUFBSztBQUNsQyxPQUFLLEtBQUssVUFBTCxLQUFvQixvQkFBekIsRUFBZ0Q7QUFDL0MsUUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLEtBQUssWUFBaEIsQ0FBZjtBQUNBLFFBQUcsU0FBUyxLQUFULElBQWdCLEtBQW5CLEVBQXlCO0FBQzFCLFlBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixZQUF2QjtBQUNBO0FBQ0MsUUFBRyxLQUFLLE1BQUwsS0FBZ0IsRUFBbkIs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Q0QsSUFBRyxTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDLEVBQXpDLElBQStDLFdBQWxELEVBQThEO0FBQzdEO0FBQ0E7O0FBRUQ7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhc2hib2FyZCgpe1xyXG5cdGNvbnN0IGQgPSBkb2N1bWVudCxcclxuXHRcdGMgPSBjb25zb2xlLmxvZyxcclxuXHRcdGFqYXggPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcclxuXHRcdFJFQURZX1NUQVRFX0NPTVBMRVRFID0gNCxcclxuXHRcdE9LID0gMjAwLFxyXG5cdFx0bGlua091dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRMb2dpbkRhc2hib2FyZFwiKVxyXG5cdC8vZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIikuZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHRcdGxldCBkYXRhID0ge1wiY2VkdWxhXCI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclNlc3Npb25cIil9XHJcblx0XHRhamF4Lm9wZW4oJ1BPU1QnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Rhc2hib2FyZC1sb2dpbicsIHRydWUpXHJcbiAgICBhamF4LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgIGFqYXguc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgIGFqYXguYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xyXG4gICAgXHRpZiAoIGFqYXgucmVhZHlTdGF0ZSA9PT0gUkVBRFlfU1RBVEVfQ09NUExFVEUgKSB7XHJcbiAgICBcdFx0bGV0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShhamF4LnJlc3BvbnNlVGV4dClcclxuXHRcdCAgICBpZihyZXNwb25zZS5sb2dpbj09ZmFsc2Upe1xyXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImxvZ2luLmh0bWxcIlxyXG5cdFx0XHRcdH1cclxuICAgIFx0XHRpZihhamF4LnN0YXR1cyA9PT0gT0spe1xyXG4gICAgXHRcdFx0aWYocmVzcG9uc2VbMF0uY2VkdWxhPT1kYXRhLmNlZHVsYSl7XHJcbiAgICBcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcbiAgICBcdFx0XHRcdGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpLmRhc2hib2FyZC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdH1cclxuICAgIFx0fVxyXG4gICAgfSlcclxuXHR9KVxyXG5cdGxpbmtPdXRMb2dpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclNlc3Npb25cIilcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJsb2dpbi5odG1sXCJcclxuXHR9KVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJvcGRvd24oKXtcclxuICBjb25zdCBjID0gY29uc29sZS5sb2coKSxcclxuICAgIGQgPSBkb2N1bWVudCxcclxuICAgIGFydGljbGVzU2hvcE9uZUNvbnRhaW5lciA9IGQucXVlcnlTZWxlY3RvcignLmFydGljbGVzU2hvcC1vbmUnKVxyXG4gIGxldCBkcm9wZG93biA9IGQucXVlcnlTZWxlY3RvckFsbCgnI2Ryb3Bkb3duJyksXHJcbiAgICBkcm9wZG93bkxlbmd0aCA9IGRyb3Bkb3duLmxlbmd0aCxcclxuICAgIGRyb3Bkb3duQnRuQ2hpbGQgPSBkLnF1ZXJ5U2VsZWN0b3JBbGwoJyNkcm9wZG93biB1bCBhJyksXHJcbiAgICBkcm9wZG93bkJ0bkNoaWxkTGVuZ3RoID0gZHJvcGRvd25CdG5DaGlsZC5sZW5ndGgsXHJcbiAgICB2YXJTaG93ID0gXCJIb2xhIG11bmRvXCJcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IGRyb3Bkb3duTGVuZ3RoOyBpKyspe1xyXG4gICAgaWYoZHJvcGRvd25MZW5ndGggPiAxKXtcclxuICAgICAgZC5xdWVyeVNlbGVjdG9yQWxsKGAjZHJvcGRvd24gYnV0dG9uYClbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBkcm9wZG93bkJ0biR7aX1gKTtcclxuICAgICAgZC5xdWVyeVNlbGVjdG9yQWxsKGAjZHJvcGRvd24gdWxgKVtpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRyb3Bkb3duQ29udGVudCR7aX1gKTtcclxuICAgICAgZC5xdWVyeVNlbGVjdG9yKGAjZHJvcGRvd25CdG4ke2l9YCkub25jbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGQucXVlcnlTZWxlY3RvcihgI2Ryb3Bkb3duQ29udGVudCR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVTaWRlYmFyTGlzdCcpXHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGRyb3Bkb3duQnRuQ2hpbGRMZW5ndGg7IGorKyl7XHJcbiAgICAgICAgZC5xdWVyeVNlbGVjdG9yQWxsKGAjZHJvcGRvd24gdWwgYWApW2pdLnNldEF0dHJpYnV0ZSgnaWQnLCBgZHJvcGRvd25CdG5DaGlsZCR7an1gKTtcclxuICAgICAgICBkLnF1ZXJ5U2VsZWN0b3JBbGwoYCNkcm9wZG93biB1bCBkaXZgKVtqXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRyb3Bkb3duQ2hpbGRDb250ZW50JHtqfWApO1xyXG4gICAgICAgIGQucXVlcnlTZWxlY3RvcihgI2Ryb3Bkb3duQnRuQ2hpbGQke2p9YCkub25jbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICBkLnF1ZXJ5U2VsZWN0b3IoYCNkcm9wZG93bkNoaWxkQ29udGVudCR7an1gKS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVTaWRlYmFyTGlzdCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coXCJObyBlcyBhcnJheVwiKVxyXG4gICAgfVxyXG4gIH1cclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd25Db250ZW50MCcpICE9IG51bGwpe1xyXG4gICAgZC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd25Db250ZW50MCcpLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZVNpZGViYXJMaXN0JylcclxuICAgIGQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duQ2hpbGRDb250ZW50MCcpLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZVNpZGViYXJMaXN0JylcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWxwZXJzKCl7XHJcblx0Y29uc3QgYyA9IGNvbnNvbGUubG9nKCksXHJcblx0ICBkID0gZG9jdW1lbnQsXHJcblx0ICBuYXZUb2dnbGVCdG4gPSBkLmdldEVsZW1lbnRCeUlkKCduYXZUb2dnbGVCdG4nKSxcclxuXHQgIG5hdlRvZ2dsZSA9IGQuZ2V0RWxlbWVudEJ5SWQoJ25hdlRvZ2dsZScpXHJcblxyXG5cdG5hdlRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0ICBlLnByZXZlbnREZWZhdWx0KClcclxuXHQgIG5hdlRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUnKVxyXG5cdH0pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpbigpe1xyXG5cdGNvbnN0IGQgPSBkb2N1bWVudCxcclxuXHRcdGMgPSBjb25zb2xlLmxvZyxcclxuXHRcdGJ1dHRvbkxvZ2luID0gZC5nZXRFbGVtZW50QnlJZChcIkZvcm1CdXR0b25Mb2dpblwiKSxcclxuXHRcdGRhdGFGYWxzZSA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhRmFsc2VcIiksXHJcblx0XHRhamF4ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksXHJcblx0XHRSRUFEWV9TVEFURV9DT01QTEVURSA9IDQsXHJcblx0XHRPSyA9IDIwMFxyXG5cdGZ1bmN0aW9uIHZhbGlkYXJDb3JyZW8oY29ycmVvKXtcclxuXHRcdHZhciBleHBSZWcgPSAvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvO1xyXG5cdFx0dmFyIGlzVmFsaWQgPSBleHBSZWcudGVzdChjb3JyZW8pO1xyXG5cdFx0dmFyIHBhc3N3b3JkTGVuZ3RoID0gbG9naW5QYXNzd29yZC52YWx1ZS5sZW5ndGhcclxuXHJcblx0XHRpZihpc1ZhbGlkPT10cnVlICYmIHBhc3N3b3JkTGVuZ3RoID49IDgpe1x0XHRcdFxyXG5cdFx0XHRsb2dpblBhc3N3b3JkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNDQ0NcIjtcclxuXHRcdFx0bG9naW5QYXNzd29yZC5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcclxuXHRcdFx0ZC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Mb2dpbi1kaXZfbGFiZWxQYXNzd29yZFwiKS5zdHlsZS5jb2xvcj1cIiM1ZTVlNWVcIjtcclxuXHRcdFx0ZC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Mb2dpbi1kaXZfbGFiZWxQYXNzd29yZFwiKS5zdHlsZS5mb250V2VpZ2h0PTEwMDtcclxuXHJcblx0XHRcdGxldCBkYXRhID0ge3VzZXI6IHtcImVtYWlsXCI6IGxvZ2luRW1haWwudmFsdWUsIFwicGFzc3dvcmRcIjogbG9naW5QYXNzd29yZC52YWx1ZX19XHJcblx0XHRcdGFqYXgub3BlbignUE9TVCcsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4vJywgdHJ1ZSlcclxuXHQgICAgYWpheC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXHJcblx0ICAgIGFqYXguc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHJcblx0ICAgIGFqYXguYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xyXG5cdCAgICBcdGlmICggYWpheC5yZWFkeVN0YXRlID09PSBSRUFEWV9TVEFURV9DT01QTEVURSApIHtcclxuXHQgICAgXHRcdGlmKGFqYXguc3RhdHVzID09PSBPSyl7XHJcblx0ICAgIFx0XHRcdGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoYWpheC5yZXNwb25zZVRleHQpXHJcblx0ICAgIFx0XHRcdGlmKHJlc3BvbnNlLmxvZ2luID09IGZhbHNlKXtcclxuXHRcdFx0XHRcdFx0XHRkYXRhRmFsc2UuaW5uZXJIVE1MID0gXCJFbCBlbWFpbCB5IGxhIGNvbnRyYXNlw7FhIHNvbiBpbmNvcnJlY3Rvcy5cIlxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRkYXRhRmFsc2UuaW5uZXJIVE1MID0gXCJcIlxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2cocmVzcG9uc2UpXHJcblx0XHRcdFx0XHRcdFx0bGV0IHVzZXIgPSByZXNwb25zZVswXVxyXG5cdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclNlc3Npb25cIiwgdXNlci5jZWR1bGEpXHJcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kYXNoYm9hcmQuaHRtbFwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIH0pXHJcblxyXG5cdFx0fWVsc2UgaWYoIWlzVmFsaWQgfHwgcGFzc3dvcmRMZW5ndGggPD0gNyl7XHJcblx0XHRcdGFsZXJ0KFwiRWwgY29ycmVvIGVsZWN0cm9uaWNvIE5PIHZhbGlkb1wiKVxyXG5cdFx0XHRsb2dpbkVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNmNDQzMzZcIjtcclxuXHRcdFx0bG9naW5FbWFpbC5zdHlsZS5ib3hTaGFkb3cgPSBcIjJweCAycHggM3B4ICNmNDQzMzYyMVwiO1xyXG5cdFx0XHRkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUxvZ2luLWRpdl9sYWJlbEVtYWlsXCIpLnN0eWxlLmNvbG9yPVwiI2Y0NDMzNlwiO1xyXG5cdFx0XHRkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUxvZ2luLWRpdl9sYWJlbEVtYWlsXCIpLnN0eWxlLmZvbnRXZWlnaHQ9NjAwO1xyXG5cdFx0XHRpZihpc1ZhbGlkKXtcclxuXHRcdFx0XHRsb2dpbkVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNDQ0NcIjtcclxuXHRcdFx0XHRsb2dpbkVtYWlsLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xyXG5cdFx0XHRcdGQucXVlcnlTZWxlY3RvcihcIi5mb3JtTG9naW4tZGl2X2xhYmVsRW1haWxcIikuc3R5bGUuY29sb3I9XCIjNWU1ZTVlXCI7XHJcblx0XHRcdFx0ZC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Mb2dpbi1kaXZfbGFiZWxFbWFpbFwiKS5zdHlsZS5mb250V2VpZ2h0PTEwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsb2dpblBhc3N3b3JkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNmNDQzMzZcIjtcclxuXHRcdFx0bG9naW5QYXNzd29yZC5zdHlsZS5ib3hTaGFkb3cgPSBcIjJweCAycHggM3B4ICNmNDQzMzYyMVwiO1xyXG5cdFx0XHRkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUxvZ2luLWRpdl9sYWJlbFBhc3N3b3JkXCIpLnN0eWxlLmNvbG9yPVwiI2Y0NDMzNlwiO1xyXG5cdFx0XHRkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUxvZ2luLWRpdl9sYWJlbFBhc3N3b3JkXCIpLnN0eWxlLmZvbnRXZWlnaHQ9NjAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclNlc3Npb25cIilcclxuXHRpZih1c2VyPT1udWxsKXtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcblx0fWVsc2V7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Rhc2hib2FyZC5odG1sXCJcclxuXHR9XHJcblx0ZnVuY3Rpb24gcmVzcG9uc2VEYXRhKGRhdGEpe1xyXG5cdFx0Y29uc29sZS5sb2coSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2VUZXh0KVswXSlcclxuXHR9XHJcblx0YnV0dG9uTG9naW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHR2YWxpZGFyQ29ycmVvKGxvZ2luRW1haWwudmFsdWUpXHJcblx0fSlcclxufSIsImltcG9ydCBkcm9wZG93biBmcm9tIFwiLi9oZWxwZXJzL2Ryb3Bkb3duLmpzXCI7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gXCIuL2hlbHBlcnMvaW5kZXguanNcIjtcclxuaW1wb3J0IGxvZ2luIGZyb20gXCIuL2hlbHBlcnMvbG9naW4uanNcIjtcclxuaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi9oZWxwZXJzL2Rhc2hib2FyZC5qc1wiO1xyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaWQgPT0gXCJsb2dpblwiKXtcclxuXHRsb2dpbigpXHJcbn1cclxuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmlkID09IFwiZGFzaGJvYXJkXCIpe1xyXG5cdGRhc2hib2FyZCgpXHJcbn1cclxuXHJcbmRyb3Bkb3duKClcclxuaGVscGVycygpIl19
