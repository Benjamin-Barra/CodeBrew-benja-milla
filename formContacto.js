const Form = document.getElementById("formContacto")


emailjs.init({
    publicKey: "w-3wOoSiiKUimrgO7"
})

Form.addEventListener("submit", (e) => {
    e.preventDefault()

    const btnEnviar = document.getElementById("enviar")

    
    
    btnEnviar.disabled = true
    btnEnviar.textContent = "Enviando..."
    btnEnviar.classList = "bg-gray-300 p-4 rounded-4xl text-white cursor-wait"
    
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const mail = document.getElementById("mail").value
    const desc = document.getElementById("desc").value

    if (nombre.trim() === "" || apellido.trim() === "" || mail.trim() === "" || desc.trim() === "" ){
        alert("Debes llenar todos los campos")
        btnEnviar.disabled = false
        btnEnviar.textContent = "Enviar Correo"
        btnEnviar.classList = "bg-blue-600 p-4 rounded-4xl text-white cursor-pointer"
        return
    } else {

        emailjs.send("service_va0ohqk", "template_4kdd478", {
            title: "Nuevo contacto CodeBrew",
            name: nombre + " " + apellido,
            email: mail,
            message: desc
        })
        .then(() => {
            alert("Correo enviado")
            btnEnviar.disabled = false
            btnEnviar.classList = "bg-blue-600 p-4 rounded-4xl text-white cursor-pointer"
            btnEnviar.textContent = "Enviar Correo"
            Form.reset()
        })
        .catch((error) => {
            console.log(error)
            btnEnviar.disabled = false
            alert("Error al enviar el correo")
        })
    }

        

})