document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    window.agregarAlCarrito = function(producto) {
        if (!isAuthenticated) {
            alert('Debe iniciar sesión para agregar productos al carrito.');
            window.location.href = 'Iniciar_Sesión.html';
            return;
        }
        
        carrito.push(producto);
        mostrarMensajeCarrito();
        actualizarCarrito();
    }

    function actualizarCarrito() {
        const listaCarrito = document.getElementById('lista-carrito');
        listaCarrito.innerHTML = '';

        carrito.forEach((producto, index) => {
            const li = document.createElement('li');
            li.textContent = producto;
            listaCarrito.appendChild(li);
        });
    }

    window.vaciarCarrito = function() {
        carrito.length = 0;
        actualizarCarrito();
    }

    function mostrarMensajeCarrito() {
        const mensajeCarrito = document.getElementById('mensaje-carrito');
        mensajeCarrito.style.display = 'block';
        setTimeout(() => {
            mensajeCarrito.style.display = 'none';
        }, 3000);
    }

    window.irAlCarrito = function() {
        document.getElementById('carrito').scrollIntoView();
    }
});
