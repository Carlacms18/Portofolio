function validateForm() {
    // Pega os valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Verifica se os campos estão vazios
    if (name == "" || email == "" || subject == "" || message == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Verifica se o email é válido
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    alert(`Formulário enviado com sucesso! Nome: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
    console.log( `Nome: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`)
}