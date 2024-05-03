// Suponiendo que tienes una lista de productos en algún lugar
const productos = [
    { nombre: "Producto 1", categoria: "Aves", precio: 10, imagen: "ruta/imagen1.jpg" },
    { nombre: "Producto 2", categoria: "Bovinos", precio: 20, imagen: "ruta/imagen2.jpg" },
    { nombre: "Producto 3", categoria: "Porcinos", precio: 30, imagen: "ruta/imagen3.jpg" },
    { nombre: "Producto 4", categoria: "Perros", precio: 30, imagen: "ruta/imagen3.jpg" },
    { nombre: "Producto 5", categoria: "Gatos", precio: 30, imagen: "ruta/imagen3.jpg" },
    
  ];
  
  const productosPorPagina = 10;
  let paginaActual = 1;
  
  // Función para mostrar los resultados de la búsqueda
  function mostrarResultados(resultados) {
    const listaResultados = document.getElementById("lista-resultados");
  
    // Limpiamos la lista antes de agregar los nuevos resultados
    listaResultados.innerHTML = "";
  
    // Iteramos sobre los resultados y creamos filas en la tabla para cada uno
    resultados.forEach(producto => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50"></td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>$${producto.precio}</td>
        <td>$${producto.categoria}</td>
        <td>$${producto.marca}</td>

        
      `;
      listaResultados.appendChild(fila);
    });
  }
  
  // Función para aplicar filtros y mostrar resultados
  function aplicarFiltros() {
    const filtroNombre = document.getElementById("filtro-nombre").value.toLowerCase();
    const filtroCategoria = document.getElementById("filtro-categoria").value.toLowerCase();
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);
  
    const resultadosFiltrados = productos.filter(producto => {
      const nombreCoincide = producto.nombre.toLowerCase().includes(filtroNombre);
      const categoriaCoincide = filtroCategoria === "" || producto.categoria.toLowerCase() === filtroCategoria;
      const precioCumple = isNaN(filtroPrecio) || producto.precio <= filtroPrecio;
  
      return nombreCoincide && categoriaCoincide && precioCumple;
    });
  
    mostrarResultados(resultadosFiltrados);
  }
  
  // Función para limpiar los filtros
  function limpiarFiltros() {
    document.getElementById("formulario-filtros").reset();
    mostrarResultados(productos);
  }
  
  // Función para regresar a la vista de productos
function regresarAVistaProductos() {
    window.location.href = 'productos.html'; // Cambia 'productos.html' por la ruta correcta de tu página de lista de productos
  }
  
  
  
  // Llamamos a la función para mostrar los resultados cuando la página se carga
  document.addEventListener("DOMContentLoaded", function() {
    mostrarResultados(productos);
  });
  