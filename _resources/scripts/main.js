(function(){

    $('.cards').on('click', '.card', function(event) {
      $(this).toggleClass('card--open');
    });
  
    $('.cards').on('click', '.card__like', function(event) {
      event.stopPropagation();
      event.preventDefault();
  
      $(this).toggleClass('card__like--red');
    });

  })(jQuery)
  