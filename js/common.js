$(document).ready(function () {
    // language nav
    $('.intl').click(function () {
        $('.regions').slideToggle(500);
    });
    // get window width.
    var window_width = $(window).width();
    // main nav dropdown
    $('nav li a').mouseenter(function () {
        $(this).next('.child').addClass('active');
    });
    $('.dropdown').mouseleave(function () {
        $('.child').removeClass('active');
    });
    // mobile nav toggle
    $('.navToggle').click(function () {
        $('nav').slideToggle(300);
    });
    $(window).on("resize", function () {
        if ($(window).width() > 908) {
            $('nav').show();
        } else {
            $('nav').hide();
        }
        if ($(window).width() <+ 701) {
            $('header span.glyphicon').removeClass('glyphicon-globe');
            $('header span.glyphicon').addClass('glyphicon-chevron-down');
        }
        if ($(window).width() > 701) {
            $('header span.glyphicon').removeClass('glyphicon-chevron-down');
            $('header span.glyphicon').addClass('glyphicon-globe');
        }

    });

});

// Get URL Parameters
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Define UTM Variables
var utm_source = getParameterByName('utm_source');
var utm_medium = getParameterByName('utm_medium');
var utm_content = getParameterByName('utm_content');
var utm_campaign = getParameterByName('utm_campaign');
var utm_name = getParameterByName('utm_name');
var utm_term = getParameterByName('utm_term');
// Preload UTM Data for Elq Forms
$(document).ready(function () {
    $('input[name="elq_utm_source"]').attr('value', utm_source);
    $('input[name="elq_utm_medium"]').attr('value', utm_medium);
    $('input[name="elq_utm_content"]').attr('value', utm_content);
    $('input[name="elq_utm_campaign"]').attr('value', utm_campaign);
    $('input[name="elq_utm_name"]').attr('value', utm_name);
    $('input[name="elq_utm_term"]').attr('value', utm_term);
});

// Carryover
$(document).ready(function () {
    // Flip Tiles
    $('.tile').hover(function () {
        $(this).addClass('flip');
    }, function () {
        $(this).removeClass('flip');
    });
    
		// Pricing
    // define partner attribution Variables
    var srid = getParameterByName('srid');
    var ror = getParameterByName('ror');
    /* toggle product displays */
    $('#toggleCloud').click(function(){
        $('.cloudOnly').css('display','none');
        $('.notCloud').css('display', 'block');
        location.hash = "apH2";
    });
    $('#togglePrem').click(function () {
        $('.cloudOnly').css('display', 'block');
        $('.notCloud').css('display', 'none');
        location.hash = "apcH2";
    });

    /* toggle product displays */
    $('#togglePrem2').click(function () {
        $('.prem').css('display', 'block');
        $('.premCloud').css('display', 'none');
        $('.pro').css('display', 'none');
        $('#togglePrem2').addClass('active');
        $('#toggleCloud2').removeClass('active');
        $('#togglePro').removeClass('active');
        //location.hash = "apH2";
    });
    $('#toggleCloud2').click(function () {
        $('.premCloud').css('display', 'block');
        $('.prem').css('display', 'none');
        $('.pro').css('display', 'none');
        $('#togglePrem2').removeClass('active');
        $('#toggleCloud2').addClass('active');
        $('#togglePro').removeClass('active');
        //location.hash = "apcH2";
    });
    $('#togglePro').click(function () {
        $('.premCloud').css('display', 'none');
        $('.prem').css('display', 'none');
        $('.pro').css('display', 'block');
        $('#togglePrem2').removeClass('active');
        $('#toggleCloud2').removeClass('active');
        $('#togglePro').addClass('active');
        //location.hash = "aproH2";
    });

    /* change pricing term and destination */
    //cloud
    $('#cloudBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremiumCloud/plan/Annual?srid=' + srid + '&ror=' + ror + '');
    $('#cloudFreq').change(function () {
        var cloudVal = $('#cloudFreq').val();
        if (cloudVal == "monthly"){
            $('#cloudPrice').html('<span class="usd">$</span>42');
            $('#cloudBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremiumCloud/plan/Month?srid=' + srid + '&ror=' + ror + '');
        }
        else {
            $('#cloudPrice').html('<span class="usd">$</span>35');
            $('#cloudBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremiumCloud/plan/Annual?srid=' + srid + '&ror=' + ror + '');
        }
    });
    //prem
    $('#premBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremium/plan/Month?srid=' + srid + '&ror=' + ror + '');
    $('#premFreq').change(function () {
        var premVal = $('#premFreq').val();
        if (premVal == "annual") {
            $('#premPrice').html('<span class="usd">$</span>250');
            $('#premPriceU').html('<span class="usd">$</span>190');
            $('#premTerm').html('USD/user');
            $('#premBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremium/plan/Annual?srid=' + srid + '&ror=' + ror + '');
        }
        else if (premVal == "license") {
            $('#premPrice').html('<span class="usd">$</span>500');
            $('#premPriceU').html('<span class="usd">$</span>380');
            $('#premTerm').html('USD/user');
            $('#premBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremium/plan/Annual?per=true&srid=' + srid + '&ror=' + ror + '');
        }
        else {
            $('#premPrice').html('<span class="usd">$</span>25');
            $('#premTerm').html('USD/user/month');
            $('#premBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremium/plan/Month?srid=' + srid + '&ror=' + ror + '');
        }
    });
		$('#proBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/actpro/plan/perpetual?srid=' + srid + '&ror=' + ror + '');
    
		// KM tracking on buy click
    $('#cloudBuy').click(function () {
        var term = $('#cloudFreq').val();
        _kmq.push(["record", "buyClick", [term]]);
    });
    $('#premBuy').click(function () {
        var term = $('#premFreq').val();
        _kmq.push(["record", "buyClick", [term]]);
    });

    // KM tracking blue CTA
    $('.pageBottomTrialCTA').click(function () {
        _kmq.push(["record", "Initiated Trial", ["Page Bottom CTA Blue"]]);
    });

    // Submit forms to 3rd Party
    $('#form1').removeAttr('runat');
    $('#form1').removeAttr('action');
    $('#form1').removeAttr('method');
    // enewsletter (footer)
    $('#enews_button').click(function () {
        $('input[name=elqFormName]').attr('value', 'emailsubscribehome')
        $('input[name=LeadSource]').attr('value', 'LCRMAA0001WQ')
        $('#form1').attr('action', 'https://s1966950654.t.eloqua.com/e/f2');
        $('#form1').attr('method', 'post');
        $('#form1').submit();
    })
    // partner application
    $('#acc_apply_button').click(function () {
        $('input[name=elqFormName]').attr('value', 'ACCSelect')
        $('input[name=LeadSource]').attr('value', 'LCRMAA0001X3')
        $('#form1').attr('action', 'https://s1966950654.t.eloqua.com/e/f2');
        $('#form1').attr('method', 'post');
        $('#form1').submit();
    })

    // Product page navigation
    // Set the first tab to active as the default
    $('#nav_contact_manage').addClass('active');

    // If a link is clicked take away the active class from the existing and make the new one active
    $('.rounded_page_nav a').click(function () {
        $('.rounded_page_nav a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.rounded_page_nav a').click(function() {
        hideContentDivs();
        var tmp_div = $(this).parent().index();
        $('.tab_content').eq(tmp_div).show();
    });

    function hideContentDivs(){
        $('.tab_content').each(function() {
            $(this).hide();
        });
    }
    hideContentDivs();
    $('.tab_content').first().show();

});