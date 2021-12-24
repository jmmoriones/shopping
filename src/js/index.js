import dropdown from "./helpers/dropdown.js";
import helpers from "./helpers/index.js";
import login from "./helpers/login.js";
import dashboard from "./helpers/dashboard.js";

if(document.getElementsByTagName("body")[0].id == "login"){
	login()
}else if(document.getElementsByTagName("body")[0].id == "dashboard"){
	dashboard()
}

dropdown()
helpers()