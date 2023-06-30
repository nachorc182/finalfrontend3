import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { data, theme } = useContext(ContextGlobal);

  return (
    <main className={`home ${theme}`}>
      <h1>Clinica DH</h1>
      <div className="card-grid">
        {data.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
