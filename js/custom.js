(function() {
    $('input:not([type="checkbox"])').focus(function(e) {
        createTooltip($(this));
        console.log(e);
    });
    
    function createTooltip(context) {
        context.after('<div class="tooltip">My tooltip</div>');
    }   

    function validation() {       
        var correct = true;

        $.each($('input:not([type="checkbox"])'), function(){



            if($.trim($(this).val()) === '') {
                $(this).after('<p>This field is required!</p>');
                correct = false;
                return;
            }    



            if($.trim($(this).val()) === '') {
                correct = false;
            }             
        });

        return correct;
            
    }  

    // $('[type="checkbox"]').click(function(){
    //     if($(this).prop('checked')) {
    //         $('button').prop('disabled', false);
    //     } else {
    //         $('button').prop('disabled', true);
    //     }
    // }); 

    $('button').click(function() {

        $('form p').remove();

        if(validation()) {
            $('button').after("<h1>Everything OK!!!</h1>");
        }
    }); 

    var i;

    for(i = 0; i < ($('input:not([type="checkbox"])').length); i++) {
        if( $('input:not([type="checkbox"])')[3].val() === '') {

        }
    }

})();