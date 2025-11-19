// HEADER
let formularioBusqueda = document.querySelector('.busqueda');
let inputBusqueda = document.querySelector('.formulario');

formularioBusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
    let valor = inputBusqueda.value
    if (valor == "") {
        alert("El campo de busqueda no puede estar vacío.")
    } else if (valor.length <= 3) {
        alert("La busqueda debe tener al menos 3 caracteres.")
    } else {
        this.submit()
    }
});


// CATEGORIAS
let categorias = document.querySelector('.sideBar')
fetch('https://dummyjson.com/products/category-list')
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let categoria = data[i];
            categorias.innerHTML += `<li><a href="./categoria.html?category=${categoria}">${categoria}</a></li>`;
            console.log(categoria);
        }
    })
    .catch(function (err) {
        console.log("Error: " + err)
    })
