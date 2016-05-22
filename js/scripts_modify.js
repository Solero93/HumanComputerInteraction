var rentadora;
var forn;
var nevera;
var televisio;
var llums;

var info_div;
var day_slider, night_slider;
var consumption_rate_input;

$('document').ready(function () {
    //alert("Document loaded, including graphics and embedded documents (like SVG)");
    rentadora = $("#rentadora");
    forn = $("#forn");
    nevera = $("#nevera");
    televisio = $("#televisio");
    llums = $("#llums");
    $(".selectable").click(function (event) {
        display_info("#" + $(this).attr("id"));
    });
    
    info_div = $("#info_screen");

    // Default info
    rentadora.data({
        "name": "Rentadora",
        "day_usage": 2,
        "night_usage": 1,
        "consumption_rate": 55
    });
    forn.data({
        "name": "Forn",
        "day_usage": 2,
        "night_usage": 1,
        "consumption_rate": 55
    });
    nevera.data({
        "name": "Nevera",
        "day_usage": 2,
        "night_usage": 1,
        "consumption_rate": 55
    });
    televisio.data({
        "name": "Televisió",
        "day_usage": 2,
        "night_usage": 1,
        "consumption_rate": 55
    });
    llums.data({
        "name": "Llums",
        "day_usage": 2,
        "night_usage": 1,
        "consumption_rate": 55
    });

    // Sliders setup
    day_slider = $("#day_usage_slider");
    day_slider.slider({
        orientation: "vertical",
        value: 1,
        min: 0,
        max: 3
    });

    night_slider = $("#night_usage_slider");
    night_slider.slider({
        orientation: "vertical",
        value: 2,
        min: 0,
        max: 3
    });

    $("#close_button").click(function (event) {
        info_div.hide();
        $('#default_screen').show();
        var previous_device = info_div.data("device") + '_rect';
        $(previous_device).addClass('selectable').removeClass('selected');
        info_div.data("device", null);
    });

    $("#save_button").click(function () {
        var confirmation = $("#confirmation");
        confirmation.show();
        confirmation.fadeOut(5000);
    });
    // Consumption rate input box setup
    consumption_rate_input = $("#consumption_rate");
    consumption_rate_input.focusout(function () {
        var value = $(this).val();
        $(this).attr('placeholder', "~" + value + "kWh");
        $(this).val(null);
    }).focusin(function () {
        var value = $(this).attr('placeholder');
        value = value.substr(1, value.length - 4);
        $(this).val(value).select();
    }).keypress(function (event) {
        if (event.which == 13) {
            $(this).blur();
        }
    });

    $("#confirmation").hide();
    info_div.data("device", null);
    info_div.hide();
});

function display_info(electronics_rect) {
    var consumption_rate, day_usage, night_usage;
    var previous_device = info_div.data("device");
    // Parche mu cutre, lo se, pero todos los aparatos acaban con '_rect'
    var electronics_id = electronics_rect.substring(0, electronics_rect.length - 5);
    if (previous_device === electronics_id) {
        return;
    }
    // In the case where we already are editing/viewing an object
    if (previous_device !== null) {
        // Save the data
        day_usage = day_slider.slider('value');
        night_usage = night_slider.slider('value');
        consumption_rate = consumption_rate_input.attr('placeholder');
        consumption_rate = consumption_rate.substr(1, consumption_rate.length - 4);
        $(previous_device).data({"day_usage": day_usage, "night_usage": night_usage, "consumption_rate": consumption_rate});
        // Deselect the device
        $(previous_device + "_rect").removeClass("selected").addClass("selectable");
    // Otherwise, we replace the column with the info screen
    } else {
        $("#default_screen").hide();
    }
    $(electronics_rect).addClass("selected").removeClass("selectable");
    // Guardamos el id para futuro uso en caso que el usuario seleccione algo más
    info_div.data("device", electronics_id);
    var device = $(electronics_id);
    var name = device.data("name");
    consumption_rate = device.data("consumption_rate");
    day_usage = device.data("day_usage");
    night_usage = device.data("night_usage");
    $("#device_name").text(name);
    consumption_rate_input.attr("placeholder", "~" + consumption_rate + "kWh");
    day_slider.slider('value', day_usage);
    night_slider.slider('value', night_usage);
    info_div.show();
}

