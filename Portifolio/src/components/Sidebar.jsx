import Avatar from '../img/perfildaniel.jpg'

import '../styles/components/sidebar.sass'

import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

function Sidebar(){
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="imagem de perfil" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="#" className="btn">Dowload curriculo</a>
    </aside>
  )
}

export default Sidebar