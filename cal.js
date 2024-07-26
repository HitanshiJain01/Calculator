$(document).ready(function () {
    $('.calc-btn').on('click', function () {
        $('.result').val($('.result').val() + $(this).html());
    });

    $('.equal').on('click', function () {
        exp = $('.result').val();
        if (exp.includes('X')) {
            exp = exp.replace('X', '*');
        }
        $('.result').val(eval(exp));
    });

    $('.clear').on('click', function () {
        $('.result').val('');
    });

    $('.back').on('click', function () {
        ex = $('.result').val();
        $('.result').val(exp.substring(0, ex.length - 1));
    });
});



/*
    ready() :-> specifies a function to execute when the DOM is fully loaded
    
    on()    :-> attach event handlers to elements

    html()  :-> return or set the content of selected elements

    val()   :-> return or set the value attribute of the selected elemens

    length  :-> contains the number of elements in the jQuery object

    exp()   :-> this method returns the value of Ex E is Euler's numbers appx 2.7183

    replace()   :-> replace the old value to the new value

    includes()  :-> its a case sentive method 
                    if it contains a specified string it will return true otherwise false

    substring() :-> method extracts characters, between two indices (positions), from a string, and returns the substring.
 */