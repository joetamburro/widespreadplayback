console.log ('hello model script')
Parse.initialize("IcrKT3lOzRYhBYuQF4FMFFa4j3EtXvnEnYAV813F", "gC1DTb1eEUW9uK1Zs5KcJCfnxnyAXjOyneemCDSu");

Show = Parse.Object.extend ({

  className: "Show",

  initialize: function(){
    console.log('Model initialized!')
  },

})