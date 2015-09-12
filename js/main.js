/**
 *  JS access CSS helper class containing breakpoints
 *  call: if (cssBreakpoint === 's')
 */
var jsHelperClass = document.querySelector('.js-resize-helper');
var cssBreakpoint = jsHelperClass ? window.getComputedStyle(jsHelperClass, '::after').content : undefined;



/**
 *  Debounce
 */

function debounce(func, wait, immediate) {
  'use strict';

  var timeout;
  return function () {
    var context = this, args = arguments, later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}



/**
 *  Throttle
 */

function throttle(delay, callback) {
  'use strict';

  // Define when called last
  var lastCall = new Date().getTime();

  return function () {
    // Get current time
    var now = new Date().getTime();
    if ((now - lastCall) >= delay) {
      // Redefine last time the function was called
      lastCall = now;
      callback.apply(null, arguments);
    }
  };
}


