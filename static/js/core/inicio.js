document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.producto-click');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const imagen = this.dataset.imagen || '';
            document.getElementById('inicioModalNombre').textContent = this.dataset.nombre || 'Detalle del producto';
            document.getElementById('inicioModalCategoria').textContent = this.dataset.categoria || '';
            document.getElementById('inicioModalCodigo').textContent = this.dataset.codigo || '';
            document.getElementById('inicioModalDetalle').textContent = this.dataset.detalle || '';
            document.getElementById('inicioModalStock').textContent = this.dataset.stock || '0';
            document.getElementById('inicioModalPrecioUsd').textContent = this.dataset.precioUsd || '0';
            document.getElementById('inicioModalPrecioBs').textContent = this.dataset.precioBs || '0';

            const img = document.getElementById('inicioModalImagen');
            if (imagen) {
                img.src = imagen;
            } else {
                img.src = 'https://via.placeholder.com/600x400?text=Sin+Imagen';
            }
        });
    });
});
