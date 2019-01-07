$(".button1").click(function() {
    $("#img").show();
    $("#hiddenmsg").text("HOver the image!");
    $(".img").hide();
    
});

$("#img").hover(function() {
    $("#img").hide();
    $(".button2").show();
    $(".img").show();
    $("#hiddenmsg").text("DOUBLE CLICK ME!");
    
});

$(".button2").dblclick(function() {
    $(".img").show();
     $("#hiddenmsg").text("NOW TOUCH THE treasure");
    
    
});

$("#h1").mouseup(function(){
    $(".button1").hide();
    $(".button2").hide();
    $(".img").hide();
    $(".img2").show();
    $("#hiddenmsg").text("YOU FOund the treasure");
});

