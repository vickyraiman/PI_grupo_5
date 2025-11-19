let logout = document.querySelector('#logout');

if(logout){
    logout.addEventListener('click', function(e){
        e.preventDefault();

        localStorage.removeItem('username');

        let menu = document.querySelector('.menu ul');
        let items = menu.querySelectorAll('li');

        for (let i = 0; i < items.length; i++) {
            if (items[i].querySelector('#logout')){
                items[i].innerHTML = `<a href="./login.html">Login</a>`
            }

            if (items[i.innerText === "Register"]) {
                items[i].style.display = 'block';
            }
        }
    });
}