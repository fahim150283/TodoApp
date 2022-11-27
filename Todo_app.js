$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
}); 

// clickon X to delete the task
$("ul").on("click","span",function(event){
    // alert("click a span lol");
    event.stopPropagation();
    $(this).parent().fadeOut(600, function(){//here (this)selects the X. parent is for the li and fadeout is for fading away slowly from the list
        $(this).remove();
    }); 
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var todoText= $(this).val(); //it saves the input value to a variable
        $(this).val("");
        //create a new li and to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
    
});

// $("input[type='text'").fadeout();
$(".fa-plus").click(function(){
    // console.log("Hello world!");
    $("input[type='text'").fadeToggle();
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
    {pageLanguage: 'en', pageLanguage: 'jpn', pageLanguage: 'chn', pageLanguage: 'bn', pageLanguage: 'hn'},
        'google_translate_element'
    );
}