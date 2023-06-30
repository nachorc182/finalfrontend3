import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";


const Card = ({ id, name, username }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(ContextGlobal);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(favorites.some((fav) => fav.id === id));
  }, [favorites, id]);

  const handleFavClick = () => {
    if (isFav) {
      removeFavorite({ id, name, username });
    } else {
      addFavorite({ id, name, username });
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
        <img src="./images/doctor.jpg" alt="doctor" />
        <p>{username}</p>
      </Link>
      <button
        onClick={handleFavClick}
        className={`favButton ${isFav ? "favButton-active" : ""}`}
      >
        {isFav ? "Remove Fav" : "Add Fav"}
      </button>
    </div>
  );
};

export default Card;
