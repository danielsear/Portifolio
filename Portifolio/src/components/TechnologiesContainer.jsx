
import {DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejs, DiMysql, DiMongodb} from 'react-icons/di'
import {SiTypescript } from 'react-icons/si'

import '../styles/components/technologiesContainer.sass'

const technologies = [
  {id : 'html', name: 'HTML5', icon: <DiHtml5/>, info: 'HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.'},
  {id : 'Css', name: 'Css3', icon: <DiCss3/>},
  {id : 'js', name: 'JavaScript', icon: <DiJsBadge/>},
  {id : 'node', name: 'Node.js', icon: <DiNodejs/>},
  {id : 'typescript', name: 'TypeScript', icon: <SiTypescript/>},
  {id : 'react', name: 'React', icon: <DiReact/>},
  {id : 'mongodb', name: 'MongoDB', icon: <DiMongodb/>},
  {id : 'mysql', name: 'MySQL', icon: <DiMysql/>}
]

function TechnologiesContainer(){
  return (
      <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map(technology=> (
            <div className="technology-card" id={technology.id} key={technology.id}>
              {technology.icon}
              <div className='technology-info'>
                <h3>{technology.name}</h3>          
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default TechnologiesContainer