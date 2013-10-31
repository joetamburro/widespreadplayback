console.log('hello view script')
// creating a homeview constructor
HomeView = Backbone.View.extend({
// referencing the home view template
  template: _.template( $('#home-view-template').text() ),
// setting click events
  events: {
    "click #home-setlist li" : "currentSelection",
   },
// when homeview is initialized clear out the setlist
  initialize: function(){
    $('#home-setlist').html('')
    $('.content-area').append(this.el)
      // $('.navigation-bar li').navSelection()
    this.render()
    console.log('rendered home view')
  },

  render: function(){
    this.$el.append(this.template)
  
    var HomeSongs = Parse.Object.extend("Songs")
    var datequery = new Parse.Query(HomeSongs)

    Date.prototype.formattedDate = function() {        
                                                                       
            var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based        
            var dd  = this.getDate().toString();            
                                
            return (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]);
      };  
    
    var d = new Date ();
    window.currentDate = d.formattedDate()

    datequery.startsWith("month_day", window.currentDate)
    datequery.find({
      success: function(results) {

        _.each(results, function(result){
          var element = $('<li data="'+ result.get('url') +'">'+result.get('title')+'</li>')
          $("#home-setlist").append(element)

          element.click(function(){
// store results in global variabel. if thing gets clicked. lets store all the results in a 
// using window. just makes it explicit that this is supposed to be a global variable
              window.currentlyPlayingShowId = result.get('show_id')
              console.log(window.currentlyPlayingShowId)
              var url = $(this).attr('data')
              var title = $(this).text()

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

  currentSelection: function (event){
    $('#home-setlist li').removeClass('active')
    $(event.currentTarget).addClass('active')
  },

  highlightTab: function (event){
    $('.navigation-bar li').first().removeClass('current-tab')
    $('.navigation-bar li').removeClass('current-tab')
    $(event.currentTarget).addClass('current-tab')
  },

  currentlyPlaying: function (){
    $('.content-area').html('')
    new CurrentlyPlayingView()
  },

}),

CurrentlyPlayingView = Backbone.View.extend({

  template: _.template( $('#currently-playing-template').text() ),

  events: {
    "click #current-setlist li" : "currentSelection",
    "click .left-triangle"      : "previousShow"
  },

  initialize: function(){
    $('.content-area').append(this.el)
    // query.equalTo("show_id", window.currentlyPlayingShowId)
    this.render()
  },

  render: function(){
    this.$el.append(this.template)
    var Songs = Parse.Object.extend("Songs")
    var query = new Parse.Query(Songs)
    // var ShowId = new Parse.Object



    query.equalTo("show_id",  window.currentlyPlayingShowId || "20001230")
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

  currentSelection: function (event){
    $('#current-setlist li').removeClass('active')
    $(event.currentTarget).addClass('active')
  },

  // previousShow: function(){
  //   $('.left-triangle').click(function(){
  //     var
  //   })
  // }

})

Date.prototype.formattedDate = function() {        
                                
        var yyyy = this.getFullYear().toString();                                    
        var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based        
        var dd  = this.getDate().toString();            
                            
        return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]);
  };  

var d = new Date ();
var currentDate = d.formattedDate()