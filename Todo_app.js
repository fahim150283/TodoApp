$("li").click(function(){
    
    console.log($(this).css("color"));
    // if a Li is grey=rgb(128,128,128)
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        // make it black
        $(this).css({
            color: "rgb(0, 0, 0)",
            textDecoration: "none"
        });
    }
        
    // else if a Li is black
    else{
        // make it grey
        $(this).css({
            color: "rgb(128, 128, 128)",
            textDecoration : "Line-through"
        });
    }
    // for this.css , we could also use the code below. but we dont use that cause thats ugly xD
    // $(this).css({("color","grey");
    // $(this).css("text-decoration","Line-through");
}); 