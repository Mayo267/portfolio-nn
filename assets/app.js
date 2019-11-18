$( document ).ready(function() {
    //Top scrolling
    // About button scrolling
    $("#nav-button2").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about-box").offset().top -75
        }, 1000);
    });
    //Portfolio scrolling
    $("#nav-button3").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#port-box").offset().top -75
        }, 1500);
    });
    //Contact scrolling
    $("#nav-button4").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact-box").offset().top -75
        }, 1500);
    });
    //Back to top button
    // $("#back-top").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#nav").offset().top
    //     }, 1500);
    // });
    //Project link
    $("#project").click(function(){
        window.open('http://www.fernandamarroquin.com/Movie-Wishlist/', '_blank');
    });
    //Project2 Link
    $("#project2").click(function(){
        window.open('https://github.com/cpharshaw/bootcampProjectTwo');
    });
    //giphy link
    $("#giphy").click(function(){
        window.open('https://mayo267.github.io/GIPHY/', '_blank');
    });
    //crystal link
    $("#crystal").click(function(){
        window.open('https://mayo267.github.io/homework4/', '_blank');
    });
    //trivia link
    $("#trivia").click(function(){
        window.open('https://mayo267.github.io/TriviaGame/', '_blank');
    });
    //train link
    $("#train").click(function(){
        window.open('https://mayo267.github.io/Train-Times/', '_blank');
    });
    //RPS link
    $("#rps").click(function(){
        window.open('https://mayo267.github.io/RPS_fun/', '_blank');
    });
    //GitHub Button
    $("#githubbutton").click(function(){
        window.open("https://github.com/Mayo267");
    });
    //LinkedIn Button
    $("#linkedInButton").click(function(){
        window.open("https://www.linkedin.com/in/andrew-mayo-36464016a/");
    });

});
