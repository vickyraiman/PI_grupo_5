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

//REGISTER
let formulario = document.querySelector(".contenedor2");

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let password2 = document.querySelector('#password2').value;
    let terminos = document.querySelector('#terminos');

    let usernameError = document.querySelector('#username-error');
    let passwordError = document.querySelector('#password-error');
    let password2Error = document.querySelector('#password2-error');

    usernameError.innerHTML = '';
    passwordError.innerHTML = '';
    password2Error.innerHTML = '';

    if (username === "") {
        usernameError.innerHTML = "Este campo no puede estar vacío";
        usernameError.style.color = "red";
    } else if (password === "") {
        passwordError.innerHTML = "Este campo no puede estar vacío";
        passwordError.style.color = "red";
    } else if (password.length < 6) {
        passwordError.innerHTML = "La contraseña debe tener al menos 6 caracteres";
        passwordError.style.color = "red";
    } else if (password !== password2) {
        password2Error.innerHTML = "Las contraseñas no coinciden";
        password2Error.style.color = "red";
    } else if (!terminos.checked) {
        alert("Se deben aceptar los términos y condiciones");
    } else {
        formulario.submit();
    }
});

