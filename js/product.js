// HEADER
let formularioBusqueda = document.querySelector('.busqueda');
let inputBusqueda = document.querySelector('.formulario');

formularioBusqueda.addEventListener('submit', function(e){
    e.preventDefault();
    let valor = inputBusqueda.value
    if (valor == ""){
        alert("El campo de busqueda no puede estar vacío.")
    }else if (valor.length <= 3){
        alert("La busqueda debe tener al menos 3 caracteres.")
    }else{
        this.submit()
    }
});

// CATEGORIAS
let categorias = document.querySelector('.listaCostado')

fetch('https://dummyjson.com/products/category-list')
    .then(function(res){
    return res.json()
    })
    .then(function(data){
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let categoria = data[i];
            categorias.innerHTML += `<li><a href="./category.html?category=${categoria}">${categoria}</a></li>`
            console.log(categoria);
        }
    })
    .catch(function(err){
        console.log("Error: " + err )
    })

// PRODUCT
let contenedor = document.querySelector(".infoAuriculares");

fetch("'https://dummyjson.com/products/'")
    .then(function (response) {
    return res.json()
    })
    .then(function(data) {
    contenedor.innerHTML = `
                <img src="${data.images}" alt="${data.titles}">

                <div class="detalles">
                    <h2>Nombre del Producto: ${data.title}</h2>
                    <h3>Marca: ${data.brand}</h3>
                    <h3>Descripcion: ${data.description}</h3>
                    <h3>Precio: ${data.prince}</h3>
                    <h3>Categoria: ${data.category}</h3>
                    <h3>Stock: ${data.stock}</h3>
                    <h3>Tags: ${data.tags}</h3>
                </div>`
    })
    .catch(function(err){
        console.log("Error: " + err);
        
    })