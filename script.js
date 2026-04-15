const meusProjetos = [
    {
        titulo: "Aplicativo - Saúde Conectada: Sistema WEB de Apoio à Gestão e Atendimento",
        descricao: "O Aplicativo Saúde Conectada é um sistema web desenvolvido para apoiar a gestão e o atendimento em serviços de saúde, oferecendo uma plataforma integrada que organiza processos administrativos e clínicos, facilita o acesso às informações dos pacientes, promove comunicação ágil entre equipes e unidades, e disponibiliza relatórios e indicadores que auxiliam na tomada de decisão e na melhoria contínua da qualidade dos serviços prestados.",
        link: "#"
    },

    {
        titulo: "Identidade Visual & Vetorização",
        descricao: "Criação de materiais gráficos e manipulação de imagens utilizando técnicas avançadas de design digital.",
        link: "#"
    },
];

const container = document.getElementById('lista-projetos');

meusProjetos.forEach(projeto => {
    const card = document.createElement('div');
    card.classList.add('projeto-card');
    
    card.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver mais</a>
    `;
    
    container.appendChild(card);
});