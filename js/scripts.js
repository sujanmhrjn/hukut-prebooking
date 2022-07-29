const scripts = {
    productCarousel(){
        $('.carousel').carousel({
            interval: false
          })
    },
    colorVariantSelection(){
        $(document).on("click",".c-checkbox-color-variant button", function(){
            var title =  $(this).data('title');
            var value =  $(this).data('value');
            var label =  $(this).closest('.c-checkbox-color-variant').find(".variant-label");
            var target =  $(this).closest('.c-checkbox-color-variant').find(".variant-value");
            label.text(title);
            target.val(value);
            // $(this).closest(".c-checkbox-color-variant").prev('label').html(title);
        })
    },

    preBookButtonEnable(){
        var inputs =  $(document).find(".storage").children('input');
        for(var i = 0; i < inputs.length; i++){
            var parent = inputs.eq(i).closest("form");
            if(inputs.eq(i).is(":checked")){

                var parent = $(this).closest("form");
                parent.find(".c-btn").removeClass("btn-disabled");
            }else{
            
                parent.find(".c-btn").addClass("btn-disabled");
            }
        };

        $(document).on("click",".storage label", function(){
            
            var parent =  $(this).closest("form");
            if($(this).parent().find("input").is(":checked")){
                parent.find(".c-btn").addClass("btn-disabled");
            }else{
                parent.find(".c-btn").removeClass("btn-disabled");
            }
     
        });
    }
}

$(document).ready(function(){
    scripts.productCarousel();
    scripts.colorVariantSelection();
    scripts.preBookButtonEnable();
});