console.log('hello router script')



AppRouter = Backbone.Router.extend ({

  initialize: function(){

  },

  routes: {
    ""                    : "homeView",
    "home"                : "homeView",
    "date"                : "dateView",
    "location"            : "mapView",
    "currently-playing"   : "currentlyPlaying"
  },

  homeView: function(){
    $('.content-area').html('')
    $('.navigation-bar .nav').first().addClass('current-tab'); 
    new HomeView()
  },

  currentlyPlaying: function(){
    $('.content-area').html('')
    new CurrentlyPlayingView()
  },


 
})


var router = new AppRouter()
Backbone.history.start()