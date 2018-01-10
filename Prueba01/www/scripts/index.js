// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    //desarrollo
    // document.getElementById("btnBuscar").addEventListener('click', BuscarUsuario, false);
    // document.getElementById("btnCargar").addEventListener('click', CargarLista, false);

    function onDeviceReady() {
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
        //Produccion
        document.getElementById("btnBuscar").addEventListener('click', BuscarUsuario, false);
        document.getElementById("btnCargar").addEventListener('click', CargarLista, false);

        //var parentElement = document.getElementById('deviceready');
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

    function CargarLista() {
        var cadena = "<table border=0 cellpadding=2 cellspacing=0><tr><th>ID</th><th>Mensaje</th>";

        $.ajax({
            type: "GET",
            url: "http://Gestion1Prueba.somee.com/api/MessagesApi/",
            crossDomain: true,
            cache: false,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, field) {
                    cadena = cadena + "<tr>" + "<td>" + field.MessageID + "</td><td>" + field.Descripcion + "</td>";
                });
                cadena = cadena + "</table>";
                $("#divLista").append(cadena);
            },
            error: function (data) {
                alert("Ocurrio un problema");
            }
        })
    };

    function BuscarUsuario() {
        var id = document.getElementById("txtNombre").value;
        if (id == "") {
            alert("Ingrese un id");
        }
        else {
            $.ajax({
                type: "GET",
                url: "http://Gestion1Prueba.somee.com/api/MessagesApi/" + id,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    document.getElementById("divResultado").innerHTML = "Mensaje : " + data.Descripcion;
                },
                error: function (data) {
                    alert("Ocurrio un problema");
                }
            })
        }
    }

})();