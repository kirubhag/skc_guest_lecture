/* 
 Created on : 13 Feb, 2021, 3:49:32 PM
 Author     : kirubha-2911
 */

var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight',
        progress = document.querySelector('.progress'),
        scroll;

document.addEventListener('scroll', function () {
    console.log("scroll");
    scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');
});

$(document).ready(function () {

});