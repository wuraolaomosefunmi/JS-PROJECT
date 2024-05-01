        let myName = document.querySelector('.name');
        let name = localStorage.getItem('username');
        myName.innerHTML = `welcome ${name}`
        let btn = document.querySelector('.btn');


        // log out addevent listener
          btn.addEventListener('click',logOut)

          // log out functionality
          function logOut(){
            localStorage.removeItem('email');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            window.location.href = "./index.html"
          }
           