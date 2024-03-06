
(function(){
   

    emailjs.init({
        publicKey: 'DmlAEgiD2Wn6n9OpT',
      });

    const form = document.querySelector('#contact_form');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        emailjs.sendForm('service_h2u7133', 'template_khpn98e', this)
            .then(() =>{
                console.log('SUCCESS!');
            }, (error)=>{
                console.log('FAILED...', error);
            });
    });
    
})()

