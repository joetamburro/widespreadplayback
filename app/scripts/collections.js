console.log('hello collection script')

ShowsCollection = Parse.Collection.extend ({

  model: Song,

  initialize: function(){
    console.log('Collection instantiated')
  },

})