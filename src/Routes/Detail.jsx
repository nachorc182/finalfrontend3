import React, { useContext, useEffect, useState } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { theme } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={`detail ${theme}`}>
      <h1>Detail Dentist {id}</h1>
      {dentist && (
        <div>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
