function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animate__animated animate__slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animate__animated animate__slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animate__animated animate__slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animate__animated animate__slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animate__animated animate__slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animate__animated animate__slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animate__animated animate__slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animate__animated animate__slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animate__animated animate__slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animate__animated animate__slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animate__animated animate__slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animate__animated animate__slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animate__animated animate__fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animate__animated animate__fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animate__animated animate__fadeIn");
      $("#contact").removeClass("animate__animated animate__fadeIn");
      $("#work").removeClass("animate__animated animate__fadeIn");
    },1000);
},1500);
