document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos();

    document.getElementById('productoForm').addEventListener('submit', function(event) {
        event.preventDefault();
        guardarProducto();
    });
});

function mostrarProductos() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const tabla = document.getElementById('productosTabla').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    productos.forEach((producto, index) => {
        const fila = tabla.insertRow();
        fila.insertCell(0).innerText = producto.nombre;
        fila.insertCell(1).innerText = producto.descripcion;
        const imgCell = fila.insertCell(2);
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.style.width = '100px';
        imgCell.appendChild(img);

        const accionesCell = fila.insertCell(3);
        const editarBtn = document.createElement('button');
        editarBtn.innerText = 'Editar';
        editarBtn.onclick = function() {
            mostrarFormularioEditar(index);
        };
        accionesCell.appendChild(editarBtn);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.innerText = 'Eliminar';
        eliminarBtn.onclick = function() {
            eliminarProducto(index);
        };
        accionesCell.appendChild(eliminarBtn);
    });
}

function mostrarFormularioAgregar() {
    document.getElementById('formularioProducto').style.display = 'block';
    document.getElementById('formularioTitulo').innerText = 'Agregar Producto';
    document.getElementById('productoForm').reset();
    document.getElementById('productoForm').onsubmit = function(event) {
        event.preventDefault();
        guardarProducto();
    };
}

function mostrarFormularioEditar(index) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productos[index];

    document.getElementById('formularioProducto').style.display = 'block';
    document.getElementById('formularioTitulo').innerText = 'Editar Producto';
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('imagen').value = producto.imagen;
    document.getElementById('productoForm').onsubmit = function(event) {
        event.preventDefault();
        actualizarProducto(index);
    };
}

function guardarProducto() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const nuevoProducto = {
        nombre: document.getElementById('nombre').value,
        descripcion: document.getElementById('descripcion').value,
        imagen: document.getElementById('imagen').value
    };
    productos.push(nuevoProducto);
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarProductos();
    document.getElementById('formularioProducto').style.display = 'none';
}

function actualizarProducto(index) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos[index] = {
        nombre: document.getElementById('nombre').value,
        descripcion: document.getElementById('descripcion').value,
        imagen: document.getElementById('imagen').value
    };
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarProductos();
    document.getElementById('formularioProducto').style.display = 'none';
}

function eliminarProducto(index) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.splice(index, 1);
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarProductos();
}

function cancelarFormulario() {
    document.getElementById('formularioProducto').style.display = 'none';
}

function cerrarSesion() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    window.location.href = 'index.html';
}


