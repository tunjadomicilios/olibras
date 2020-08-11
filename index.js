document.querySelector('#enviar').addEventListener('click', function () {

    let nombre = document.querySelector('#nombre').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let cantidad = document.querySelector('#cantidad').value;
    let adicionales = document.querySelector('#adicionales').value;
    let pedido = document.querySelector('#pedido').value;


    if (nombre === "" || telefono === "" || direccion === "" || cantidad === "") {
        alert("por favor Completa todos los campos")
        return null;
    } else {
        let url = "https://api.whatsapp.com/send?phone=573136191546&text=*Olibrasas*%0A*Pedidos*%0A%0A*¿Cual es tu nombre?*%0A" + nombre + "%0A*tu telefono:*%0A" + telefono + "%0A*Dirección:*%0A" + direccion + "%0A*Mi Pedido:*%0A" + cantidad + "-" + pedido + " %0A*Adicionales:*%0A" + adicionales + "%0A*si todo lo anterior es correcto por favor espera nuestra confirmacion*%0A";
        window.open(url);
    }


});