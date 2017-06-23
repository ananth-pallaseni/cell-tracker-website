/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


function appendNavbar() {
    var navhtml = `
    <!-- Navigation -->
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                 <span class="light">HOME</span> 
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <li id="summary-nav-btn">
                        <a  class="page-scroll" href="summary.html">Summary</a>
                    </li>
                    <li id="segmentation-nav-btn">
                        <a  class="page-scroll" href="segmentation.html">Segmentation</a>
                    </li>
                    <li id="analysis-nav-btn">
                        <a  class="page-scroll" href="analysis.html">Analysis</a>
                    </li>
                    <li id="reference-nav-btn">
                        <a  class="page-scroll" href="references.html">References</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    `;

    $('body').append(navhtml);

    var title = $(document).attr('title');
    if (title == 'Segmentation') {
        $('#segmentation-nav-btn').addClass('active').children().attr('href', '#page-top');
    }
    else if (title == 'Summary') {
        $('#summary-nav-btn').addClass('active').children().attr('href', '#page-top');
    }
    else if (title == 'Analysis') {
        $('#analysis-nav-btn').addClass('active').children().attr('href', '#page-top');
    }
    else if (title == 'References') {
        $('#reference-nav-btn').addClass('active').children().attr('href', '#page-top');
    }
}

appendNavbar();

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});


// Makes all columns inside a row the same height
(function() {
    $(function() {
        $('[class*="col-"]').matchHeight();
    });
    console.log('qqqqqqq')
})();