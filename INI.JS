// Función para iniciar sesión
function iniciarSesion(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Verificar las credenciales (simulado)
    if (email === "usuario@example.com" && password === "usuario123") {
        // Usuario autenticado como usuario
        console.log("Inicio de sesión exitoso como usuario");
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userType', 'user');
        window.location.href = "pagina-usuario.html"; // Redirigir a la página de usuario
    } else if (email === "admin@example.com" && password === "contraseñaAdmin") {
        // Usuario autenticado como administrador
        console.log("Inicio de sesión exitoso como administrador");
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userType', 'admin');
        window.location.href = "pagina-admin.html"; // Redirigir a la página de administrador
    } else {
        // Credenciales incorrectas
        console.error("Credenciales incorrectas");
        document.getElementById('error-message').style.display = 'block';
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    // Limpiar los datos del usuario almacenados en el navegador
    console.log("Cierre de sesión exitoso");
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    window.location.href = "index.html"; // Redirigir a la página de inicio
}

// Verificar si el usuario está autenticado antes de mostrar el carrito
function verificarAutenticacion() {
    var isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
        // Mostrar un mensaje de que se requiere iniciar sesión
        alert("Debe iniciar sesión para agregar productos al carrito");
    } else {
        // Mostrar el carrito o permitir agregar productos
        document.getElementById('carrito').style.display = 'block';
    }
}

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    var isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert("Producto agregado al carrito");
    } else {
        alert("Debe iniciar sesión para agregar productos al carrito");
    }
}

document.getElementById('loginForm').addEventListener('submit', iniciarSesion);

// Ejemplo de cómo podrías llamar a la función agregarAlCarrito cuando se hace clic en un botón
// document.querySelector('.boton-agregar').addEventListener('click', function() {
//     agregarAlCarrito('nombre del producto');
// });

