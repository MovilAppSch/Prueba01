// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";
 
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    //document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
     
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
        new $.nd2Search({
            placeholder: "Buscar",   // Placeholder in the search field
            defaultIcon: "globe-alt",  // optional: icon | null
            source: [{ label: 'Displayed Value', value: 'real-value', icon: 'custom-icon' }],   // autocomplete : option-source
            fn: function (result) { // this function will be executed when a valid result item is selected
                console.log('--- Your custom handling ---');
                console.log('you picked: ');
                console.log(result);
            }
        });
    };
    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.

    };
} )();