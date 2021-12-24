export default function dashboard(){
	const d = document,
		c = console.log,
		ajax = new XMLHttpRequest(),
		READY_STATE_COMPLETE = 4,
		OK = 200,
		linkOutLogin = document.getElementById("outLoginDashboard")
	//d.getElementsByTagName("body").dashboard.style.display="none"
	window.addEventListener("DOMContentLoaded", function(){
		let data = {"cedula": localStorage.getItem("userSession")}
		ajax.open('POST', 'http://localhost:3000/dashboard-login', true)
    ajax.setRequestHeader('Content-Type', 'application/json')
    ajax.send(JSON.stringify(data))
    ajax.addEventListener('load', e => {
    	if ( ajax.readyState === READY_STATE_COMPLETE ) {
    		let response = JSON.parse(ajax.responseText)
		    if(response.login==false){
					window.location.href = "login.html"
				}
    		if(ajax.status === OK){
    			if(response[0].cedula==data.cedula){
    				window.location.href
    				d.getElementsByTagName("body").dashboard.style.display="block"
    			}
    		}
    	}
    })
	})
	linkOutLogin.addEventListener("click", function(e){
		e.preventDefault()
		localStorage.removeItem("userSession")
		window.location.href = "login.html"
	})
}