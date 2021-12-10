(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function (c, d) {
    var navToggleBtn = d.getElementById('navToggleBtn'),
        toggleNav = d.getElementById('toggleNav'),
        navToggle = d.getElementById('navToggle'),
        articlesShopOneContainer = d.querySelector('.articlesShop-one');
    navToggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        navToggle.classList.toggle('toggle');
    });
    /*articlesShopOneContainer.addEventListener("wheel", (evt) => {
       evt.preventDefault();
       articlesShopOneContainer.scrollLeft += evt.deltaY;
    });*/
})(console.log, document);

window.addEventListener('load', function () {
    document.querySelector('.glider').addEventListener('glider-slide-visible', function (event) {
        var glider = Glider(this);
        console.log('Slide Visible %s', event.detail.slide);
    });
    document.querySelector('.glider').addEventListener('glider-slide-hidden', function (event) {
        console.log('Slide Hidden %s', event.detail.slide);
    });
    document.querySelector('.glider').addEventListener('glider-refresh', function (event) {
        console.log('Refresh');
    });
    document.querySelector('.glider').addEventListener('glider-loaded', function (event) {
        console.log('Loaded');
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
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        }, {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: '#dots'
            }
        }]
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQ1YsUUFBTSxlQUFlLEVBQUUsY0FBRixDQUFpQixjQUFqQixDQUFyQjtBQUFBLFFBQ0MsWUFBWSxFQUFFLGNBQUYsQ0FBaUIsV0FBakIsQ0FEYjtBQUFBLFFBRUMsWUFBWSxFQUFFLGNBQUYsQ0FBaUIsV0FBakIsQ0FGYjtBQUFBLFFBR0MsMkJBQTJCLEVBQUUsYUFBRixDQUFnQixtQkFBaEIsQ0FINUI7QUFJQSxpQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFDLENBQUQsRUFBTztBQUM3QyxVQUFFLGNBQUY7QUFDQSxrQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0EsS0FIRDtBQUlBOzs7O0FBSUEsQ0FiRCxFQWFHLFFBQVEsR0FiWCxFQWFnQixRQWJoQjs7QUFlQSxPQUFPLGdCQUFQLENBQXdCLE1BQXhCLEVBQStCLFlBQVU7QUFDdkMsYUFBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLGdCQUFsQyxDQUFtRCxzQkFBbkQsRUFBMkUsVUFBUyxLQUFULEVBQWU7QUFDdEYsWUFBSSxTQUFTLE9BQU8sSUFBUCxDQUFiO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLGtCQUFaLEVBQWdDLE1BQU0sTUFBTixDQUFhLEtBQTdDO0FBQ0gsS0FIRDtBQUlBLGFBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxnQkFBbEMsQ0FBbUQscUJBQW5ELEVBQTBFLFVBQVMsS0FBVCxFQUFlO0FBQ3JGLGdCQUFRLEdBQVIsQ0FBWSxpQkFBWixFQUErQixNQUFNLE1BQU4sQ0FBYSxLQUE1QztBQUNILEtBRkQ7QUFHQSxhQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsZ0JBQWxDLENBQW1ELGdCQUFuRCxFQUFxRSxVQUFTLEtBQVQsRUFBZTtBQUNoRixnQkFBUSxHQUFSLENBQVksU0FBWjtBQUNILEtBRkQ7QUFHQSxhQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsZ0JBQWxDLENBQW1ELGVBQW5ELEVBQW9FLFVBQVMsS0FBVCxFQUFlO0FBQy9FLGdCQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsS0FGRDs7QUFJQSxXQUFPLENBQVAsR0FBVyxJQUFJLE1BQUosQ0FBVyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWCxFQUE4QztBQUNyRCxzQkFBYyxDQUR1QztBQUVyRCx3QkFBZ0IsQ0FGcUM7QUFHckQsbUJBQVcsR0FIMEM7QUFJckQsbUJBQVcsSUFKMEM7QUFLckQsb0JBQVksS0FMeUM7QUFNckQsY0FBTSxLQU4rQztBQU9yRCxnQkFBUSxJQVA2QztBQVFyRCxnQkFBUTtBQUNKLGtCQUFNLGNBREY7QUFFSixrQkFBTTtBQUZGLFNBUjZDO0FBWXJELG9CQUFZLENBQ1g7QUFDQyx3QkFBWSxHQURiO0FBRUMsc0JBQVU7QUFDVCw4QkFBYyxDQURMO0FBRVQsZ0NBQWdCLENBRlA7QUFHVCxzQkFBTTtBQUhHO0FBRlgsU0FEVyxFQVNYO0FBQ0Msd0JBQVksSUFEYjtBQUVDLHNCQUFVO0FBQ1QsOEJBQWMsQ0FETDtBQUVULGdDQUFnQixDQUZQO0FBR1Qsc0JBQU07QUFIRztBQUZYLFNBVFc7QUFaeUMsS0FBOUMsQ0FBWDtBQStCRCxDQTlDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIigoYywgZCkgPT4ge1xyXG5cdGNvbnN0IG5hdlRvZ2dsZUJ0biA9IGQuZ2V0RWxlbWVudEJ5SWQoJ25hdlRvZ2dsZUJ0bicpLFxyXG5cdFx0dG9nZ2xlTmF2ID0gZC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlTmF2JyksXHJcblx0XHRuYXZUb2dnbGUgPSBkLmdldEVsZW1lbnRCeUlkKCduYXZUb2dnbGUnKSxcclxuXHRcdGFydGljbGVzU2hvcE9uZUNvbnRhaW5lciA9IGQucXVlcnlTZWxlY3RvcignLmFydGljbGVzU2hvcC1vbmUnKVxyXG5cdG5hdlRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdG5hdlRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUnKVxyXG5cdH0pXHJcblx0LyphcnRpY2xlc1Nob3BPbmVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldnQpID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXJ0aWNsZXNTaG9wT25lQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gZXZ0LmRlbHRhWTtcclxuXHR9KTsqL1xyXG59KShjb25zb2xlLmxvZywgZG9jdW1lbnQpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xpZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignZ2xpZGVyLXNsaWRlLXZpc2libGUnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIHZhciBnbGlkZXIgPSBHbGlkZXIodGhpcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTbGlkZSBWaXNpYmxlICVzJywgZXZlbnQuZGV0YWlsLnNsaWRlKVxyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbGlkZXInKS5hZGRFdmVudExpc3RlbmVyKCdnbGlkZXItc2xpZGUtaGlkZGVuJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBjb25zb2xlLmxvZygnU2xpZGUgSGlkZGVuICVzJywgZXZlbnQuZGV0YWlsLnNsaWRlKVxyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbGlkZXInKS5hZGRFdmVudExpc3RlbmVyKCdnbGlkZXItcmVmcmVzaCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgY29uc29sZS5sb2coJ1JlZnJlc2gnKVxyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbGlkZXInKS5hZGRFdmVudExpc3RlbmVyKCdnbGlkZXItbG9hZGVkJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9hZGVkJylcclxuICB9KTtcclxuXHJcbiAgd2luZG93Ll8gPSBuZXcgR2xpZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbGlkZXInKSwge1xyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBpdGVtV2lkdGg6IDE1MCxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBzY3JvbGxMb2NrOiBmYWxzZSxcclxuICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgIHJld2luZDogdHJ1ZSxcclxuICAgICAgYXJyb3dzOiB7XHJcbiAgICAgICAgICBwcmV2OiAnLmdsaWRlci1wcmV2JyxcclxuICAgICAgICAgIG5leHQ6ICcuZ2xpZGVyLW5leHQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgXHR7XHJcbiAgICAgIFx0XHRicmVha3BvaW50OiA4MDAsXHJcbiAgICAgIFx0XHRzZXR0aW5nczoge1xyXG4gICAgICBcdFx0XHRzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBcdFx0XHRkb3RzOiBmYWxzZSxcclxuICAgICAgXHRcdH1cclxuICAgICAgXHR9LFxyXG4gICAgICBcdHtcclxuICAgICAgXHRcdGJyZWFrcG9pbnQ6IDExMDAsXHJcbiAgICAgIFx0XHRzZXR0aW5nczoge1xyXG4gICAgICBcdFx0XHRzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgIFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBcdFx0XHRkb3RzOiAnI2RvdHMnLFxyXG4gICAgICBcdFx0fVxyXG4gICAgICBcdH1cclxuICAgICAgXVxyXG4gIH0pO1xyXG59KTsiXX0=
