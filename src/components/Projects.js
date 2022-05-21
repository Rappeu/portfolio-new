import React from 'react'
import Card from './Card'
import data from '../data.js'


export default function Projects() {

  const cards = data.map(item => {
    return (
      <Card 
        url={item.url}
        img={item.img}
        title={item.title}
        description={item.description}
        tech={item.tech.map(item => {
          return <li className="card--tech_item">{item}</li>
        })}
      />
    )
  })

  return (
      <section className="projects">
        <h2 className="projects--title">My Projects</h2>
        <div className="projects-cards">
          {cards}
        </div>
      </section>
    )
}