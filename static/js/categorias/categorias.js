document.addEventListener('DOMContentLoaded', function () {
    const inputBuscar = document.getElementById('buscarCategoria');
    const filtroEstado = document.getElementById('estadoCategoria');
    const verButtons = document.querySelectorAll('.btn-ver-categoria');
    const editarButtons = document.querySelectorAll('.btn-editar-categoria');

    function aplicarFiltros() {
        const termino = (inputBuscar?.value || '').toLowerCase().trim();
        const estado = (filtroEstado?.value || '').toUpperCase().trim();
        const filas = document.querySelectorAll('.tabla-categorias tbody tr');

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
            document.getElementById('verCategoriaNombre').textContent = this.dataset.nombre || '';
            document.getElementById('verCategoriaDescripcion').textContent = this.dataset.descripcion || '';
            document.getElementById('verCategoriaEstado').textContent = this.dataset.estado || '';
        });
    });

    editarButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const categoriaId = this.dataset.id;
            document.getElementById('formEditarCategoria').action = `/categorias/${categoriaId}/editar/`;
            document.getElementById('editCategoriaNombre').value = this.dataset.nombre || '';
            document.getElementById('editCategoriaDescripcion').value = this.dataset.descripcion || '';
            document.getElementById('editCategoriaActiva').checked = this.dataset.activa === '1';
        });
    });
});
