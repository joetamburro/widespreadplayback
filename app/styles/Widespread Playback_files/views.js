console.log('hello view script')

HomeView = Backbone.View.extend({

  template: _.template( $('#home-view-template').text() ),

  events: {
    // "click  #currently-playing" : "currentlyPlaying",
  },

  initialize: function(){
    $('.content-area').append(this.el)
    this.render()
    console.log('rendered home view')
  },

  render: function(){
    this.$el.append(this.template)

    var HomeSongs = Parse.Object.extend("Songs")
    var datequery = new Parse.Query(HomeSongs)

    datequery.startsWith("month_day", "0505")
    datequery.find({
      success: function(results) {
        _.each(results, function(result){
          
          $("#home-setlist").append('<li data="'+ result.get('url') +'">'+result.get('title')+'</li>')

          $("#home-setlist li").click(function(){
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
  },

  currentlyPlaying: function (){
    $('.content-area').html('')
    new CurrentlyPlayingView()
  },

}),

CurrentlyPlayingView = Backbone.View.extend({

  template: _.template( $('#currently-playing-template').text() ),


  initialize: function(){
    $('.content-area').append(this.el)
    this.render()
  },

  render: function(){
    this.$el.append(this.template)
    var Songs = Parse.Object.extend("Songs")
    var query = new Parse.Query(Songs)
    // var ShowId = new Parse.Object

    query.equalTo("show_id", "20001110")
    query.find({
      success: function(results) {
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
  },

})

