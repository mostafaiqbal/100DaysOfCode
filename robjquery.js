$.ajax("readme.txt").done(function(data) {
    $("#sent").html(data)
}).fail(function(){
    $("#sent").html("Sorry We can not connect ")
});