import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/emailForm.css';

const EmailForm = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = () => {
      const recipient = 'oliver@pnta.dk';
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    };
  
    return (
        <div className="emailSection py-5 ">
            <div className="email-form-container ">
                <h2>Send Us a Question &#128640;</h2>
                <Form className="email-form">
                <Form.Group controlId="subject">
                    <Form.Label className="ttextt">Subject</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-input"
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label className="ttextt">Message</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input"
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit} className="submit-btn">
                    Send Invitation
                </Button>
                </Form>
            </div>
        </div>
    );
  };
  
  export default EmailForm;
