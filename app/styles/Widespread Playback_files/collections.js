console.log('hello collection script')

ShowsCollection = Parse.Collection.extend ({

  model: Show,

  initialize: function(){
    console.log('Collection instantiated')
  },

})