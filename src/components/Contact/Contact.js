import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center text-center" >
          <div className='my-flex-item'>
            <div className="row">
              <h1 className='display-4 mx-auto'>Contact Info</h1>
            </div>

            <div className="row">
              <h4 className='text-center mx-auto'>
                <i className="fab fa-github"></i>
                <span className='mx-3'>GitHub</span>
              </h4>
            </div>

            <div className="row">
              <h4 className='text-center mx-auto'>
                <i className="fab fa-linkedin-in"></i>
                <span className='mx-3'>LinkedIn</span>
              </h4>
            </div>

            <div className="row">
              <h4 className='text-center mx-auto'>
                <i className="fas fa-at"></i>
                <span className='mx-3'>Email</span>
              </h4>
            </div>

          </div>
        </div>
      )
}
