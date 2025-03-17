window.revelar = ScrollReveal({
    reset:false // True para animação repetir.
})

const duracao = 1200; // Define duração das animações
const distancia = '80px';   // Define distância inicial da animação.

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

    revelar.reveal('.reveal-right-delay0', 
        {
            duration: duracao,
            distance: distancia,
            origin: 'right',
            easing: 'ease-in-out',
            delay: 10
            
    })

    revelar.reveal('.reveal-right-delay1', 
            {
                duration: duracao,
                distance: distancia,
                origin: 'right',
                easing: 'ease-in-out',
                delay: 30
                
    })

    revelar.reveal('.reveal-right-delay2', 
                {
                    duration: duracao,
                    distance: distancia,
                    origin: 'right',
                    easing: 'ease-in-out',
                    delay:150
                    
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


