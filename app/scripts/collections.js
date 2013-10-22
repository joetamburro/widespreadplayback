console.log('hello collection script')

ShowsCollection = Backbone.Collection.extend ({

  model: Show,

  initialize: function(){
    console.log('Collection instantiated')
  },

})