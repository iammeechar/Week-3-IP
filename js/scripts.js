$(document).ready(function(){
    $("#des-image").click(function(){
        $("#des-image").toggle();
        $("#design").toggle();
    });
});

$(document).ready(function(){
    $("#contacts form".submit(function(event){
       var contacts = ["name", "email", "message"];
    blanks.forEach(function(blank){
        var userInput = $("input#" + contacts).val();
        $("." + contacts).text(userInput);
    });
        event.preventDefault();
    }));
});