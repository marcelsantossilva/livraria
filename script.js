function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Realize a autenticação do usuário e redirecione para a página de produtos
        window.location.href = "products.html";
    }
}

function resetPassword() {
    var email = document.getElementById("email").value;
    if (email === "") {
        alert("Por favor, informe seu e-mail.");
    } else {
        alert("O link para redefinição de senha foi enviado para o endereço informado.");
        // Redirecione para a página de login
        window.location.href = "login.html";
    }
}
