
  navSelection: function (event){
    $('.navigation-bar li').removeClass('current-tab')
    $(event.currentTarget).addClass('current-tab')
  }

  $('.navigation-bar li').navSelection()