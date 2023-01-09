/* global $ */
// ==UserScript==
// @name         Github following check
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // $.get("https://api.github.com/users/flrngel/following/kapwing").response
    if ( $(".js-user-profile-sticky-fields > h1").length ) {
        let myusername = $("meta[name=user-login]").attr('content')
        console.log(myusername)
        let username = document.location.pathname.split('/')[1]
        if ( myusername.length > 0 && username.length > 0 ) {
            $.get(`https://api.github.com/users/${username}/following/${myusername}`, function (data, status, xhr) {
                if ( xhr.status == 204 ) {
                    $(".js-user-profile-sticky-fields > h1").prepend(`<span style="background-color: #eff3f4; font-size: 13px; font-weight: 400; color: #536471; padding: 0 4px;">Follows you</span>`);
                }
            });
        }
    }
})();
