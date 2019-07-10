import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import seangillespie from '../images/seangillespie.jpg'
import Bablio from '../images/bablio.png'
import resume from '../images/seangillespie-resume-2019.pdf'

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
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            Sean is a Native Mobile Developer by day who refines his Full-Stack
            Javascript Kung-Fu by night while always curious to explore the
            emerging AR/VR/XR technology landscape.
          </p>
          <p>
            His current pet project, Bablio, envisions a new media tool that
            helps capture, organize and personalize our collective interest in
            storytelling across all platforms.
          </p>
          <span className="image main">
            <img src={Bablio} alt="" />
          </span>
          <p />
          {close}
        </article>

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
            Sean Gillespie is a Software Engineer working with iOS/Android
            Native Applications on the Cloud Team at ThoughtWire Corp in
            Toronto. Sean has spent the last decade working with Web Startups,
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
                href="https://twitter.com/Oneirocom"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://angel.co/Oneirocom"
                className="icon fa-angellist"
              >
                <span className="label">AngelList</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/Oneirocom/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Oneirocom" className="icon fa-github">
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
