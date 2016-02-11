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

var fornStatus = false;
var televisioStatus = false;
var llumsStatus = false;
var neveraStatus = false;


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

    rentadora.hide();
    forn.hide();
    nevera.hide();
    televisio.hide();
    llums.hide();

    rentadora_rect.hide();
    forn_rect.hide();
    nevera_rect.hide();
    televisio_rect.hide();
    llums_rect.hide();
});

$('.banySlider').lbSlider({
    leftBtn: '.sa-left-bany',
    rightBtn: '.sa-right-bany',
    visible: 3,
    autoPlay: false
});

$('.salaEstarSlider').lbSlider({
    leftBtn: '.sa-left-salaEstar',
    rightBtn: '.sa-right-salaEstar',
    visible: 3,
    autoPlay: false
});

$('.cuinaSlider').lbSlider({
    leftBtn: '.sa-left-cuina',
    rightBtn: '.sa-right-cuina',
    visible: 3,
    autoPlay: false
});

$('.dormitoriSlider').lbSlider({
    leftBtn: '.sa-left-dormitori',
    rightBtn: '.sa-right-dormitori',
    visible: 3,
    autoPlay: false
});

$('.altresSlider').lbSlider({
    leftBtn: '.sa-left-altres',
    rightBtn: '.sa-right-altres',
    visible: 3,
    autoPlay: false
});

function dragStart(e) {
    var objId = e.target.getAttribute("id");
    // Sets the operation allowed for a drag source
    e.dataTransfer.effectAllowed = "move";

    // Sets the value and type of the dragged data
    e.dataTransfer.setData("objId", objId);

    switch (objId) {
        case "forn_drag":
            forn_rect.show();
            break;

        case "televisio_drag":
            televisio_rect.show();
            break;
        case "nevera_drag":
            nevera_rect.show();
            break;
        case "rentadora_drag":
            rentadora_rect.show();
            break;
        case "llums_drag":
            llums_rect.show();
            break;


    }
}

function dragOver(e) {
    // Prevent the browser default handling of the data
    e.preventDefault();
    e.stopPropagation();
}

function drop(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    switch (objId) {
        case "forn_drag":
            forn_rect.hide();
            break;

        case "televisio_drag":
            televisio_rect.hide();
            break;
        case "nevera_drag":
            nevera_rect.hide();
            break;
    }
}

function drop_televisio(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "televisio_drag") {
        televisio_rect.hide();
        televisio.toggle();
        televisioStatus = !televisioStatus;
    }
}

function drop_forn(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "forn_drag") {
        forn_rect.hide();
        forn.toggle();
        fornStatus = !fornStatus;
    }

    function drop_nevera(e) {
        // Cancel this event for everyone else
        e.stopPropagation();
        e.preventDefault();

        // Retrieve the dragged data by type
        var objId = e.dataTransfer.getData("objId");

        if (objId == "nevera_drag") {
            nevera_rect.hide();
            nevera.toggle();
            neveraStatus = !neveraStatus;
        }
    }

    function drop_rentadora(e) {
        // Cancel this event for everyone else
        e.stopPropagation();
        e.preventDefault();

        // Retrieve the dragged data by type
        var objId = e.dataTransfer.getData("objId");

        if (objId == "nevera_drag") {
            nevera_rect.hide();
            nevera.toggle();
            neveraStatus = !neveraStatus;
        }
    }

    function drop_llums(e) {
        // Cancel this event for everyone else
        e.stopPropagation();
        e.preventDefault();

        // Retrieve the dragged data by type
        var objId = e.dataTransfer.getData("objId");

        if (objId == "llums_drag") {
            llums_rect.hide();
            forn.toggle();
            llumsStatus = !llumsStatus;
        }
    }

}

