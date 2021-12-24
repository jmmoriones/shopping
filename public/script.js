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
} else if (document.getElementsByTagName("body")[0].id == "dashboard") {
	(0, _dashboard2.default)();
}

(0, _dropdown2.default)();
(0, _index2.default)();

},{"./helpers/dashboard.js":1,"./helpers/dropdown.js":2,"./helpers/index.js":3,"./helpers/login.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaGVscGVycy9kYXNoYm9hcmQuanMiLCJzcmMvanMvaGVscGVycy9kcm9wZG93bi5qcyIsInNyYy9qcy9oZWxwZXJzL2luZGV4LmpzIiwic3JjL2pzL2hlbHBlcnMvbG9naW4uanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNBd0IsUztBQUFULFNBQVMsU0FBVCxHQUFvQjtBQUNsQyxLQUFNLElBQUksUUFBVjtBQUFBLEtBQ0MsSUFBSSxRQUFRLEdBRGI7QUFBQSxLQUVDLE9BQU8sSUFBSSxjQUFKLEVBRlI7QUFBQSxLQUdDLHVCQUF1QixDQUh4QjtBQUFBLEtBSUMsS0FBSyxHQUpOO0FBQUEsS0FLQyxlQUFlLFNBQVMsY0FBVCxDQUF3QixtQkFBeEIsQ0FMaEI7QUFNQTtBQUNBLFFBQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQVU7QUFDckQsTUFBSSxPQUFPLEVBQUMsVUFBVSxhQUFhLE9BQWIsQ0FBcUIsYUFBckIsQ0FBWCxFQUFYO0FBQ0EsT0FBSyxJQUFMLENBQVUsTUFBVixFQUFrQix1Q0FBbEIsRUFBMkQsSUFBM0Q7QUFDRSxPQUFLLGdCQUFMLENBQXNCLGNBQXRCLEVBQXNDLGtCQUF0QztBQUNBLE9BQUssSUFBTCxDQUFVLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBVjtBQUNBLE9BQUssZ0JBQUwsQ0FBc0IsTUFBdEIsRUFBOEIsYUFBSztBQUNsQyxPQUFLLEtBQUssVUFBTCxLQUFvQixvQkFBekIsRUFBZ0Q7QUFDL0MsUUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLEtBQUssWUFBaEIsQ0FBZjtBQUNBLFFBQUcsU0FBUyxLQUFULElBQWdCLEtBQW5CLEVBQXlCO0FBQzFCLFlBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixZQUF2QjtBQUNBO0FBQ0MsUUFBRyxLQUFLLE1BQUwsS0FBZ0IsRUFBbkIs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RkQsTUFFTSxJQUFHLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUMsRUFBekMsSUFBK0MsV0FBbEQsRUFBOEQ7QUFDbkU7QUFDQTs7QUFFRDtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGFzaGJvYXJkKCl7XHJcblx0Y29uc3QgZCA9IGRvY3VtZW50LFxyXG5cdFx0YyA9IGNvbnNvbGUubG9nLFxyXG5cdFx0YWpheCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxyXG5cdFx0UkVBRFlfU1RBVEVfQ09NUExFVEUgPSA0LFxyXG5cdFx0T0sgPSAyMDAsXHJcblx0XHRsaW5rT3V0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dExvZ2luRGFzaGJvYXJkXCIpXHJcblx0Ly9kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKS5kYXNoYm9hcmQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGRhdGEgPSB7XCJjZWR1bGFcIjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyU2Vzc2lvblwiKX1cclxuXHRcdGFqYXgub3BlbignUE9TVCcsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZGFzaGJvYXJkLWxvZ2luJywgdHJ1ZSlcclxuICAgIGFqYXguc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgYWpheC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgYWpheC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XHJcbiAgICBcdGlmICggYWpheC5yZWFkeVN0YXRlID09PSBSRUFEWV9TVEFURV9DT01QTEVURSApIHtcclxuICAgIFx0XHRsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGFqYXgucmVzcG9uc2VUZXh0KVxyXG5cdFx0ICAgIGlmKHJlc3BvbnNlLmxvZ2luPT1mYWxzZSl7XHJcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwibG9naW4uaHRtbFwiXHJcblx0XHRcdFx0fVxyXG4gICAgXHRcdGlmKGFqYXguc3RhdHVzID09PSBPSyl7XHJcbiAgICBcdFx0XHRpZihyZXNwb25zZVswXS5jZWR1bGE9PWRhdGEuY2VkdWxhKXtcclxuICAgIFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWZcclxuICAgIFx0XHRcdFx0ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIikuZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICBcdFx0XHR9XHJcbiAgICBcdFx0fVxyXG4gICAgXHR9XHJcbiAgICB9KVxyXG5cdH0pXHJcblx0bGlua091dExvZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyU2Vzc2lvblwiKVxyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImxvZ2luLmh0bWxcIlxyXG5cdH0pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcm9wZG93bigpe1xyXG4gIGNvbnN0IGMgPSBjb25zb2xlLmxvZygpLFxyXG4gICAgZCA9IGRvY3VtZW50LFxyXG4gICAgYXJ0aWNsZXNTaG9wT25lQ29udGFpbmVyID0gZC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZXNTaG9wLW9uZScpXHJcbiAgbGV0IGRyb3Bkb3duID0gZC5xdWVyeVNlbGVjdG9yQWxsKCcjZHJvcGRvd24nKSxcclxuICAgIGRyb3Bkb3duTGVuZ3RoID0gZHJvcGRvd24ubGVuZ3RoLFxyXG4gICAgZHJvcGRvd25CdG5DaGlsZCA9IGQucXVlcnlTZWxlY3RvckFsbCgnI2Ryb3Bkb3duIHVsIGEnKSxcclxuICAgIGRyb3Bkb3duQnRuQ2hpbGRMZW5ndGggPSBkcm9wZG93bkJ0bkNoaWxkLmxlbmd0aCxcclxuICAgIHZhclNob3cgPSBcIkhvbGEgbXVuZG9cIlxyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgZHJvcGRvd25MZW5ndGg7IGkrKyl7XHJcbiAgICBpZihkcm9wZG93bkxlbmd0aCA+IDEpe1xyXG4gICAgICBkLnF1ZXJ5U2VsZWN0b3JBbGwoYCNkcm9wZG93biBidXR0b25gKVtpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRyb3Bkb3duQnRuJHtpfWApO1xyXG4gICAgICBkLnF1ZXJ5U2VsZWN0b3JBbGwoYCNkcm9wZG93biB1bGApW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgZHJvcGRvd25Db250ZW50JHtpfWApO1xyXG4gICAgICBkLnF1ZXJ5U2VsZWN0b3IoYCNkcm9wZG93bkJ0biR7aX1gKS5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZC5xdWVyeVNlbGVjdG9yKGAjZHJvcGRvd25Db250ZW50JHtpfWApLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZVNpZGViYXJMaXN0JylcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgZHJvcGRvd25CdG5DaGlsZExlbmd0aDsgaisrKXtcclxuICAgICAgICBkLnF1ZXJ5U2VsZWN0b3JBbGwoYCNkcm9wZG93biB1bCBhYClbal0uc2V0QXR0cmlidXRlKCdpZCcsIGBkcm9wZG93bkJ0bkNoaWxkJHtqfWApO1xyXG4gICAgICAgIGQucXVlcnlTZWxlY3RvckFsbChgI2Ryb3Bkb3duIHVsIGRpdmApW2pdLnNldEF0dHJpYnV0ZSgnaWQnLCBgZHJvcGRvd25DaGlsZENvbnRlbnQke2p9YCk7XHJcbiAgICAgICAgZC5xdWVyeVNlbGVjdG9yKGAjZHJvcGRvd25CdG5DaGlsZCR7an1gKS5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgIGQucXVlcnlTZWxlY3RvcihgI2Ryb3Bkb3duQ2hpbGRDb250ZW50JHtqfWApLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZVNpZGViYXJMaXN0JylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGVzIGFycmF5XCIpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bkNvbnRlbnQwJykgIT0gbnVsbCl7XHJcbiAgICBkLnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bkNvbnRlbnQwJykuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlU2lkZWJhckxpc3QnKVxyXG4gICAgZC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd25DaGlsZENvbnRlbnQwJykuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlU2lkZWJhckxpc3QnKVxyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbHBlcnMoKXtcclxuXHRjb25zdCBjID0gY29uc29sZS5sb2coKSxcclxuXHQgIGQgPSBkb2N1bWVudCxcclxuXHQgIG5hdlRvZ2dsZUJ0biA9IGQuZ2V0RWxlbWVudEJ5SWQoJ25hdlRvZ2dsZUJ0bicpLFxyXG5cdCAgbmF2VG9nZ2xlID0gZC5nZXRFbGVtZW50QnlJZCgnbmF2VG9nZ2xlJylcclxuXHJcblx0bmF2VG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHQgIGUucHJldmVudERlZmF1bHQoKVxyXG5cdCAgbmF2VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZScpXHJcblx0fSlcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCl7XHJcblx0Y29uc3QgZCA9IGRvY3VtZW50LFxyXG5cdFx0YyA9IGNvbnNvbGUubG9nLFxyXG5cdFx0YnV0dG9uTG9naW4gPSBkLmdldEVsZW1lbnRCeUlkKFwiRm9ybUJ1dHRvbkxvZ2luXCIpLFxyXG5cdFx0ZGF0YUZhbHNlID0gZC5nZXRFbGVtZW50QnlJZChcImRhdGFGYWxzZVwiKSxcclxuXHRcdGFqYXggPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcclxuXHRcdFJFQURZX1NUQVRFX0NPTVBMRVRFID0gNCxcclxuXHRcdE9LID0gMjAwXHJcblx0ZnVuY3Rpb24gdmFsaWRhckNvcnJlbyhjb3JyZW8pe1xyXG5cdFx0dmFyIGV4cFJlZyA9IC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC87XHJcblx0XHR2YXIgaXNWYWxpZCA9IGV4cFJlZy50ZXN0KGNvcnJlbyk7XHJcblx0XHR2YXIgcGFzc3dvcmRMZW5ndGggPSBsb2dpblBhc3N3b3JkLnZhbHVlLmxlbmd0aFxyXG5cclxuXHRcdGlmKGlzVmFsaWQ9PXRydWUgJiYgcGFzc3dvcmRMZW5ndGggPj0gOCl7XHRcdFx0XHJcblx0XHRcdGxvZ2luUGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0NDQ1wiO1xyXG5cdFx0XHRsb2dpblBhc3N3b3JkLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xyXG5cdFx0XHRkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUxvZ2luLWRpdl9sYWJlbFBhc3N3b3JkXCIpLnN0eWxlLmNvbG9yPVwiIzVlNWU1ZVwiO1xyXG5cdFx0XHRkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUxvZ2luLWRpdl9sYWJlbFBhc3N3b3JkXCIpLnN0eWxlLmZvbnRXZWlnaHQ9MTAwO1xyXG5cclxuXHRcdFx0bGV0IGRhdGEgPSB7dXNlcjoge1wiZW1haWxcIjogbG9naW5FbWFpbC52YWx1ZSwgXCJwYXNzd29yZFwiOiBsb2dpblBhc3N3b3JkLnZhbHVlfX1cclxuXHRcdFx0YWpheC5vcGVuKCdQT1NUJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbi8nLCB0cnVlKVxyXG5cdCAgICBhamF4LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcclxuXHQgICAgYWpheC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cclxuXHQgICAgYWpheC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XHJcblx0ICAgIFx0aWYgKCBhamF4LnJlYWR5U3RhdGUgPT09IFJFQURZX1NUQVRFX0NPTVBMRVRFICkge1xyXG5cdCAgICBcdFx0aWYoYWpheC5zdGF0dXMgPT09IE9LKXtcclxuXHQgICAgXHRcdFx0bGV0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShhamF4LnJlc3BvbnNlVGV4dClcclxuXHQgICAgXHRcdFx0aWYocmVzcG9uc2UubG9naW4gPT0gZmFsc2Upe1xyXG5cdFx0XHRcdFx0XHRcdGRhdGFGYWxzZS5pbm5lckhUTUwgPSBcIkVsIGVtYWlsIHkgbGEgY29udHJhc2XDsWEgc29uIGluY29ycmVjdG9zLlwiXHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGRhdGFGYWxzZS5pbm5lckhUTUwgPSBcIlwiXHJcblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHRcdFx0XHRcdFx0XHRsZXQgdXNlciA9IHJlc3BvbnNlWzBdXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyU2Vzc2lvblwiLCB1c2VyLmNlZHVsYSlcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Rhc2hib2FyZC5odG1sXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgfSlcclxuXHJcblx0XHR9ZWxzZSBpZighaXNWYWxpZCB8fCBwYXNzd29yZExlbmd0aCA8PSA3KXtcclxuXHRcdFx0YWxlcnQoXCJFbCBjb3JyZW8gZWxlY3Ryb25pY28gTk8gdmFsaWRvXCIpXHJcblx0XHRcdGxvZ2luRW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2Y0NDMzNlwiO1xyXG5cdFx0XHRsb2dpbkVtYWlsLnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDJweCAzcHggI2Y0NDMzNjIxXCI7XHJcblx0XHRcdGQucXVlcnlTZWxlY3RvcihcIi5mb3JtTG9naW4tZGl2X2xhYmVsRW1haWxcIikuc3R5bGUuY29sb3I9XCIjZjQ0MzM2XCI7XHJcblx0XHRcdGQucXVlcnlTZWxlY3RvcihcIi5mb3JtTG9naW4tZGl2X2xhYmVsRW1haWxcIikuc3R5bGUuZm9udFdlaWdodD02MDA7XHJcblx0XHRcdGlmKGlzVmFsaWQpe1xyXG5cdFx0XHRcdGxvZ2luRW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0NDQ1wiO1xyXG5cdFx0XHRcdGxvZ2luRW1haWwuc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XHJcblx0XHRcdFx0ZC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Mb2dpbi1kaXZfbGFiZWxFbWFpbFwiKS5zdHlsZS5jb2xvcj1cIiM1ZTVlNWVcIjtcclxuXHRcdFx0XHRkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUxvZ2luLWRpdl9sYWJlbEVtYWlsXCIpLnN0eWxlLmZvbnRXZWlnaHQ9MTAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxvZ2luUGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2Y0NDMzNlwiO1xyXG5cdFx0XHRsb2dpblBhc3N3b3JkLnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDJweCAzcHggI2Y0NDMzNjIxXCI7XHJcblx0XHRcdGQucXVlcnlTZWxlY3RvcihcIi5mb3JtTG9naW4tZGl2X2xhYmVsUGFzc3dvcmRcIikuc3R5bGUuY29sb3I9XCIjZjQ0MzM2XCI7XHJcblx0XHRcdGQucXVlcnlTZWxlY3RvcihcIi5mb3JtTG9naW4tZGl2X2xhYmVsUGFzc3dvcmRcIikuc3R5bGUuZm9udFdlaWdodD02MDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyU2Vzc2lvblwiKVxyXG5cdGlmKHVzZXI9PW51bGwpe1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWZcclxuXHR9ZWxzZXtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZGFzaGJvYXJkLmh0bWxcIlxyXG5cdH1cclxuXHRmdW5jdGlvbiByZXNwb25zZURhdGEoZGF0YSl7XHJcblx0XHRjb25zb2xlLmxvZyhKU09OLnBhcnNlKGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZVRleHQpWzBdKVxyXG5cdH1cclxuXHRidXR0b25Mb2dpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdHZhbGlkYXJDb3JyZW8obG9naW5FbWFpbC52YWx1ZSlcclxuXHR9KVxyXG59IiwiaW1wb3J0IGRyb3Bkb3duIGZyb20gXCIuL2hlbHBlcnMvZHJvcGRvd24uanNcIjtcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSBcIi4vaGVscGVycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgbG9naW4gZnJvbSBcIi4vaGVscGVycy9sb2dpbi5qc1wiO1xyXG5pbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuL2hlbHBlcnMvZGFzaGJvYXJkLmpzXCI7XHJcblxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaWQgPT0gXCJsb2dpblwiKXtcclxuXHRsb2dpbigpXHJcbn1lbHNlIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5pZCA9PSBcImRhc2hib2FyZFwiKXtcclxuXHRkYXNoYm9hcmQoKVxyXG59XHJcblxyXG5kcm9wZG93bigpXHJcbmhlbHBlcnMoKSJdfQ==
