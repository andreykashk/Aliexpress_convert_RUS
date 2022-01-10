// ==UserScript==
// @name         Aliexpress_convert_RUS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Andrey_Ka
// @match        https://aliexpress.ru/item/*
// @match        https://www.aliexpress.ru/item/*
// @match        https://aliexpress.com/item/*
// @match        https://www.aliexpress.com/item/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  function convert(href) {
      href = href.split('?')[0];
      document.location.href = href + "?fromApp=true&currency=USD&region=UA&b_locale=en_US&site=glo";
  }

  var currUrl = document.location.href;
  if (currUrl.indexOf("html?from") >= 0) {
      return;
  } else {
      if (currUrl.indexOf("aliexpress.com") >= 0) {
          convert(currUrl);
          window.onload;
      } else {
          var convUrl = currUrl.replace('ru', 'com');
          convert(convUrl)
      }
      return;
  }

  //alert(convUrl);

})();