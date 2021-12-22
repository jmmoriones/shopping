(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function (c, d) {
  var navToggleBtn = d.getElementById('navToggleBtn'),
      toggleNav = d.getElementById('toggleNav'),
      navToggle = d.getElementById('navToggle'),
      articlesShopOneContainer = d.querySelector('.articlesShop-one');
  var dropdown = d.querySelectorAll('#dropdown'),
      dropdownLength = dropdown.length,
      dropdownBtnChild = d.querySelectorAll('#dropdown ul a'),
      dropdownBtnChildLength = dropdownBtnChild.length,
      varShow = "Hola mundo";

  navToggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    navToggle.classList.toggle('toggle');
  });

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
})(console.log, document);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQ1QsTUFBTSxlQUFlLEVBQUUsY0FBRixDQUFpQixjQUFqQixDQUFyQjtBQUFBLE1BQ0UsWUFBWSxFQUFFLGNBQUYsQ0FBaUIsV0FBakIsQ0FEZDtBQUFBLE1BRUUsWUFBWSxFQUFFLGNBQUYsQ0FBaUIsV0FBakIsQ0FGZDtBQUFBLE1BR0UsMkJBQTJCLEVBQUUsYUFBRixDQUFnQixtQkFBaEIsQ0FIN0I7QUFJQSxNQUFJLFdBQVcsRUFBRSxnQkFBRixDQUFtQixXQUFuQixDQUFmO0FBQUEsTUFDRSxpQkFBaUIsU0FBUyxNQUQ1QjtBQUFBLE1BRUUsbUJBQW1CLEVBQUUsZ0JBQUYsQ0FBbUIsZ0JBQW5CLENBRnJCO0FBQUEsTUFHRSx5QkFBeUIsaUJBQWlCLE1BSDVDO0FBQUEsTUFJRSxVQUFVLFlBSlo7O0FBTUYsZUFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFDLENBQUQsRUFBTztBQUM1QyxNQUFFLGNBQUY7QUFDQSxjQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsUUFBM0I7QUFDRCxHQUhEOztBQVhXLDZCQWdCRCxDQWhCQztBQWlCUCxRQUFHLGlCQUFpQixDQUFwQixFQUFzQjtBQUNwQixRQUFFLGdCQUFGLHFCQUF1QyxDQUF2QyxFQUEwQyxZQUExQyxDQUF1RCxJQUF2RCxrQkFBMkUsQ0FBM0U7QUFDQSxRQUFFLGdCQUFGLGlCQUFtQyxDQUFuQyxFQUFzQyxZQUF0QyxDQUFtRCxJQUFuRCxzQkFBMkUsQ0FBM0U7QUFDQSxRQUFFLGFBQUYsa0JBQStCLENBQS9CLEVBQW9DLE9BQXBDLEdBQThDLFVBQVMsQ0FBVCxFQUFXO0FBQ3ZELFVBQUUsY0FBRjtBQUNBLFVBQUUsYUFBRixzQkFBbUMsQ0FBbkMsRUFBd0MsU0FBeEMsQ0FBa0QsTUFBbEQsQ0FBeUQsbUJBQXpEO0FBQ0QsT0FIRDs7QUFIb0IsbUNBT1osQ0FQWTtBQVFsQixVQUFFLGdCQUFGLG1CQUFxQyxDQUFyQyxFQUF3QyxZQUF4QyxDQUFxRCxJQUFyRCx1QkFBOEUsQ0FBOUU7QUFDQSxVQUFFLGdCQUFGLHFCQUF1QyxDQUF2QyxFQUEwQyxZQUExQyxDQUF1RCxJQUF2RCwyQkFBb0YsQ0FBcEY7QUFDQSxVQUFFLGFBQUYsdUJBQW9DLENBQXBDLEVBQXlDLE9BQXpDLEdBQW1ELFVBQVMsQ0FBVCxFQUFXO0FBQzVELFlBQUUsY0FBRjtBQUNBLFlBQUUsYUFBRiwyQkFBd0MsQ0FBeEMsRUFBNkMsU0FBN0MsQ0FBdUQsTUFBdkQsQ0FBOEQsbUJBQTlEO0FBQ0QsU0FIRDtBQVZrQjs7QUFPcEIsV0FBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksc0JBQW5CLEVBQTJDLEdBQTNDLEVBQStDO0FBQUEsZUFBdkMsQ0FBdUM7QUFPOUM7QUFDRixLQWZELE1BZUs7QUFDSCxjQUFRLEdBQVIsQ0FBWSxhQUFaO0FBQ0Q7QUFsQ007O0FBZ0JULE9BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLGNBQW5CLEVBQW1DLEdBQW5DLEVBQXVDO0FBQUEsVUFBL0IsQ0FBK0I7QUFtQnRDO0FBQ0QsTUFBRyxTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLEtBQStDLElBQWxELEVBQXVEO0FBQ3JELE1BQUUsYUFBRixDQUFnQixtQkFBaEIsRUFBcUMsU0FBckMsQ0FBK0MsTUFBL0MsQ0FBc0QsbUJBQXREO0FBQ0EsTUFBRSxhQUFGLENBQWdCLHdCQUFoQixFQUEwQyxTQUExQyxDQUFvRCxNQUFwRCxDQUEyRCxtQkFBM0Q7QUFDRDtBQUNGLENBeENELEVBd0NHLFFBQVEsR0F4Q1gsRUF3Q2dCLFFBeENoQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIigoYywgZCkgPT4ge1xyXG4gIGNvbnN0IG5hdlRvZ2dsZUJ0biA9IGQuZ2V0RWxlbWVudEJ5SWQoJ25hdlRvZ2dsZUJ0bicpLFxyXG4gICAgdG9nZ2xlTmF2ID0gZC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlTmF2JyksXHJcbiAgICBuYXZUb2dnbGUgPSBkLmdldEVsZW1lbnRCeUlkKCduYXZUb2dnbGUnKSxcclxuICAgIGFydGljbGVzU2hvcE9uZUNvbnRhaW5lciA9IGQucXVlcnlTZWxlY3RvcignLmFydGljbGVzU2hvcC1vbmUnKVxyXG4gIGxldCBkcm9wZG93biA9IGQucXVlcnlTZWxlY3RvckFsbCgnI2Ryb3Bkb3duJyksXHJcbiAgICBkcm9wZG93bkxlbmd0aCA9IGRyb3Bkb3duLmxlbmd0aCxcclxuICAgIGRyb3Bkb3duQnRuQ2hpbGQgPSBkLnF1ZXJ5U2VsZWN0b3JBbGwoJyNkcm9wZG93biB1bCBhJyksXHJcbiAgICBkcm9wZG93bkJ0bkNoaWxkTGVuZ3RoID0gZHJvcGRvd25CdG5DaGlsZC5sZW5ndGgsXHJcbiAgICB2YXJTaG93ID0gXCJIb2xhIG11bmRvXCJcclxuXHJcbm5hdlRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgbmF2VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZScpXHJcbn0pXHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBkcm9wZG93bkxlbmd0aDsgaSsrKXtcclxuICAgIGlmKGRyb3Bkb3duTGVuZ3RoID4gMSl7XHJcbiAgICAgIGQucXVlcnlTZWxlY3RvckFsbChgI2Ryb3Bkb3duIGJ1dHRvbmApW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBgZHJvcGRvd25CdG4ke2l9YCk7XHJcbiAgICAgIGQucXVlcnlTZWxlY3RvckFsbChgI2Ryb3Bkb3duIHVsYClbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGBkcm9wZG93bkNvbnRlbnQke2l9YCk7XHJcbiAgICAgIGQucXVlcnlTZWxlY3RvcihgI2Ryb3Bkb3duQnRuJHtpfWApLm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBkLnF1ZXJ5U2VsZWN0b3IoYCNkcm9wZG93bkNvbnRlbnQke2l9YCkuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlU2lkZWJhckxpc3QnKVxyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBkcm9wZG93bkJ0bkNoaWxkTGVuZ3RoOyBqKyspe1xyXG4gICAgICAgIGQucXVlcnlTZWxlY3RvckFsbChgI2Ryb3Bkb3duIHVsIGFgKVtqXS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRyb3Bkb3duQnRuQ2hpbGQke2p9YCk7XHJcbiAgICAgICAgZC5xdWVyeVNlbGVjdG9yQWxsKGAjZHJvcGRvd24gdWwgZGl2YClbal0uc2V0QXR0cmlidXRlKCdpZCcsIGBkcm9wZG93bkNoaWxkQ29udGVudCR7an1gKTtcclxuICAgICAgICBkLnF1ZXJ5U2VsZWN0b3IoYCNkcm9wZG93bkJ0bkNoaWxkJHtqfWApLm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgZC5xdWVyeVNlbGVjdG9yKGAjZHJvcGRvd25DaGlsZENvbnRlbnQke2p9YCkuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlU2lkZWJhckxpc3QnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gZXMgYXJyYXlcIilcclxuICAgIH1cclxuICB9XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duQ29udGVudDAnKSAhPSBudWxsKXtcclxuICAgIGQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duQ29udGVudDAnKS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVTaWRlYmFyTGlzdCcpXHJcbiAgICBkLnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bkNoaWxkQ29udGVudDAnKS5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVTaWRlYmFyTGlzdCcpXHJcbiAgfVxyXG59KShjb25zb2xlLmxvZywgZG9jdW1lbnQpIl19
