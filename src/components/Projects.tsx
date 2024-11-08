import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data  = [

    {
        id: 0,
        title: "Currency Converter",
        description: "A html, css and javascript based app",
        img: "/pic5.jpg",
        tags: ["Html", "Css", "Javascript"],
    },

    {
        id: 1,
        title: "Todo List",
        description: "A React & Typescript based app",
        img: "/pic7.png",
        tags: ["React",  "Node", "Css", "Typescript"],
    },

    
    {
      id: 2,
      title : "Roxy Virtual Assistant",
      description: "A html, css and javascript based Virtual Assistant",
      img: "/pic9.png",
      tags: ["Html", "Css", "Javascript"],
  },


]

const Projects = () => {
  return (
    <div id='projects' className='container pt-22'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {data.map((el)=>(<Card 
          key={el.id} 
          title={el.title}
          desc={el.description}
          img={el.img}
          tags={el.tags}
          
          
          />))}
            
        </div>
      
    </div>
  )
}

export default Projects
