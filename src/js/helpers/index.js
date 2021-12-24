export default function helpers(){
	const c = console.log(),
	  d = document,
	  navToggleBtn = d.getElementById('navToggleBtn'),
	  navToggle = d.getElementById('navToggle')

	navToggleBtn.addEventListener('click', (e) => {
	  e.preventDefault()
	  navToggle.classList.toggle('toggle')
	})
}