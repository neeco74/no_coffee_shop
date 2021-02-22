$(function () {


    $("nav a").click(function () {
        $("nav a").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass('active');

    });




    (function () {

        var duration = 800

        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .click(function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    //console.log(location.pathname);
                    //console.log(location.hostname);
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
                    //console.log(target);
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault()

                        $('html, body').animate({
                            scrollTop: target.offset().top - 75

                        }, duration);
                    }
                }
            });

    })();
});