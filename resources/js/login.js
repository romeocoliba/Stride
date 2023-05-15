
const loginDB = [
    {
        login: "admin",
        password: "admin"
    },
    {
        login: "jenea",
        password: "chiripic"
    }
]


document.getElementById("loginButton").addEventListener("click", function(){

    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;


    for (let index = 0; index < loginDB.length; index++) {

        if (loginDB[index].login === login) {
            
            if (loginDB[index].password === password) {
                alert("LOGIN SUCCESFUL");
                window.location.href = '../admin/index.html';
            }

            break;
            alert("Wrong password");
            

        } else {

            alert("Wrong login");
        }

    }
  });
