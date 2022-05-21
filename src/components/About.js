import React from 'react';

export default function About() {
  return (
    <section className="about">

      <div className="about--about">
        <h2 className="about--about_title">About me</h2>

        <p className="about--about_text">
          I have over 10 years of experience designing the  user interface and user experience of dozens of  today's top websites and apps. I am passionate   about bold but intuitive design, and doing work for companies with social responsibility.
        </p>
      </div>

      <div className="about--skills">
        <h2 className="about--skills_title">Skills</h2>

        <ul className="about--skills_list">

          <li className="about--skills_item">HTML</li>
          <li className="about--skills_item">CSS</li>
          <li className="about--skills_item">JAVASCRIPT</li>
          <li className="about--skills_item">REACT</li>

        </ul>
      </div>

    </section>
  )
}