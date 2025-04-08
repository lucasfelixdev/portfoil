window.revelar = ScrollReveal({
    reset:false // True para animação repetir.
})

const duracao = 1200; // Define duração das animações
const distancia = '80px';   // Define distância inicial da animação.

    revelar.reveal('.fade-left', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        interval: 300 // Aplica delay crescente automaticamente
    });

    revelar.reveal('.fade-letters-bt', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        interval: 300 // Aplica delay crescente automaticamente
    });


    revelar.reveal('.fade-bottom-mobile', {
        origin: 'top',
        distance: '150px',
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        interval: 340 // Aplica delay crescente automaticamente
    });

    revelar.reveal('.reveal-top', 
    {
    duration: duracao,
    distance: distancia,
    origin: 'top',
    
    })
    
    revelar.reveal('.reveal-bottom', 
        {
            duration: duracao,
            distance: distancia,
            origin: 'bottom',
            easing: 'ease-in-out'
            
        })
        
    revelar.reveal('.reveal-bottom-delay', 
        {
        duration: duracao,
        distance: distancia,
        origin: 'bottom',
        delay: 1200
        
        })

    revelar.reveal('.reveal-bottom-delay1', 
    {
        duration: duracao,
        distance: distancia,
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 100
        
    })

    // REVEAL DOS CARDS S-SERVICE
    revelar.reveal('.reveal-right-cards', 
        {
            duration: duracao,
            distance: distancia,
            origin: 'right',
            easing: 'ease-in-out',
            reveal: 20
            
    })

    revelar.reveal('.spotlight', 
        {
            duration: duracao,
            distance: '0px',
            opacity: 0,
            easing: 'ease-in-out',
            delay: 200
            
    })  
    revelar.reveal('.spotlight1', 
        {
            duration: duracao,
            distance: '0px',
            opacity: 0,

            easing: 'ease-in-out',
            delay: 500
            
    })  
    revelar.reveal('.spotlight2', 
        {
            duration: duracao,
            distance: '0px',
            opacity: 0,

            easing: 'ease-in-out',
            delay: 800
            
    })  

    revelar.reveal('.reveal-right', 
        {
            duration: duracao,
            distance: distancia,
            origin: 'right',
            easing: 'ease-in-out',
            delay: 50
            
    })
    revelar.reveal('.reveal-left', 
        {
            duration: duracao,
            distance: distancia,
            origin: 'left',
            easing: 'ease-in-out',
            delay: 50
            
    })

    revelar.reveal('.reveal-scale', 
        {
            duration: duracao,
      
            scale: 0, 
            easing: 'ease-in-out',
            delay: 100
            
    })


