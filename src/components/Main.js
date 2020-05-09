import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import seangillespie from '../images/seangillespie.jpg'
import Bablio from '../images/bablio.png'
import resume from '../images/seangillespieresume2020.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            
          </p>
          <p>
            Bablio, envisions a new media tool that
            helps capture, organize and personalize our collective interest in
            storytelling across all platforms.
          </p>
          <span className="image main">
            <img src={Bablio} alt="" />
          </span>
          <p />
          {close}
        </article> */}

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={seangillespie} className="headshot" alt="" />
          </span>
          <p>
            Sean is Full-Stack Developer specializing in JavaScript and Python.
            He has experience with native Android and iOS apps and is always curious to explore
            emerging toolkits for building out the AR/VR/XR technology landscape.
            <br></br><br></br>
            He is currently a Software Developer at Myplanet and a Teaching Assistant for the Full-Stack Web Development and Data Science remote bootcamp programs for the University of Arizona and UC Berkeley Extension. Having also recently completed a cohort as Full-Stack Development Assistant Instructor at the U of T School of Continuing Studies. 
            <br></br><br></br>
            He has spent the last decade working with Web Startups,
            Digital Media and eCommerce companies. He is an alumnus of the
            BrainStation Full Stack Web Development Immersive and Introductory
            iOS Development programs. 
   
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/SeanCapitalG"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://angel.co/SeanG"
                className="icon fa-angellist"
              >
                <span className="label">AngelList</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/seanpatrickgillespie/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/SeanG" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href={resume} className="icon fa-id-card">
                <span className="label">Resume</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
