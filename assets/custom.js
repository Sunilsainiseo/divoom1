$('.custom__search').on('input', function() {
    var searchValue = $(this).val().toLowerCase();
    var found = false;

    $(".faq-accordion").each(function() {
        var $wrapper = $(this);
        var wrapperFound = false;

        $wrapper.find(".faq-question").each(function() {
            var data_search_1 = $(this).find(".faq-question h3").text();
            var text = $(this).text().toLowerCase();

            if (text.includes(searchValue)) {
                wrapperFound = true;
                $(this).addClass("custom_active").show();
                // $(this).parents('.collapsible-content__header').show();
            } else {
                $(this).removeClass("custom_active").hide();
                // $(this).parents('.collapsible-content__header').hide();
            }
        });

        if (wrapperFound) {
            $wrapper.show();
            found = true;
        } else {
            $wrapper.hide();
        }
    });

    if (!found) {
        $('.not-found-message').show();
    } else {
        $(".not-found-message").hide();
    }
});
$(document).ready(function(){
  $('.write_review_button').click(function(event){
    event.preventDefault();
})
})
