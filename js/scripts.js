const scripts = {
    colorVariantSelection(){
        $(document).on("click",".c-checkbox-color-variant label", function(){
            var title =  $(this).data('title');
            $(this).closest(".c-checkbox-color-variant").prev('label').html(title);
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
    scripts.colorVariantSelection();
    scripts.preBookButtonEnable();
});