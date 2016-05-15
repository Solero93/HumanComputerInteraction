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
var rentadoraStatus = false;


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
    
    /* We assume the user has created the home for now
    rentadora.hide();
    forn.hide();
    nevera.hide();
    televisio.hide();
    llums.hide();
    */
    
});

