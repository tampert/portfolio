import React from 'react';
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
      <div className='route'>
        <h3>Contact me</h3>
          <ul>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>form</li>
          </ul>
        <ContactForm /> 
      </div>
    )
}

export default Contact;