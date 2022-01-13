// ==UserScript==
// @name         Aliexpress_convert_RUS
// @namespace    http://tampermonkey.net/
// @version      0.2
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
          document.location.href = href + "?fromApp=false&currency=USD&region=RU&bLocale=en_US&site=glo&isb=y";
    }
       var currUrl = document.location.href;
    if (currUrl.indexOf("aliexpress.ru") >= 0) {
       currUrl = currUrl.replace('ru', 'com');}
    if (currUrl.indexOf("html?from") >= 0) {
        return;
    } else {
        if (currUrl.indexOf("aliexpress.com") >= 0) {
            convert(currUrl);
            window.onload;
        }
        return;
    }
  
    //alert(convUrl);
  
  })();