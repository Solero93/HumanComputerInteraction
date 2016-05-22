
var electrodomestics = ["aspirador","portatil",
    "plantxa", "afeitadora", "assecador", "cosir","taladradora", "piano", "consola", "processador",
    "altaveus", "extractor", "microones", "aire", "lampara", "ventilador","llum","ordinador"];
var rentadora;
var forn;
var nevera;
var televisio;
var llums;
var aspirador;
var portatil;
var plantxa;
var afeitadora;
var assecador;
var cosir;
var taladradora;
var piano;
var consola;
var processador;
var altaveus;
var extractor;
var microones;
var aire;
var lampara;
var ventilador;
var llum;
var ordinador;

var rentadora_rect;
var afeitadora_rect;
var plantxa_rect;
var aspirador_rect;
var portatil_rect;
var forn_rect;
var nevera_rect;
var televisio_rect;
var llums_rect;
var assecador_rect;
var cosir_rect;
var taladradora_rect;
var piano_rect;
var consola_rect;
var ventilador_rect;
var processador_rect;
var altaveus_rect;
var extractor_rect;
var microones_rect;
var aire_rect;
var lampara_rect;
var llum_rect;
var ordinador_rect;

var fornStatus = false;
var aspiradorStatus = false;
var televisioStatus = false;
var llumsStatus = false;
var neveraStatus = false;
var rentadoraStatus = false;
var afeitadoraStatus = false;
var plantxaStatus = false;
var portatilStatus = false;
var assecadorStatus = false;
var cosirStatus = false;
var taladradoraStatus = false;
var pianoStatus = false;
var consolaStatus = false;
var processadorStatus = false;
var altaveusStatus = false;
var extractorStatus = false;
var microonesStatus = false;
var aireStatus = false;
var lamparaStatus = false;
var ventiladorStatus =  false;
var llumStatus = false;
var ordinadorStatus = false;


$('document').ready(function () {
    console.log( "ready!" );

    //alert("Document loaded, including graphics and embedded documents (like SVG)");
    rentadora = $("#rentadora");
    forn = $("#forn");
    nevera = $("#nevera");
    televisio = $("#televisio");
    llums = $("#llums");
    ordinador = $("#pc");

    portatil = $("#portatil");
    plantxa = $("#plantxa");
    afeitadora = $("#afeitadora");
    assecador = $("#assecador");
    cosir = $("#cosir");
    taladradora = $("#taladradora");
    piano = $("#piano");
    consola = $("#consola");
    processador = $("#processador");
    altaveus = $("#altaveus");
    extractor = $("#extractor");
    microones = $("#microones");
    aire = $("#aire");
    lampara = $("#lampara");
    ventilador =$("#ventilador");
    aspirador =$("#aspirador");
    llum = $("#llum");


    rentadora_rect = $("#rentadora_rect");
    forn_rect = $("#forn_rect");
    nevera_rect = $("#nevera_rect");
    televisio_rect = $("#televisio_rect");
    llums_rect = $("#llums_rect");
    ordinador_rect = $("#ordinador_rect");

    portatil_rect = $("#portatil_rect");
    plantxa_rect = $("#plantxa_rect");
    afeitadora_rect = $("#afeitadora_rect");
    assecador_rect = $("#assecador_rect");
    cosir_rect = $("#cosir_rect");
    taladradora_rect = $("#taladradora_rect");
    piano_rect = $("#piano_rect");
    consola_rect = $("#consola_rect");
    ventilador_rect = $("#ventilador_rect");
    processador_rect = $("#processador_rect");
    altaveus_rect = $("#altaveus_rect");
    extractor_rect = $("#extractor_rect");
    microones_rect = $("#microones_rect");
    aire_rect = $("#aire_rect");
    lampara_rect = $("#lampara_rect");
    aspirador_rect =$("#aspirador_rect");
    llum_rect = $("#llum_rect");

    rentadora.hide();
    forn.hide();
    nevera.hide();
    televisio.hide();
    llums.hide();

    aspirador.hide();
    portatil.hide();
    plantxa.hide();
    afeitadora.hide();
    assecador.hide();
    cosir.hide();
    taladradora.hide();
    piano.hide();
    consola.hide();
    ventilador.hide();
    processador.hide();
    altaveus.hide();
    extractor.hide();
    microones.hide();
    aire.hide();
    lampara.hide();
    ventilador.hide();
    aspirador.hide();
    llum.hide();
    ordinador.hide();

    forn_rect.hide();
    ordinador_rect.hide();
    rentadora_rect.hide();
    forn_rect.hide();
    nevera_rect.hide();
    televisio_rect.hide();
    llums_rect.hide();
    aspirador_rect.hide();
    portatil_rect.hide();
    plantxa_rect.hide();
    afeitadora_rect.hide();
    assecador_rect.hide();
    cosir_rect.hide();
    taladradora_rect.hide();
    piano_rect.hide();
    consola_rect.hide();
    ventilador_rect.hide();
    processador_rect.hide();
    altaveus_rect.hide();
    extractor_rect.hide();
    microones_rect.hide();
    aire_rect.hide();
    lampara_rect.hide();
    ventilador_rect.hide();
    aspirador_rect.hide();
    llum_rect.hide();
});

$('.banySlider').lbSlider({
    leftBtn: '.sa-left-bany',
    rightBtn: '.sa-right-bany',
    visible: 2,
    autoPlay: false
});

$('.salaEstarSlider').lbSlider({
    leftBtn: '.sa-left-salaEstar',
    rightBtn: '.sa-right-salaEstar',
    visible: 2,
    autoPlay: false
});

$('.cuinaSlider').lbSlider({
    leftBtn: '.sa-left-cuina',
    rightBtn: '.sa-right-cuina',
    visible: 2,
    autoPlay: false
});

$('.dormitoriSlider').lbSlider({
    leftBtn: '.sa-left-dormitori',
    rightBtn: '.sa-right-dormitori',
    visible: 2,
    autoPlay: false
});

$('.altresSlider').lbSlider({
    leftBtn: '.sa-left-altres',
    rightBtn: '.sa-right-altres',
    visible: 2,
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
        case "assecador_drag":
            assecador_rect.show();
            break;
        case "afeitador_drag":
            afeitadora_rect.show();
            break;
        case "altaveus_drag":
            altaveus_rect.show();
            break;
        case "organ_drag":
            piano_rect.show();
            break;
        case "consola_drag":
            consola_rect.show();
            break;
        case "aspiradora_drag":
            aspirador_rect.show();
            break;
        case "processador_drag":
            processador_rect.show();
            break;
        case "ordinador_drag":
            ordinador_rect.show();
            break;
        case "llums_drag":
            llums_rect.show();
            break;
        case "taladradora_drag":
            taladradora_rect.show();
            break;
        case "cosir_drag":
            cosir_rect.show();
            break;
        case "aire_drag":
            aire_rect.show();
            break;
        case "ventilador_drag":
            ventilador_rect.show();
            break;
        case "extractor_drag":
            extractor_rect.show();
            break;
        case "microones_drag":
            microones_rect.show();
            break;
        case "plantxa_drag":
            plantxa_rect.show();




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
        case "rentadora_drag":
            rentadora_rect.hide();
            break;
        case "assecador_drag":
            assecador_rect.hide();
            break;
        case "afeitador_drag":
            afeitadora_rect.hide();
            break;
        case "altaveus_drag":
            altaveus_rect.hide();
            break;
        case "organ_drag":
            piano_rect.hide();
            break;
        case "consola_drag":
            consola_rect.hide();
            break;
        case "aspiradora_drag":
            aspirador_rect.hide();
            break;
        case "processador_drag":
            processador_rect.hide();
            break;
         case "ordinador_drag":
            ordinador_rect.hide();
            break;
        case "llums_drag":
            llums_rect.hide();
            break;
        case "taladradora_drag":
            taladradora_rect.hide();
            break;
        case "cosir_drag":
            cosir_rect.hide();
            break;
        case "aire_drag":
            aire_rect.hide();
            break;
        case "ventilador_drag":
            ventilador_rect.hide();
            break;
        case "extractor_drag":
            extractor_rect.hide();
            break;
        case "microones_drag":
            microones_rect.hide();
            break;
        case "plantxa_drag":
            plantxa_rect.hide();

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
}

function drop_nevera(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");
    nevera.show();
    if (objId == "nevera_drag") {
        nevera_rect.hide();
        nevera.show();
        neveraStatus = !neveraStatus;
    }
}

function drop_rentadora(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "rentadora_drag") {
        rentadora_rect.hide();
        rentadora.toggle();
        rentadoraStatus = !rentadoraStatus;
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
        llums.toggle();
        llumsStatus = !llumsStatus;
    }
}


function drop_afeitadora(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "afeitador_drag") {
        afeitadora_rect.hide();
        afeitadora.toggle();
        afeitadoraStatus = !afeStatus;
    }
}
function drop_aspirador(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "aspirador_drag") {
        aspirador_rect.hide();
        aspirador.toggle();
        aspiradorStatus = !aspiradorStatus;
    }
}
function drop_portatil(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "portatil_drag") {
        portatil_rect.hide();
        portatil.toggle();
        portatilStatus = !portatilStatus;
    }
}
function drop_plantxa(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "plantxa_drag") {
        plantxa_rect.hide();
        plantxa.toggle();
        plantxaStatus = !plantxaStatus;
    }
}
function drop_assecador(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "assecador_drag") {
        assecador_rect.hide();
        assecador.toggle();
        assecadorStatus = !assecadorStatus;
    }
}
function drop_cosir(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "cosir_drag") {
        cosir_rect.hide();
        cosir.toggle();
        cosirStatus = !cosirStatus;
    }
}
function drop_taladradora(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "taladradora_drag") {
        taladradora_rect.hide();
        taladradora.toggle();
        taladradoraStatus = !taladradoraStatus;
    }
}
function drop_piano(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "organ_drag") {
        piano_rect.hide();
        piano.toggle();
        pianoStatus = !pianoStatus;
    }
}
function drop_consola(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "consola_drag") {
        consola_rect.hide();
        consola.toggle();
        consolaStatus = !consolaStatus;
    }
}
function drop_processador(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "processador_drag") {
        processador_rect.hide();
        processador.toggle();
        processadorStatus = !processadorStatus;
    }
}
function drop_altaveus(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "altaveus_drag") {
        altaveus_rect.hide();
        altaveus.toggle();
        altaveusStatus = !altaveusStatus;
    }
}
function drop_extractor(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "extractor_drag") {
        extractor_rect.hide();
        extractor.toggle();
        extractorStatus = !extractorStatus;
    }
}
function drop_microones(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "microones_drag") {
        microones_rect.hide();
        microones.toggle();
        microonesStatus = !microonesStatus;
    }
}
function drop_aire(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "aire_drag") {
        aire_rect.hide();
        aire.toggle();
        aireStatus = !aireStatus;
    }
}
function drop_lampara(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "lampara_drag") {
        lampara_rect.hide();
        lampara.toggle();
        lamparaStatus = !lamparaStatus;
    }
}
function drop_ventilador(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "ventilador_drag") {
        ventilador_rect.hide();
        ventilador.toggle();
        ventiladorStatus = !ventiladorStatus;
    }
}
function drop_llum(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "llum_drag") {
        llum_rect.hide();
        llum.toggle();
        llumStatus = !llumStatus;
    }
}
function drop_ordinador(e) {
    // Cancel this event for everyone else
    e.stopPropagation();
    e.preventDefault();

    // Retrieve the dragged data by type
    var objId = e.dataTransfer.getData("objId");

    if (objId == "ordinador_drag") {
        ordinador_rect.hide();
        ordinador.toggle();
        ordinadorStatus = !ordinadorStatus;
    }
}

function onChangeNum(ele){

    var x = document.getElementById(ele).value;
    if(!parseInt(x)){
        switch(ele){
            case("rentadora_num"):
                rentadora.hide();
                break;
            case("forn_num"):
                forn.hide();
                break;
            case("nevera_num"):
                nevera.hide();
                break;
            case("ordinador_num"):
                ordinador.hide();
                break;
            case("extractor_num"):
                extractor.hide();
                break;
            case("televisio_num"):
                televisio.hide();
                break;
            case("aire_num"):
                aire.hide();
                break;
            case("microones_num"):
                microones.hide();
                break;
            case("ventilador_num"):
                ventilador.hide();
                break;
        }

    }



}


