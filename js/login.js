// HEADER
let formularioBusqueda = document.querySelector('.busqueda');
let inputBusqueda = document.querySelector('.formulario');

formularioBusqueda.addEventListener('submit', function(e){
    e.preventDefault();
    let valor = inputBusqueda.value
    if (valor == ""){S
        alert("El campo de busqueda no puede estar vacío.")
    }else if (valor.length < 3){
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

// LOGIN

let formulario = document.querySelector('.contenedor2')

formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value

    if(username === ""){
        alert("El nombre no puede estar vacío")
    }else if(password == ""){
        alert("La contraseña no puede estar vacia")
    }else if(password.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    }else{
        localStorage.setItem("username", username)
        formulario.submit();
    }


}) 