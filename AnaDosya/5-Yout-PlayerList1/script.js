$(function(){
  var youtubeUrl = "https://www.youtube.com/embed/" + $('#youtubevideotabs li:first-child').attr('youtubeid') + "?rel=0";
  $('#youtubeplayer iframe').attr('src',youtubeUrl);
  
  $('#youtubevideotabs li').click(function(){
    youtubeUrl = "https://www.youtube.com/embed/"+ $(this).attr('youtubeid') +"?rel=0";
    $('#youtubeplayer iframe').attr('src',youtubeUrl);    
  });  
  
  $("#youtubevideotabs").mCustomScrollbar({
    scrollButtons:{
      enable:true
    },
		theme:"dark"
  });
});