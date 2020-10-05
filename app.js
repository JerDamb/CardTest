


document.getElementById("card-background_background").addEventListener("click", function(){

    var container = document.getElementById("card-info");

    if(container.style.display=="none"){
        container.style.display="block";
        container.style.Transition = 'opacity 1s';
    }else{
        container.style.display="none";
    }
})


/*const imgclick = document.querySelectorAll('.card')

for (var i=0; i < imgclick.length; i++){
    imgclick[i].addEventListener('click', function(e){

    })
}*/
