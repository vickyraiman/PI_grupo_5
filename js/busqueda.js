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

// CATEGORIAS
let categorias = document.querySelector('.sideBar')
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

// BUSQUEDA
let queryString = location.search
let urlBu = new URLSearchParams(queryString)
let searchVal = urlBu.get('search')

let tituloBusqueda = document.querySelector('.tituloProdAl')
let cardsCont = document.querySelector('.cards')

tituloBusqueda.innerHTML = "Resultados de tu búsqueda: " + searchVal

fetch('https://dummyjson.com/products/search?q=' + searchVal)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        let productos = data.products
        let contenido = ""

        if (productos.length === 0) {
            tituloBusqueda.innerText = "No hay resultados para: " + searchVal
            cardsCont.innerHTML = ""
        }

        for (let i = 0; i < productos.length; i++) {
                let p = productos[i]
    
                contenido += `
                    <article class="art">
                        <img class="imgart" src="${p.thumbnail}" alt="${p.title}">
                        <h4>${p.title}</h4>
                        <p>${p.description}</p>
                        <p>$${p.price}</p>
                        <button class="vermas">
                        <a href="./product.html?id=${productos[i].id}" target="_blank">Ver Más</a>
                        </button>
                    </article>
                `
            }
        

        cardsCont.innerHTML = contenido
    })
    .catch(function(err){
        console.log("Error: " + err)
    })






