// Aguarda o carregamento completo do DOM antes de executar o código
function hoverChangeDescription(className, text) {
  const revealText = document.querySelector(".s-tech__revealText"); 
  const element = document.querySelector(className);
  
  if (!element) return; // Evita erros caso a classe não exista

  element.addEventListener("mouseover", () => {
    revealText.innerHTML = text;
  });

  element.addEventListener("mouseout", () => {
    revealText.innerHTML = `*passe o cursor do mouse no card para ler*`;
  });
}

hoverChangeDescription(".html", "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.");
hoverChangeDescription(".css", "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas.");
hoverChangeDescription(".js", "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web.");
hoverChangeDescription(".sass", "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa.");
hoverChangeDescription(".react", "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada.");
hoverChangeDescription(".next", "Next.js é um framework que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React.");
hoverChangeDescription(".tailwind", "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas.");
hoverChangeDescription(".typescript", "TypeScript é um superset do JavaScript que adiciona recursos como tipagem estática.");
hoverChangeDescription(".django", "Django é um framework web de alto nível para Python que incentiva o desenvolvimento rápido e um design limpo e pragmático.");
