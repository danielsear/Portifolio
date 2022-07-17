import '../styles/components/projectsContainer.sass'

const projects = [
  {name: 'StoreContinue' , link: 'https://github.com/danielsear/StoreContinue', 
  about: ' É um site de uma loja < KASSINHA VARIEDADES >. Este contém uma pagina home onde é apresentado uma vitrine de produtos, onde o usuário poderá fazer seu cadastro, login e depois seus pedidos e compras. Ele também contém uma pagina admin onde o adminstrador poderá cadastrar, editar e deletar seus produtos da vitrine, controlar os pedidos e arquivar suas vendas.', 
  technologies: 'JavaScript + React + TypeScript + MongoDB'},

  {name: 'NLW-8-Feedback' , link: 'https://github.com/danielsear/NLW-8-Feedback-complete', 
  about: 'É um aplicativo de feedbacks dos usuários, este contém um menu onde o usuário poderá mandar um bug na aplicação com a captura da imagem, junto poderá mandar o feedback de sugestões, onde estas serão enviadas no email do admin cadastrado. Curso online da RocketSeat.', 
  technologies: 'JavaScript + React + TypeScript + Prisma'},

  {name: 'Letmeask ' , link: 'https://github.com/danielsear/Letmeask', 
  about: 'É um aplicativo de interação de usuários, este contém a criação de salas publicas ou privativas para conversas.', 
  technologies: 'JavaScript + React + TypeScript + Firebase'},
  
]

function ProjectsContainer(){
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      {projects.map(project =>(
        <div className="project-grid" key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.about}</p>
          <div>
            <p>Tecnologias:</p>
            {project.technologies}
          </div>
          <a href={project.link} className="btn">
             Ir Projeto
          </a>
        </div>
      ))}
      
    </section>
  )
}

export default ProjectsContainer