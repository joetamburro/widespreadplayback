

  function newSongList(date){
    var date = date.toString()
    var Songs = Parse.Object.extend("Songs")
    var query = new Parse.Query(Songs)

    query.equalTo("show_id", date)
    query.find({
      success: function(results) {
        $("#current-setlist").html('')
        _.each(results, function(result){
          
          $("#current-setlist").append('<li data="'+ result.get('url') +'">'+result.get('title')+'</li>')

          $("#current-setlist li").click(function(){
              var url = $(this).attr('data')
              var title = $(this).text()
              // console.log($(this).text())
              $(".jp-title ul li").text(title)
              $("#jquery_jplayer_1").jPlayer("destroy")
            $("#jquery_jplayer_1").jPlayer({
                ready: function () {
                  $(this).jPlayer("setMedia", {
                    mp3: url,
                    
                  }).jPlayer("play")
                },
                swfPath: "/js",
                supplied: "mp3"
              });
          })
        })

      }
    })
    return 'success!'
  }



           // $("#jquery_jplayer_1").jPlayer({
           //      ready: function () {
           //        $(this).jPlayer("setMedia", {
           //          mp3: "",
                    
           //        });
           //      },
           //      swfPath: "/js",
           //      supplied: "mp3"
           //    });
           //  });

