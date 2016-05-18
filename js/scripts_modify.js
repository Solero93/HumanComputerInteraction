var rentadora;
var forn;
var nevera;
var televisio;
var llums;

var info_div;

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

    info_div = $("#electronics_info");

    // Sliders setup
    var slider = $("#day_usage_slider").slider({
        orientation: "vertical",
        value: 1,
        min: 0,
        max: 3
    });

    $("#night_usage_slider").slider({
        orientation: "vertical",
        value: 2,
        min: 0,
        max: 3
    });

    $("#default_screen").hide();
});

function display_info(electronics_rect) {
    var previous_device = info_div.data("device");
    // Parche mu cutre, lo se, pero todos los aparatos acaban con '_rect'
    var electronics_id = electronics_rect.substring(0, electronics_rect.length - 5);
    if (previous_device === electronics_id) {
        return;
    }
    if (previous_device !== undefined) {
        // TODO: Guardar datos
        $(previous_device + "_rect").removeClass("selected").addClass("selectable");
    } else {
        $("#default_screen").hide();
    }
    $(electronics_rect).addClass("selected").removeClass("selectable");
    // Guardamos el id para futuro uso en caso que el usuario seleccione algo más
    info_div.data("device", electronics_id);
    var device = $(electronics_id);
    var name = device.data("name");
    var consumption_rate = device.data("consumption_rate");
    var day_usage = device.data("day_usage");
    var night_usage = device.data("night_usage");
    $("#device_name").text(name);
    $("#consumption_rate").text("~" + consumption_rate + "kWh");
    //$("#day_usage_slider").slider("value", day_usage);
    //$("#night_usage_slider").slider("value", night_usage);
    info_div.show();
}

