HomeView = Backbone.View.extend({

  template: _.template( $('#home-view-template').text() )


  initialize: function(){
    $('.content-area').append(this.el)
    this.render()
  },

  render: function(){
    // this.$el.attr('href', "#/students/"+ this.model.get('_id') )
    this.$el.append( this.template({item: this.model }) )
  },

})