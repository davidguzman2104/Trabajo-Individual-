// Inicializa EmailJS con tu User ID
emailjs.init('Lws6LRc7-0OkKzLLI'); // Reemplaza con tu User ID real

// Lógica de envío del formulario
document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const btn = document.getElementById('button');
    btn.value = 'Enviando...';

    try {
        await emailjs.sendForm('service_1qfj7wp', 'template_zxkb16e', this);
        btn.value = 'Send Email';
        alert('¡Correo enviado con éxito!');
    } catch (err) {
        btn.value = 'Send Email';
        console.error("Error al enviar el correo:", err);
        alert('Hubo un problema al enviar el correo.');
    }
});
