$(document).ready(function () {
    $('#calendar').fullCalendar({
        header: {
            left: 'title',
            center: 'today, sevenDays,nextMonth,month',
            right: 'prev,next'
        },
        defaultView: 'sevenDays',
        views: {
            sevenDays: {
                type: 'list',
                duration: { days:7},
                buttonText: '7 Tage'
            },
            nextMonth: {
                type: 'list',
                duration: { days:30},
                buttonText: '30 Tage'
            }

        },
        height: 600,
        titleFormat: 'DD.MM.YYYY',
        buttonText: {
            today:    'Heute',
            month:    'Monatsansicht',
            week:     'Woche'
        },
        timeFormat: 'H:mm',
        listDayFormat: 'dddd - DD.MM',
        lang: 'de-at',
        locale: 'de-at',
        displayEventTime: true,
        eventClick: function(event) {
            if (event.url) {
                return false;
            }
        },
        loading: function (bool) {
            $('#loading').toggle(bool);
        },
        googleCalendarApiKey: 'AIzaSyDRXfsomJA_mwFwi_6K904btZgxbWitjtE',
        events: 'i0ok125krqquuqlb2uebaqvuf0@group.calendar.google.com'
    });

});


$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();

        });
    });

});