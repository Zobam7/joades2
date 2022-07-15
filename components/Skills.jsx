import React from 'react'
import Skill from './Skill'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 px-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                <Skill img="/html.png" text="HTML"/>
                <Skill img="/css.png" text="CSS"/>
                <Skill img="/javascript.png" text="JAVASCRIPT"/>
                <Skill img="/bootstrap.png" text="BOOTSTRAP"/>
                <Skill img="/tailwind.png" text="TAILWIND"/>
                <Skill img="/react.png" text="REACT.JS"/>
                <Skill img="/nextjs.png" text="NEXT.JS"/>
                <Skill img="/firebase.png" text="FIREBASE"/>
                <Skill img="/github1.png" text="GITHUB"/>
                <Skill img="/redux.png" text="REDUX"/>
                <Skill img="/typescript.webp" text="TYPESCRIPT"/>
            </div>
        </div>
    </div>
  )
}

export default Skills