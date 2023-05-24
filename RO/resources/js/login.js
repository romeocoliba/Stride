

document.getElementById("loginButton").addEventListener("click", function(){

    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;



    if(window.localStorage.getItem("users") == null){

    for (let index = 0; index < users.length; index++) {

        if (users[index].login === login) {
            
            if (users[index].password === password) {
                localStorage.setItem("auth",true);
                alert("Autentificarea a fost cu succes!");
                window.location.href = 'products.html';
                break;
            }

            alert("Parola greșită");
            break;

        } else {

            if (index == users.length-1) {
                alert("Login greșit");
            }
            
        }

        }
            } else {

                var localUsers = JSON.parse(window.localStorage.getItem("users"));


                for (let index = 0; index < localUsers.length; index++) {

                    if (localUsers[index].login === login) {
                        
                        if (localUsers[index].password === password) {
                            localStorage.setItem("auth",true);
                            alert("Autentificarea a fost cu succes!");
                            window.location.href = 'produse.html';
                            break;
                        }
            
                        alert("Parola greșită");
                        break;
            
                    } else {
            
                        if (index == localUsers.length-1) {
                            alert("Login greșit");
                        }
                        
                    }
            
                    }

            }
  });
