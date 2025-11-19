let username = localStorage.getItem('username')

if (username) {
    let menu = document.querySelector('.menu ul')

    if(menu){
        let items = menu.querySelectorAll('li')

        for (let i = 0; i < items.length; i++) {
            let texto = items[i].innerText
            
            if (texto === "Login") {
                items[i].innerHTML = `
                    Bienvenido: ${username}
                    <a href="./index.html" id="logout">Logout</a>`                
            }

            if (texto === "Register") {
                items[i].style.display = 'none'
            }
        }
    }


    let logout = document.querySelector('#logout')

    if (logout) {
        logout.addEventListener('click', function() {
            localStorage.removeItem("username")
        })
    }
}
