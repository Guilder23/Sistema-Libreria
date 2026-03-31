document.addEventListener('DOMContentLoaded', function () {
    const inputBuscar = document.getElementById('buscar');
    const filtroEstado = document.getElementById('estado');
    const verButtons = document.querySelectorAll('.btn-ver-producto');
    const editarButtons = document.querySelectorAll('.btn-editar-producto');
    const eliminarButtons = document.querySelectorAll('.btn-eliminar-producto');

    function aplicarFiltros() {
        const termino = (inputBuscar?.value || '').toLowerCase().trim();
        const estado = (filtroEstado?.value || '').toUpperCase().trim();
        const filas = document.querySelectorAll('.tabla-productos tbody tr');

        filas.forEach(function (fila) {
            const texto = fila.textContent.toLowerCase();
            const estadoFila = fila.querySelector('.badge-estado')?.textContent.trim().toUpperCase() || '';
            const coincideTexto = !termino || texto.includes(termino);
            const coincideEstado = !estado || estadoFila === estado;
            fila.style.display = (coincideTexto && coincideEstado) ? '' : 'none';
        });
    }

    inputBuscar?.addEventListener('input', aplicarFiltros);
    filtroEstado?.addEventListener('change', aplicarFiltros);

    verButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.getElementById('verNombre').textContent = this.dataset.nombre || '';
            document.getElementById('verCodigo').textContent = this.dataset.codigo || '';
            document.getElementById('verDetalle').textContent = this.dataset.detalle || '';
            document.getElementById('verCategoria').textContent = this.dataset.categoria || '';
            document.getElementById('verStock').textContent = this.dataset.stock || '';
            document.getElementById('verPrecioUsd').textContent = this.dataset.precioUsd || '';
            document.getElementById('verPrecioBs').textContent = this.dataset.precioBs || '';
            document.getElementById('verImagenUrl').textContent = this.dataset.imagenUrl || '-';
        });
    });

    editarButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const productoId = this.dataset.id;
            const form = document.getElementById('formEditarProducto');
            form.action = `/productos/${productoId}/editar/`;

            document.getElementById('editCodigo').value = this.dataset.codigo || '';
            document.getElementById('editNombre').value = this.dataset.nombre || '';
            document.getElementById('editDetalle').value = this.dataset.detalle || '';
            document.getElementById('editImagenUrl').value = this.dataset.imagenUrl || '';
            document.getElementById('editCategoria').value = this.dataset.categoriaId || '';
            document.getElementById('editStock').value = this.dataset.stock || 0;
            document.getElementById('editUnidades').value = this.dataset.unidades || 1;
            document.getElementById('editPrecioUsd').value = this.dataset.precioUsd || 0;
            document.getElementById('editPrecioBs').value = this.dataset.precioBs || 0;
            document.getElementById('editActivo').checked = this.dataset.activo === '1';
            document.getElementById('editPublicado').checked = this.dataset.publicado === '1';
        });
    });

    eliminarButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const productoId = this.dataset.id;
            const nombre = this.dataset.nombre || '';
            const form = document.getElementById('formEliminarProducto');

            form.action = `/productos/${productoId}/eliminar/`;
            document.getElementById('eliminarProductoNombre').textContent = nombre;
        });
    });
});
