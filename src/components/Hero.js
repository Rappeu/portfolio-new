import React from 'react';
import arrow from '../images/arrow.png';

export default function Hero() {
  return (
      <section className="hero">

        <h1 className="hero--title">Hello I'm <span className="hero--title_name">Raphael Peuckert,</span></h1>

        <h3 className="hero--subtitle">and I'm a Frontend Developer</h3>

        <a className="hero--btn" href="https://youtube.com">work with me <img className="hero--btn_img" src={arrow} alt="-->" /></a>

      </section>
    )
}