// HEADER
let formularioBusqueda = document.querySelector('.busqueda');
let inputBusqueda = document.querySelector('.formulario');

formularioBusqueda.addEventListener('submit', function(e){
    e.preventDefault();
    let valor = inputBusqueda.value
    if (valor == ""){
        alert("El campo de busqueda no puede estar vacío.")
    }else if (valor.length < 3){
        alert("La busqueda debe tener al menos 3 caracteres.")
    }else{
        this.submit()
    }
});

// BODY
let lista1 = document.querySelector('.cards');
let lista2 = document.querySelector('.cards2');

fetch('https://dummyjson.com/products')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let productos = data.products
        console.log(productos);
        for (let i = 0; i < 10; i++) {
            const element = productos[i];
            
            lista1.innerHTML += `<article class="art">
                        <img class="imgart" src= ${productos[i].thumbnail} alt="art1">
                        <h2>${productos[i].title}</h2>
                        <p>${productos[i].description}</p>
                        <p>$${productos[i].price}</p>
                        <button class="vermas">
                        <a href="./product.html?id=${productos[i].id}" target="_blank">Ver Más</a>
                        </button>
                    </article>`
        }

        for (let i = 10; i < 20; i++) {
            const element = productos[i];
            
            lista2.innerHTML += `<article class="art">
                        <img class="imgart" src= ${productos[i].thumbnail} alt="art1">
                        <h2>${productos[i].title}</h2>
                        <p>${productos[i].description}</p>
                        <p>$${productos[i].price}</p>
                        <button class="vermas">
                        <a href="./product.html?id=${productos[i].id}" target="_blank">Ver Más</a>
                        </button>
                    </article>`
        }
    })
    .catch(function(err){
        console.log("Error: " + err );
    })

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
