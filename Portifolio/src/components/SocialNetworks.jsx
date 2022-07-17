import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialNetworks.sass'

const socialNetworks = [
  {name: 'linkedin', icon : <FaLinkedinIn/>, href: 'https://www.linkedin.com/in/daniel-c%C3%A1ssio-seara-b0805923a/'},
  {name: 'github', icon : <FaGithub/>, href:'https://github.com/danielsear'},
  {name: 'instagram', icon : <FaInstagram/>, href:'https://www.instagram.com/ocdaniel8/' },
]

function SocialNetworks(){
  return (
    <section id='social-networks' >
      {socialNetworks.map(network =>(
        <a href={network.href} className='social-btn'id={network.name} key={network.name} >
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks