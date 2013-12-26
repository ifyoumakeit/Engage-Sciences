$(function() {

    //DONATION SLIDER
    $("#slider").noUiSlider({
        range: [10, 1000],
        start: 100,
        step: 5,
        handles: 1,
        serialization: {
            resolution: 1,
            to: setDonation
        }
    });

    function setDonation(val){
        $("#donation_value").val("$"+val);
    }

    //TERMS AND CONDITIONS
    $("#button_terms").on("click", function(e) {
        e.preventDefault();
        var height_terms = $('body').scrollTop() + 20;
        console.log(height_terms);
        $('#text_terms').css("top",height_terms+"px");
        $('#overlay,#text_terms').show();
    });

    $("#overlay, #button_close").on("click", function(e) {
        $('#overlay,#text_terms').hide();
    });

    //PLACEHOLDER REPLACER
    if (!Modernizr.input.placeholder) {
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() === '' || input.val() === input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();

        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            });
        });
    }

    

});