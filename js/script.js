let cards = document.querySelectorAll('.card');


// Remover classe dos cards já clicados
function removeClassActive(){
    cards.forEach(card => {
        if (card.classList.contains('active')) {
            card.classList.remove('active');
        }
    })
}

document.addEventListener("click", function(event) {
    if (!event.target.closest('.card')) {
        removeClassActive();
    }
});

cards.forEach(card =>{
    card.addEventListener("click", event =>{

        event.stopPropagation();

        removeClassActive()
        
        card.classList.add('active')
    })
})

/* Description Skill */

let skills = document.querySelectorAll('.language');
let textContent = document.getElementById('about-skill');


skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
        
        textContent.classList.remove('default-text')
        if(skill.classList.contains('html')){
            textContent.innerHTML = `
            Como desenvolvedor HTML intermediário, domino a estruturação avançada de documentos, incluindo elementos semânticos como < header > e < footer >. Tenho habilidade em CSS para criar designs responsivos e estilos atraentes. Além disso, estou familiarizado com frameworks como Bootstrap e tenho conhecimentos básicos em JavaScript para adicionar interatividade às páginas. Sempre busco aprimorar minhas habilidades e explorar novas técnicas e tecnologias.
            ` 
        } else if(skill.classList.contains('css')) {
            textContent.innerHTML = `
            Como um desenvolvedor com conhecimentos avançados em CSS, possuo habilidades sólidas na criação de designs responsivos e estilos atraentes. Minha experiência abrange desde conceitos gerais do CSS até técnicas mais avançadas, como animação, Grid CSS e Flexbox. Com minha especialização em CSS, sou capaz de estruturar layouts complexos e bem organizados, garantindo uma experiência de usuário consistente em uma variedade de dispositivos. Além disso, estou sempre buscando aprimorar minhas habilidades e explorar novas técnicas para permanecer atualizado com as últimas tendências e práticas no desenvolvimento web. Isso me permite oferecer soluções criativas e eficazes para os desafios de design e desenvolvimento que encontro.
            ` 
        } else if(skill.classList.contains('js')){
            textContent.innerHTML = `
            Como um desenvolvedor com habilidades intermediárias em JavaScript, eu entendo bem as principais estruturas e padrões da linguagem, incluindo como mexer no DOM, usar APIs externas e criar coisas interativas. Estou sempre de olho em novas bibliotecas e frameworks para ficar atualizado e ser capaz de resolver problemas de uma forma criativa e eficaz. Essa habilidade de aplicar conceitos avançados me permite trabalhar bem em equipe ou sozinho, entregando soluções sólidas e que crescem com o projeto.
            `
        } else if(skill.classList.contains('node')){
            textContent.innerHTML = `
            Como alguém que está começando a explorar o Node.js, estou me familiarizando com os conceitos fundamentais dessa tecnologia, como manipulação de arquivos, criação de servidores web e uso de módulos npm. Estou em constante aprendizado, explorando novas funcionalidades e técnicas para expandir meu conhecimento e habilidades nessa plataforma. Embora ainda esteja nos estágios iniciais, estou comprometido em me tornar proficientemente em Node.js, buscando recursos e orientações para desenvolver soluções eficazes e escaláveis para projetos futuros.
            `
        } else if(skill.classList.contains('react')){
            textContent.innerHTML = `
            Como alguém que está iniciando com React, estou explorando os conceitos básicos dessa biblioteca, como componentes, estado e props. Estou me dedicando a entender como criar interfaces de usuário dinâmicas e reativas, utilizando JSX e compreendendo o fluxo de dados unidirecional. Estou animado para aprender mais sobre o desenvolvimento de aplicativos web modernos com React e estou comprometido em expandir minhas habilidades através da prática e da exploração de recursos e tutoriais disponíveis.
            `
        } else if(skill.classList.contains('angular')){
            textContent.innerHTML = `
            Como alguém que está alcançando o nível intermediário no Angular, já possuo experiência em conectar APIs ao front-end, utilizando serviços e observables para obter e manipular dados dinamicamente. Tenho familiaridade com conceitos avançados, como roteamento, interceptadores HTTP e lazy loading de módulos para otimizar o desempenho da aplicação. Estou continuamente aprimorando minhas habilidades, explorando novas técnicas e padrões de design para desenvolver aplicações mais robustas e eficientes. Estou confiante na minha capacidade de enfrentar desafios mais complexos e contribuir de forma significativa para projetos Angular.
            `
        } else if(skill.classList.contains('git')){
            textContent.innerHTML = `
            Como alguém que está avançando para o nível intermediário no Git, já possuo experiência em gerenciar repositórios, realizar commits e branches para organizar o desenvolvimento de projetos de forma colaborativa. Tenho familiaridade com conceitos mais avançados, como resolução de conflitos, rebase e cherry-pick, para lidar com situações complexas no versionamento de código. Estou constantemente aprimorando minhas habilidades, explorando novos fluxos de trabalho e práticas recomendadas para garantir um controle de versão eficaz e uma colaboração fluida dentro da equipe de desenvolvimento. Estou confiante em minha capacidade de enfrentar desafios mais complexos relacionados ao Git e contribuir de maneira significativa para projetos de desenvolvimento de software.
            `
        } else if(skill.classList.contains('github')){
            textContent.innerHTML = `
            Como alguém que está avançando para o nível intermediário no GitHub, já tenho experiência em gerenciar repositórios, colaborar em projetos e fazer contribuições à comunidade de desenvolvimento. Estou familiarizado com funcionalidades avançadas, como pull requests, issues e GitHub Actions. Estou sempre explorando novas funcionalidades e aprimorando minhas habilidades para garantir uma colaboração eficaz e contribuir de forma significativa para projetos hospedados no GitHub. Estou confiante em enfrentar desafios mais complexos relacionados ao GitHub e agregar valor aos projetos de desenvolvimento de software através dessa plataforma.
            `
        } else {
            textContent.innerHTML = '/* Passe o mouse sobre as tecnologias para ver a descrição. */'
        }
    })

    skill.addEventListener('mouseout', () => {
        textContent.classList.add('default-text')
        textContent.innerHTML = '/* Passe o mouse sobre as tecnologias para ver a descrição. */'
    })
})


/* To Up */

function toUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}

window.addEventListener('scroll', () => {
    let scroll = document.getElementById('btn-up');

    scroll.classList.toggle('active', window.scrollY > 450)

})

/* scroll reveal */

window.sr = ScrollReveal({
    reset: true,
    duration: 1000, 
    origin: 'top', 
    distance: '60px',
    interval: 100 
});

sr.reveal('.languages', {origin: 'bottom'})
sr.reveal('.right')
sr.reveal('.cards-projects')