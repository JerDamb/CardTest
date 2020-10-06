$(document).ready(function () {

    $(".card-background_background").on("click", function () {
        // $(".card_info").toggle("slide"); 

        if ($(".card-info").css("width") == "0px") {
            $(".card-info").animate({
                width: "65%",
            }, 400);
            $(".btn i").removeClass();
            $(".btn i").addClass("fas fa-minus");
        } else {
            $(".card-info").animate({
                width: "0px",
            }, 400);
            $(".btn i").removeClass();
            $(".btn i").addClass("fas fa-plus");
        }

        // $(".card_info").hide("slide", { direction: "left" }, 1000);
        //$(".card_info").show("slide", { direction: "left" }, 400);
        // $(".btn").css({ 'transform' : 'rotate(180deg)' });
    });
});


/* document.getElementById("card-background_background").addEventListener("click", function(){

    var container = document.getElementById("card-info");

    if(container.style.display=="none"){
        container.style.display="block";
    }else{
        container.style.display="none";
    }
})


/*const imgclick = document.querySelectorAll('.card')
for (var i=0; i < imgclick.length; i++){
    imgclick[i].addEventListener('click', function(e){
    })
}*/