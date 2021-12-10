import express from "express"

const routes = express.Router()

routes
	.get('/', (req, res, next) => {
		res.render('pages/index', {
			title: "Titulo de mi template",
			description: "Mi description acerca de mi template"
		})
	})
	.get('/catalog', (req, res, next) => {
		res.render('pages/catalog', {
			title: "Catalog | Titulo de mi template about",
			description: "Mi description acerca de mi template about"
		})
	})
	.get('about', (req, res, next) => {
		res.render('about', {
			title: "Titulo de mi template about",
			description: "Mi description acerca de mi template about"
		})
	})

export default routes