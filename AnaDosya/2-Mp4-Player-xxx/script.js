var starttime = 2;
$(function() {
    $("#playlist li").on("click", function() {
        $("#videoarea").attr({
            "src": $(this).attr("movieurl"),
            "poster": "",
            "autoplay": "autoplay"
                  })
      starttime = $(this).attr('startt');
    })
//     $("#videoarea").attr({
//         "src": $("#playlist li").eq(0).attr("movieurl"),
//         "poster": $("#playlist li").eq(0).attr("moviesposter"),
   
//     })
})

document.getElementById("videoarea").addEventListener("loadedmetadata", function() {
     this.currentTime = starttime;
}, false);