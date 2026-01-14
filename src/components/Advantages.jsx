import React from 'react'
import AdvantagesCard from './AdvantagesCard'

const Advantages = () => {
  return (
    <div className='grid grid-cols-1 mt-40 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
      <AdvantagesCard text="Setup de configuração do projeto simplificado, foque no que realmente importa." />
      <AdvantagesCard text="100% de privacidade e autonomia, você é o responsável por seus dados e o único que pode acessá-los." />
      <AdvantagesCard text="Armazenamento seguro e acessível a qualquer momento." />
      <AdvantagesCard text="Hospedagem flexível, escolha a infraestrutura que melhor te atende e comece a usar agora mesmo." />
    </div>
  )
}

export default Advantages