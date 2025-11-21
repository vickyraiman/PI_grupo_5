// HEADER
let formularioBusqueda = document.querySelector('.busqueda');
let inputBusqueda = document.querySelector('.formulario');

formularioBusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
    let valor = inputBusqueda.value
    if (valor == "") {
        alert("El campo de busqueda no puede estar vacío.")
    } else if (valor.length < 3) {
        alert("La busqueda debe tener al menos 3 caracteres.")
    } else {
        this.submit()
    }
});

// CATEGORIAS
let categorias = document.querySelector('.sideBar');

fetch('https://dummyjson.com/products/category-list')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let categoria = data[i];
            categorias.innerHTML += `
                <li>
                    <a href="./category.html?category=${categoria}">${categoria}</a>
                </li>
            `;
            console.log(categoria);
        }
    })
    .catch(function (err) {
        console.log("Error: " + err);
    });


// CATEGORIA INDIVIDUAL
window.addEventListener('load', function () {

    let queryString = location.search;
    let categoria = new URLSearchParams(queryString);
    let categoryName = categoria.get('category'); 



    let tituloCategoria = document.querySelector('.tituloProdAl');
    let cardsContainer = document.querySelector('.cards');



    tituloCategoria.innerText = categoryName;


    let url = 'https://dummyjson.com/products/category/' + categoryName;



    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            let productos = data.products;
            let contenido = "";

            for (let i = 0; i < productos.length; i++) {
                let p = productos[i];

                contenido += `
                    <article class="art">
                        <img class="imgart" src="${p.thumbnail}" alt="${p.title}">
                        <h2>${p.title}</h2>
                        <p>${p.description}</p>
                        <p>$${p.price}</p>
                        <button class="vermas">
                            <a href="./product.html?id=${p.id}" target="_blank">Ver Más</a>
                        </button>
                    </article>
                `;
            }

            cardsContainer.innerHTML = contenido;
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });

});