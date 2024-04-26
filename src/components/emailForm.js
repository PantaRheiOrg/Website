import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/emailForm.css';
import texts from '../text/texts.json'; 

const EmailForm = ({language}) => {
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
                <h2>{texts.emailFormTitle[language]}</h2>
                <Form className="email-form">
                <Form.Group controlId="subject">
                    <Form.Label className="ttextt">{texts.emailFormSubjectLabel[language]}</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder={texts.emailFormSubjectPlaceholder[language]}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-input"
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label className="ttextt">{texts.emailFormMessageLabel[language]}</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder={texts.emailFormMessagePlaceholder[language]}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input"
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit} className="submit-btn">
                    {texts.emailFormSubmitButton[language]}
                </Button>
                </Form>
            </div>
        </div>
    );
  };
  
  export default EmailForm;
