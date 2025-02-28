window.revelar = ScrollReveal({
    reset:false // True para animação repetir.
})

const duracao = 900; // Define duração das animações
const distancia = '80px';   // Define distância inicial da animação.

revelar.reveal('.card-top', 
{
    duration: duracao,
    distance: distancia,
    origin: 'top',
    
})

revelar.reveal('.card-top1', 
{
    duration: duracao,
    distance: distancia,
    delay: 100,
    origin: 'top'
})

revelar.reveal('.card-top2', 
{
    duration: duracao,
    distance: distancia,
    delay: 200,
    origin: 'top'
})

revelar.reveal('.card-top3', 
{
    duration: duracao,
    distance: distancia,
    delay: 300,
    origin: 'top'
})