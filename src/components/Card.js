import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <a className="card--link" href={props.url} target="_blank">
          <img className="card--img" src={props.img} alt="img not found"/>
          <span className="card--link_overlay"><p>Click me!</p></span>
      </a>
      <h3 className="card--title">{props.title},</h3>
      <p className="card--description">{props.description}</p>
      <h3 className="card--tech_title">Technologies:</h3>
      <ul className="card--tech_list">
        <li className="card--tech_item">{props.tech}</li>
      </ul>
    </div>
  )
}