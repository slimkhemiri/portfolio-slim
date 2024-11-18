import { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send('service_b5howfa', 'template_ysc4p0r', templateParams, 'V0ittX1AZSgl-Nnff')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again later.');
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t(`contact.title`)}</h1>
          <p>{t(`contact.desc`)}</p>
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                placeholder={t(`contact.name`)}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                id="outlined-required"
                placeholder={t(`contact.email`)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              placeholder={t(`contact.msg`)}
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            {t(`contact.send`)}
            </Button>
          </Box>
          {success && <Alert style={{width:'60%'}} variant="outlined" severity="success">Message sent successfully!</Alert>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
