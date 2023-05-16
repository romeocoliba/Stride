
document.getElementById("registerButton").addEventListener("click", function(){

            let newLogin = document.getElementById("login").value;
            let newPassword = document.getElementById("password").value;
            let repeatPassword = document.getElementById("repeatPassword").value;

            let newUser = {
                login: newLogin,
                password: newPassword
            };
        
        
            if (newPassword === repeatPassword) {
                console.log("tot ok");

                if(window.localStorage.getItem("users") == null){

                    users.push(newUser);

                window.localStorage.setItem("users",JSON.stringify(users));

                alert("Register succesful!");

                window.location.href = 'login.html';


                }  else {

                    var localUsers = JSON.parse(window.localStorage.getItem("users"));

                    localUsers.push(newUser);

                    window.localStorage.setItem("users",JSON.stringify(localUsers));

                    alert("Register succesful!");

                    window.location.href = 'login.html';
                }

            } else {

                alert("Passwords don't match");

            }



        })
