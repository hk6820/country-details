import { useLocation } from "react-router-dom";
import "./CountryDetails.css";
export const CountryDetails = ({ country }) => {
  const { state } = useLocation();

  return (
    <>
      {state && (
        <div>
          <button
            className="back-button"
            onClick={() => {
              window.history.back();
            }}
          >
            ← Back
          </button>
          <div className="country-details">
            <div>
              <img
                src={state.country.flag}
                alt={`${state.country.name} flag`}
                className="country-flag"
              />
            </div>
            <div>
              <h2 style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                {state.country.name}
              </h2>
              <div className="country-details-info">
                <div className="country-info">
                  <p>
                    <strong>Name:</strong> {state?.country?.population}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {state.country.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {state.country.region}
                  </p>
                  <p>
                    <strong>Subregion: </strong>
                    {state.country.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {state.country.capital}
                  </p>
                </div>
                <div className="country-additional-info">
                  <p>
                    <strong>Top Lavel Domain:</strong>{" "}
                    {state.country.topLevelDomain &&
                      state.country.topLevelDomain.join(", ")}
                  </p>
                  <p>
                    {state.country.currencies && (
                      <>
                        <strong>Currencies:</strong>{" "}
                        {Object.values(state.country.currencies)
                          .map((c) => c.name)
                          .join(", ")}
                      </>
                    )}
                  </p>

                  <p>
                    <strong>Languages:</strong>{" "}
                    {state?.country?.languages.map((item) => (
                      <span>{item?.name}</span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="border-buttons">
                {state?.country?.borders && (
                  <>
                    <strong>Border Countries:</strong>

                    {state.country.borders.map((item) => (
                      <span key={item} className="border-button">
                        {item}
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
