/* 
    Created on : 13 Feb, 2021, 3:49:32 PM
    Author     : kirubha-2911
*/

$(document).ready(function(){
    $(".jb-new-slide .show-case-img").on("hover", function(event){
        $(event.target).parent().find("p").toggle("on");
    });
});