export default function login(){
	const d = document,
		c = console.log,
		buttonLogin = d.getElementById("FormButtonLogin"),
		dataFalse = d.getElementById("dataFalse"),
		ajax = new XMLHttpRequest(),
		READY_STATE_COMPLETE = 4,
		OK = 200
	function validarCorreo(correo){
		var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
		var isValid = expReg.test(correo);
		var passwordLength = loginPassword.value.length

		if(isValid==true && passwordLength >= 8){			
			loginPassword.style.border = "1px solid #CCC";
			loginPassword.style.boxShadow = "none";
			d.querySelector(".formLogin-div_labelPassword").style.color="#5e5e5e";
			d.querySelector(".formLogin-div_labelPassword").style.fontWeight=100;

			let data = {user: {"email": loginEmail.value, "password": loginPassword.value}}
			ajax.open('POST', 'http://localhost:3000/login/', true)
	    ajax.setRequestHeader('Content-Type', 'application/json')
	    ajax.send(JSON.stringify(data))

	    ajax.addEventListener('load', e => {
	    	if ( ajax.readyState === READY_STATE_COMPLETE ) {
	    		if(ajax.status === OK){
	    			let response = JSON.parse(ajax.responseText)
	    			if(response.login == false){
							dataFalse.innerHTML = "El email y la contraseña son incorrectos."
						}else{
							dataFalse.innerHTML = ""
							//console.log(response)
							let user = response[0]
							localStorage.setItem("userSession", user.cedula)
							window.location.href = "/dashboard.html"
						}
	    		}
	    	}
	    })

		}else if(!isValid || passwordLength <= 7){
			alert("El correo electronico NO valido")
			loginEmail.style.border = "1px solid #f44336";
			loginEmail.style.boxShadow = "2px 2px 3px #f4433621";
			d.querySelector(".formLogin-div_labelEmail").style.color="#f44336";
			d.querySelector(".formLogin-div_labelEmail").style.fontWeight=600;
			if(isValid){
				loginEmail.style.border = "1px solid #CCC";
				loginEmail.style.boxShadow = "none";
				d.querySelector(".formLogin-div_labelEmail").style.color="#5e5e5e";
				d.querySelector(".formLogin-div_labelEmail").style.fontWeight=100;
			}
			loginPassword.style.border = "1px solid #f44336";
			loginPassword.style.boxShadow = "2px 2px 3px #f4433621";
			d.querySelector(".formLogin-div_labelPassword").style.color="#f44336";
			d.querySelector(".formLogin-div_labelPassword").style.fontWeight=600;
		}
	}
	let user = localStorage.getItem("userSession")
	if(user==null){
		window.location.href
	}else{
		window.location.href = "/dashboard.html"
	}
	function responseData(data){
		console.log(JSON.parse(data.currentTarget.responseText)[0])
	}
	buttonLogin.addEventListener("click", function(e){
		e.preventDefault()
		validarCorreo(loginEmail.value)
	})
}