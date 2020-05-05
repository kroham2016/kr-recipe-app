import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="d-flex justify-content-center align-items-center text-center" style={{"height":"95vh"}}>
          <div className='my-flex-item'>
            <div className="row">
              <h1 className='display-4 mx-auto my-5'>Contact Me!</h1>
            </div>
            <div className="btn-group btn-group-lg my-4">
              <a href="https://www.github.com/kroham2016" className="" target='_blank' rel='noopener noreferrer'>
                <button type="button" className="btn btn-secondary mx-2">
                  <i className="fab fa-github"></i>
                  <span className='mx-3'>GitHub</span>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/keonr" className="" target='_blank' rel='noopener noreferrer'>
                <button type="button" className="btn btn-secondary mx-2">
                  <i className="fab fa-linkedin-in"></i>
                  <span className='mx-3'>LinkedIn</span>
                </button>
              </a>
              <a href="mailto:keon.roham@gmail.com" className='' target='_blank' rel='noopener noreferrer'>
                <button type="button" className="btn btn-secondary mx-2" >
                  <i className="fas fa-at"></i>
                  <span className='mx-3'>Email</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )
}
