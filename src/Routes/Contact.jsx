import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={`contact ${theme}`}>
      <h2>Quieres saber mas de nosotros?</h2>
      <p>Envianos tus datos y te contactaremos!</p>
      <Form />
    </div>
  );
};

export default Contact;
