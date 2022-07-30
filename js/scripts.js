const scripts = {
    productCarousel(){
        $('.carousel').each(function(){
            $(this).carousel({
                interval: false
            });
        });
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

            // remove all checked ones
            $(".storage input").prop("checked", false);
            $("form .c-btn").addClass("btn-disabled");
            if($(this).parent().find("input").is(":checked")){
                parent.find(".c-btn").addClass("btn-disabled");
                // $(this).parent().find("input").prop("checked",false);
            }else{
                // $(this).parent().find("input").prop("checked",true);
                parent.find(".c-btn").removeClass("btn-disabled");
            }     
        });
    },
    validateForm(){
        $("#validate-form").validate({
            // in 'rules' user have to specify all the constraints for respective fields
            
            rules: {
                fullname: "required",
                mobileNumber: {
                    minlength: 10,
                    required: true,
                    number: true
                },
                city: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                terms: {
                    required: true,
                }
            },
            // in 'messages' user have to specify message as per rules
            messages: {
                fullname: " Please enter your firstname",
                mobileNumber: {
                    required: "Please enter your mobile number",
                    minlength: " Your mobile must consist 10 digits number",
                    number: "Only numbers are allowed"
                },
                city: {
                    required: "Please enter a city name",
                    minlength: " Your city must be consist of at least 4 characters"
                },
                email: {
                    required: "Please enter an email address",
                    email: "Invalid email address"
                },
                terms: "Please accept our terms and condition"
            }
        });
    }
}

$(document).ready(function(){
    scripts.productCarousel();
    scripts.colorVariantSelection();
    scripts.preBookButtonEnable();
    scripts.validateForm();
});