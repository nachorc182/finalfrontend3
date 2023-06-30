import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { favorites, removeFavorite, theme } = useContext(ContextGlobal);

  const handleFavoriteRemove = (id) => {
    removeFavorite(id);
  };

  return (
    <div className={`favs ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            isFavorite={true} // Agregamos la propiedad isFavorite con el valor true
            onFavoriteRemove={handleFavoriteRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
