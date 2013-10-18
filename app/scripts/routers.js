AppRouter = Backbone.Router.extend ({

  initialize: function(){
    console.log('hi')
  },

  routes: {
    ""                    : "homeView",
    "home"                : "homeView",
    "date"                : "dateView",
    "location"            : "mapView",
    "currently-playing"   : "currentlyPlaying"
  }















})