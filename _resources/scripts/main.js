(function(){

  $('.cards').on('click', '.card__highlight', function(event) {
    const card__data = $(this).next().find('.card__data');
    const card_hidden = $(this).next().find('.card__hidden');
    const height = card__data.outerHeight(true) + 'px';
    card_hidden.get(0).style.setProperty("--current-height", height);

    $(this).parent().toggleClass('card--open');
  });

  $('.cards').on('click', '.card__like', function(event) {
    event.stopPropagation();
    event.preventDefault();

    $(this).toggleClass('card__like--red');
  });

  $('.cards').on('click', '.card__follow-btn', function(event) {
    event.stopPropagation();
  });
  
  $('.cards').on('mouseenter mouseleave', '.card__author-following', function(event) {
    const new_text = event.type === 'mouseenter' ? 'Unfollow' : 'Following';
    $(event.target).text(new_text);
  });
  
  $('.cards').on('click', '.comment__like', function(event) {
    event.preventDefault();
    $(this).toggleClass('comment__like-liked');
  });
  
  $('body').on('click', '*', function(event) {
    event.preventDefault();

    if ($(event.target).closest('.header__main').length < 1) {
      $('.search').remove();
    }
  });

})(jQuery)
