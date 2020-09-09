import React, { useState } from 'react';
import axios from 'axios'

const ContactForm = () =>{
    
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [result, setResult] = useState(null);

    const sendEmail = event => {
        event.preventDefault();
        axios
        .post('/send', { ...state })
        .then(response => {
            setResult(response.data);
            console.log('sendEmail then')
            console.log(result)
            setState({ name: '', email: '', subject: '', message: '' });
        })
        .catch(() => {
            console.log('sendEmail catch')
            setResult({ success: false, message: 'Something went wrong. Try again later'})
        });
    }

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({ 
            ...state,
            [name]:value
        });
        console.log(state)
    };

    return(
        <div>
            {result && (
            <p className={`${result.success ? 'success' : 'error'}`}>
            {result.message}
            </p>
            )}
            <h3>Contact form</h3>
            <div className="contact-form">
            <form onSubmit={sendEmail}>
                <label>Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="Enter your full name"
                    onChange={onInputChange}
                />
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={state.email}
                    placeholder="Enter your email"
                    onChange={onInputChange}
                />
                <label>Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={state.subject}
                    placeholder="Enter subject"
                    onChange={onInputChange}
                />
                <label>Message</label>
                <textarea
                    as="textarea"
                    name="message"
                    value={state.message}
                    rows="3"
                    placeholder="Enter your message"
                    onChange={onInputChange}
                ></textarea>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}

export default ContactForm;