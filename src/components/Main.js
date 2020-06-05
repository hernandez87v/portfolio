import PropTypes from 'prop-types'
import React from 'react'
import pic04 from '../images/pic04.png'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div class="custom-shape-divider-top-1591384962">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0H0l598.97 114.72L1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <h2 className="major">Intro</h2>
          <span className="image main">{/* <img src={pic04} alt="" /> */}</span>
          <p>
            Full-Stack Developer focused on front-end with skills in React,
            Javascript, HTML, CSS, and more! With a life-long passion in
            technology, I am motivated by the endless learning opportunities
            ahead and would offer my full commitment as a friendly and dynamic
            addition to your team.
          </p>
          {/* <p>
            Checkout my <a href="page-2">awesome work</a>.
          </p> */}
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div class="custom-shape-divider-top-1591384962">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0H0l598.97 114.72L1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <h2 className="major">Code</h2>
          <span className="image main">{/* <img src={pic02} alt="" /> */}</span>
          <ul>
            <li>
              <a
                href="https://github.com/hernandez87v/dnd-character-create"
                target="_blank"
                rel="noreferrer"
              >
                DND Character Create
              </a>{' '}
              - React, Node, Express, Material-UI
            </li>
            <li>
              <a
                href="https://github.com/hernandez87v/jungle-rails"
                target="_blank"
                rel="noreferrer"
              >
                Ruby On Rails E-Commerce site
              </a>{' '}
              - Ruby On Rails, PostgresSQL, RSPec
            </li>
            <li>
              <a
                href="https://github.com/hernandez87v/scheduler"
                target="_blank"
                rel="noreferrer"
              >
                Interview Scheduler
              </a>{' '}
              - React, Storybook, Webpack, Babel, Axios
            </li>
            <li>
              <a
                href="https://github.com/hernandez87v/tweeter"
                target="_blank"
                rel="noreferrer"
              >
                Twitter Clone
              </a>{' '}
              - HTML, CSS, JQuery, AJAX, Node, Express
            </li>
            <li>
              <a
                href="https://github.com/hernandez87v/tinyapp"
                target="_blank"
                rel="noreferrer"
              >
                URL Shortner App
              </a>{' '}
              - Javascript, Node, Express, EJS, BCrypt
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div class="custom-shape-divider-top-1591384962">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0H0l598.97 114.72L1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
            React / Javascript / Express JS/ Node JS / Ruby / Ruby On Rails /
            AJAX / JQuery / HTML / CSS / Docker / Testing with Mocha / Chai /
            Selenium / RSpec / Jest / Cypress SQL / Databases / PSQL
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
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" alt="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" alt="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                alt="message"
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="special"
                  alt="submit button"
                />
              </li>
              <li>
                <input type="reset" value="Reset" alt="reset" />
              </li>
            </ul>
          </form> */}
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/vlad-hernandez/"
                target="_blank"
                rel="noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hernandez87v"
                target="_blank"
                rel="noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/vancity_exe"
                target="_blank"
                rel="noreferrer"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vancity.exe/"
                target="_blank"
                rel="noreferrer"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
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
