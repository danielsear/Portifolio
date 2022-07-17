import {AiFillPhone, AiFillEnvironment, AiOutlineMail} from 'react-icons/ai'

import '../styles/components/informationContainer.sass'

const cards = [
  {
    name : 'Telefone', info: '(31) 9510 - 6308',
    icon: <AiFillPhone/>, classe: 'phone-icon'
  },
  {
    name : 'E-mail', info: 'danielandradeseara@yahoo.com',
    icon: <AiOutlineMail/>, classe: 'email-icon'
  },
  {
    name: 'Localização', info : 'Itabira-MG', 
    icon: <AiFillEnvironment/>, classe: 'pin-icon'
  }
]

function InformationContainer(){
  return (
    <section id='information-container'>
      {cards.map(card => (
        <div className='info-card' key={card.name}>
          <div id={card.classe}>
          {card.icon}
          </div>
          <div>
            <h3>{card.name}</h3>
            <p>{card.info}</p>
          </div>  
      </div>
      ))}
    </section>
  )
}

export default InformationContainer