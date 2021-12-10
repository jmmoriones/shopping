((c, d) => {
	const navToggleBtn = d.getElementById('navToggleBtn'),
		toggleNav = d.getElementById('toggleNav'),
		navToggle = d.getElementById('navToggle'),
		articlesShopOneContainer = d.querySelector('.articlesShop-one')
	navToggleBtn.addEventListener('click', (e) => {
		e.preventDefault()
		navToggle.classList.toggle('toggle')
	})
	/*articlesShopOneContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    articlesShopOneContainer.scrollLeft += evt.deltaY;
	});*/
})(console.log, document)

window.addEventListener('load',function(){
  document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
      var glider = Glider(this);
      console.log('Slide Visible %s', event.detail.slide)
  });
  document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event){
      console.log('Slide Hidden %s', event.detail.slide)
  });
  document.querySelector('.glider').addEventListener('glider-refresh', function(event){
      console.log('Refresh')
  });
  document.querySelector('.glider').addEventListener('glider-loaded', function(event){
      console.log('Loaded')
  });

  window._ = new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: false,
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
      	{
      		breakpoint: 800,
      		settings: {
      			slidesToShow: 2,
      			slidesToScroll: 1,
      			dots: false,
      		}
      	},
      	{
      		breakpoint: 1100,
      		settings: {
      			slidesToShow: 3,
      			slidesToScroll: 1,
      			dots: '#dots',
      		}
      	}
      ]
  });
});