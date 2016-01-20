$(function(){
  show();
  hide();

});

function show() {
  $( "#show_btn" ).click(function() {
    $("#flip").hide();
    $( "nav" ).animate({ "left": "+=150px" }, "slow" );
})
};



function hide() {
  $( "#hide_btn" ).click(function() {
  $("#flip").show();
  $( "nav" ).animate({ "left": "-=150px" }, "slow" );
})
};

