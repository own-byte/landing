import React from 'react'
import me from '../assets/me.jpg'
import Button from './Button'

const AboutTeam = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between border border-white/50 rounded-xl p-4 bg-card mx-12 mt-40 mb-10 gap-20'>
            <img src={me} alt="" className='w-60' />
            <div className=''>
                <h1 className='text-text text-3xl font-bold'>Meu propósito</h1>
                <p className='text-muted mb-12'>
                    Own Byte está longe de ser uma ideia revolucionária, porém foi muito importante para mim desenvolvê-lo e trabalhar neste projeto. Pretendo continuar adicionando novas funcionalidades e correções sempre que possível, e conto com você para isso! Use Own Byte e compartilhe sua experiência e feedbacks, vamos melhorá-lo e torná-lo ainda mais útil para todos.
                </p>
                <div className='mt-8 flex gap-2'>
                    <a href='https://github.com/viniciuscassemira' target='_blank' rel='noopener noreferrer'>
                        <Button text='Github' />
                    </a>
                    <a href='https://www.linkedin.com/in/viniciuscassemira/' target='_blank' rel='noopener noreferrer'>
                        <Button text='Linkedin' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutTeam