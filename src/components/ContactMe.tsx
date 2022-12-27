import React, { useRef, useState } from 'react';
import { Button } from './Button';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Input from './Input';

export const ContactMe = () => {
  const formSparkUrl = `${process.env.NEXT_PUBLIC_URL}/api/contact`;
  const [checkedItems, setCheckedItems] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const recaptchaKey = '6LdQdAwgAAAAADYwUNsX1OBKYNT5gjf11IaSbSBu';
  const recaptchaRef: any = useRef();
  const [recaptchaToken, setReCaptchaToken] = useState();

  const initialFormStateS = () => {
    setName('');
    setEmail(''), setSubject(''), setMessage('');
  };

  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitting(true);
    await contactSubmitHandler();
    setSubmitting(false);
    initialFormStateS;
  };
  const contactSubmitHandler = async () => {
    const bodyObj = {
      name,
      email,
      subject,
      message,
    };

    try {
      const { data: response } = await axios.post(formSparkUrl, bodyObj);
      toast.success('Your message is sent successfully');

      recaptchaRef.current.reset();
      initialFormStateS();
    } catch (err: any) {
      toast.error(`${err.message}`);
    }
  };

  const updateRecaptchaToken = (token: any) => {
    setReCaptchaToken(token);
  };

  return (
    <section id="contact-me" className="">
      <div className="relative z-0 text-center">
        <h2 className="relatve flex items-center justify-center pt-10 text-3xl font-semibold text-gray-900 dark:text-gray-50">
          Contact
        </h2>
        <span className="mx-auto mb-16 mt-2 flex h-1.5 w-[80px] items-center justify-center rounded-full bg-black" />

        <div className="" onSubmit={submitForm}>
          <Input
            type="text"
            placeholder="Nom"
            required
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
         
          <textarea
            rows={6}
            cols={10}
            placeholder="Message"
            required
            value={message}
            className="block  w-full rounded-[7px] border border-gray-200 bg-gray-200 px-4 text-gray-900 outline-none focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-700 dark:text-gray-50"
            onChange={(e: any) => setMessage(e.target.value)}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            style={{ marginTop: '10px', width: '100%' }}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
          <div
            style={{
              width: '100%',
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() =>
                toast.success('Votre message est envoyer avec succes')
              }
            >
              {' '}
              {/* {submitting ? `Send...` : `Send Message`} */}
              Envoyer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
