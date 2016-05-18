var rentadora;
var forn;
var nevera;
var televisio;
var llums;

var rentadora_rect;
var forn_rect;
var nevera_rect;
var televisio_rect;
var llums_rect;

var info_div;

$('document').ready(function () {
    //alert("Document loaded, including graphics and embedded documents (like SVG)");
    rentadora = $("#rentadora");
    forn = $("#forn");
    nevera = $("#nevera");
    televisio = $("#televisio");
    llums = $("#llums");

    rentadora_rect = $("#rentadora_rect");
    forn_rect = $("#forn_rect");
    nevera_rect = $("#nevera_rect");
    televisio_rect = $("#televisio_rect");
    llums_rect = $("#llums_rect");
    $(".selectable").click(function (event) {
        display_info("#" + $(this).attr("id"));
    });

    info_div = $("#electronics_info");
    info_div.hide();

    // Sliders setup
    $("#day_usage_slider").slider({
        orientation: "vertical",
        value: 0,
        min: 0,
        max: 3
    });
    $("#night_usage_slider").slider({
        orientation: "vertical",
        value: 2,
        min: 0,
        max: 3
    });
    
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
    console.log(electronics_rect + " " + electronics_id);
    $(electronics_rect).addClass("selected").removeClass("selectable");
    console.log($(electronics_rect).attr("class"));
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

