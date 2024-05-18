// Cambiar de categoría de productos
function cambiarCategoria(categoria) {
    const productos = document.getElementById('productos');
    productos.innerHTML = ''; // Limpiar productos anteriores

    let nuevosProductos;

    switch (categoria) {
        case 'cables':
            nuevosProductos = [
                {
                    titulo: 'Cable de Guitarra',
                    descripcion: 'Un cable de guitarra de alta calidad que asegura una excelente transmisión de sonido.',
                    imagen: 'images/cable_guitarra.jpg'
                },
                {
                    titulo: 'Cable de Micrófono',
                    descripcion: 'Cable balanceado para micrófonos, ideal para estudio y escenario.',
                    imagen: 'images/cable_microfono.jpg'
                }
            ];
            break;
        case 'soportes':
            nuevosProductos = [
                {
                    titulo: 'Soporte de Micrófono',
                    descripcion: 'Soporte ajustable y robusto para todo tipo de micrófonos.',
                    imagen: 'images/soporte_microfono.jpg'
                },
                {
                    titulo: 'Soporte de Guitarra',
                    descripcion: 'Soporte plegable y portátil para guitarras acústicas y eléctricas.',
                    imagen: 'images/soporte_guitarra.jpg'
                }
            ];
            break;
        // Agrega más categorías según sea necesario
        case 'pedales':
            nuevosProductos = [
                {
                    titulo: 'Pedal de Efectos',
                    descripcion: 'Pedal de distorsión con múltiples efectos y configuraciones.',
                    imagen: 'images/pedal_efectos.jpg'
                },
                {
                    titulo: 'Pedal Wah-Wah',
                    descripcion: 'Pedal de expresión para guitarristas que desean un sonido clásico.',
                    imagen: 'images/pedal_wah.jpg'
                }
            ];
            break;
        case 'fundas':
            nuevosProductos = [
                {
                    titulo: 'Funda de Guitarra',
                    descripcion: 'Funda acolchada para proteger tu guitarra durante el transporte.',
                    imagen: 'images/funda_guitarra.jpg'
                },
                {
                    titulo: 'Funda de Teclado',
                    descripcion: 'Funda resistente al agua para teclados de hasta 61 teclas.',
                    imagen: 'images/funda_teclado.jpg'
                }
            ];
            break;
        case 'otros':
            nuevosProductos = [
                {
                    titulo: 'Afinador Electrónico',
                    descripcion: 'Afinador cromático para guitarra y bajo, con clip para sujetar.',
                    imagen: 'images/afinador.jpg'
                },
                {
                    titulo: 'Capo para Guitarra',
                    descripcion: 'Capo de alta calidad para guitarras acústicas y eléctricas.',
                    imagen: 'images/capo.jpg'
                }
            ];
            break;
        default:
            nuevosProductos = [];
    }

    // Añadir nuevos productos al DOM
    nuevosProductos.forEach(producto => {
        const equipoDiv = document.createElement('div');
        equipoDiv.className = 'equipo';
        equipoDiv.innerHTML = `
            <div class="equipo-info">
                <h4>${producto.titulo}</h4>
                <p>${producto.descripcion}</p>
            </div>
            <div class="equipo-img">
                <img src="${producto.imagen}" alt="${producto.titulo}">
            </div>
        `;
        productos.appendChild(equipoDiv);
    });
}
