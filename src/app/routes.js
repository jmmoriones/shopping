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
	.get('/about', (req, res, next) => {
		res.render('pages/about', {
			title: "About | Titulo de mi template about",
			description: "Mi description acerca de mi template about"
		})
	})
	.get('/shop', (req, res, next) => {
		res.render('pages/shop', {
			title: "Shop | Titulo de mi template about",
			description: "Mi description acerca de mi template about"
		})
	})
	.get('/contact', (req, res, next) => {
		res.render('pages/contact', {
			title: "Contacto | Titulo de mi template about",
			description: "Mi description acerca de mi template about"
		})
	})
	.get('/blog', (req, res, next) => {
		res.render('pages/blog', {
			title: "Blog | Titulo de mi template about",
			description: "Mi description acerca de mi template about"
		})
	})
	.get('/blog-post', (req, res, next) => {
		res.render('pages/blog-post', {
			title: "Blog Post | Titulo de mi template about",
			description: "Mi description acerca de mi template Blog post"
		})
	})
	.get('text', (req, res, next) => {
		res.render('text', {
			title: "Titulo de mi template about",
			description: "Mi description acerca de mi template about"
		})
	})

export default routes