// Ajouter ici des interactions JS si nécessaire, comme la validation du formulaire de contact

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Merci pour votre message, ${name}! Nous reviendrons vers vous sous peu.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
