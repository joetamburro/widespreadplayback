console.log('hello view script')

HomeView = Backbone.View.extend({

  template: _.template( $('#home-view-template').text() ),

  initialize: function(){
    $('.content-area').append(this.el)
    this.render()
    console.log('rendered home view')
  },

  render: function(){
    this.$el.append(this.template)
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
  },

})