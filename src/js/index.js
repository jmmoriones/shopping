((c, d) => {
  const navToggleBtn = d.getElementById('navToggleBtn'),
    toggleNav = d.getElementById('toggleNav'),
    navToggle = d.getElementById('navToggle'),
    articlesShopOneContainer = d.querySelector('.articlesShop-one')
  let dropdown = d.querySelectorAll('#dropdown'),
    dropdownLength = dropdown.length,
    dropdownBtnChild = d.querySelectorAll('#dropdown ul a'),
    dropdownBtnChildLength = dropdownBtnChild.length,
    varShow = "Hola mundo"

navToggleBtn.addEventListener('click', (e) => {
  e.preventDefault()
  navToggle.classList.toggle('toggle')
})

  for(let i = 0; i < dropdownLength; i++){
    if(dropdownLength > 1){
      d.querySelectorAll(`#dropdown button`)[i].setAttribute('id', `dropdownBtn${i}`);
      d.querySelectorAll(`#dropdown ul`)[i].setAttribute('id', `dropdownContent${i}`);
      d.querySelector(`#dropdownBtn${i}`).onclick = function(e){
        e.preventDefault()
        d.querySelector(`#dropdownContent${i}`).classList.toggle('toggleSidebarList')
      }
      for(let j = 0; j < dropdownBtnChildLength; j++){
        d.querySelectorAll(`#dropdown ul a`)[j].setAttribute('id', `dropdownBtnChild${j}`);
        d.querySelectorAll(`#dropdown ul div`)[j].setAttribute('id', `dropdownChildContent${j}`);
        d.querySelector(`#dropdownBtnChild${j}`).onclick = function(e){
          e.preventDefault()
          d.querySelector(`#dropdownChildContent${j}`).classList.toggle('toggleSidebarList')
        }
      }
    }else{
      console.log("No es array")
    }
  }
  if(document.querySelector('#dropdownContent0') != null){
    d.querySelector('#dropdownContent0').classList.toggle('toggleSidebarList')
    d.querySelector('#dropdownChildContent0').classList.toggle('toggleSidebarList')
  }
})(console.log, document)