import React from 'react'
import gif from '../assets/gif.gif'
import Button from './Button'

const About = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-between mx-12 mt-40 gap-10'>
        <div>
          <h1 className='text-text text-3xl font-bold'>Own Byte</h1>
          <p className='text-muted mb-8'>
            Gerencie suas senhas com Own Byte! Pare de depender do serviço de terceiros e tenha controle total sobre seus dados. Com o Own Byte, você pode armazenar suas senhas de forma segura e acessá-las sempre que precisar, podendo utilizar sua própria infraestrutura ou hospedar a aplicação em um serviço de nuvem.
          </p>
          <a href="https://github.com/own-byte" target='_blank' rel='noopener noreferrer'>
            <Button text='Começar agora' />
          </a>
        </div>
        <img src={gif} alt="" className='h-65 w-130'/>
      </div>
    </>
  )
}

export default About