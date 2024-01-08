function generarContrasena() {
    var longitud = document.getElementById("longitud").value;
    if (longitud >= 6 && longitud <= 20) {
        var caracteres =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        var contrasena = "";

        for (var i = 0; i < longitud; i++) {
            var caracterAleatorio =
                caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            contrasena += caracterAleatorio;
        }

        document.getElementById("contrasenaGenerada").innerHTML = "<strong>Tu nueva contraseña es:</strong> " + contrasena;
    } else {
        document.getElementById("contrasenaGenerada").innerHTML = "<span style='color: red;'>Ingresa una longitud válida (entre 6 y 20).</span>";
    }
}