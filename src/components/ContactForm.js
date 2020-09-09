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
        console.log('sendEmail')
        axios
        .post('/send', { ...state })
        .then(response => {
            setResult(response.data);
            setState({ name: '', email: '', subject: '', message: '' });
        })
        .catch(() => {
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
            <h3>Contact form</h3>
            {result && (
            <p className={`${result.success ? 'success' : 'error'}`}>
            {result.message}
            </p>
            )}
            <div style={{padding:20}}>
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
        </div>
    )
}

export default ContactForm;