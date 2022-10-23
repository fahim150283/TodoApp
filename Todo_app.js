$("li").click(function(){
    $(this).toggleClass("completed");
}); 

// clickon X to delete the task
$("span").click(function(event){
    alert("click a span lol");
    event.stopPropagation();
});