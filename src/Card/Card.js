import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ country }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/countryDetails", { state: { country } });
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <img src={country?.flag} alt={`Flag of ${country?.name || 'the country'}`} className="flag" />
      <h2>{country?.name}</h2>
      <p>Population: {country?.population}</p>
      <p>Region: {country?.region}</p>
      <p>Capital: {country?.capital}</p>
    </div>
  );
};
