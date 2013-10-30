console.log('hello view script')

HomeView = Backbone.View.extend({

  template: _.template( $('#home-view-template').text() ),

  events: {
    "click #home-setlist li" : "currentSelection",
  },

  initialize: function(){
    $('#home-setlist').html('')
    this.homeNav()
    $('.content-area').append(this.el)
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
    var currentDate = d.formattedDate()

    datequery.startsWith("month_day", currentDate)
    datequery.find({
      success: function(results) {
        _.each(results, function(result){
          
          $("#home-setlist").append('<li data="'+ result.get('url') +'">'+result.get('title')+'</li>')

          $("#home-setlist li").click(function(){

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

  homeNav: function(){
    $('nav li').addClass('nav-active')
  },

  currentSelection: function (event){
    
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
  },

  initialize: function(){
    $('.content-area').append(this.el)
    this.render()
  },

  render: function(){
    this.$el.append(this.template)
    var Songs = Parse.Object.extend("Songs")
    var query = new Parse.Query(Songs)
    // var ShowId = new Parse.Object

    query.equalTo("show_id", "20121230")
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

})

Date.prototype.formattedDate = function() {        
                                
        var yyyy = this.getFullYear().toString();                                    
        var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based        
        var dd  = this.getDate().toString();            
                            
        return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]);
  };  

var d = new Date ();
var currentDate = d.formattedDate()