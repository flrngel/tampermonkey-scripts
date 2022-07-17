// ==UserScript==
// @name         Github unfold activities
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var timer = setInterval(() => {
        var cnt = 0;
        document.querySelectorAll('button[aria-expanded=false]').forEach((x)=>{cnt+=1;if(x.previousElementSibling?.textContent.match(/release/) === null && x.previousElementSibling?.textContent.match(/follow/) === null ){x.click()}});
        if ( cnt > 1 ) {
            clearInterval(timer);
        }
    }, 100);
})();
