import { useEffect, useState } from "react";
import { SearchCountry } from "../SearchCountry/SearchCountry";
import { SelectRegion } from "../SearchCountry/SelectRegion";
import { Card } from "../Card/Card";
import { Header } from "../Header/Header";
import { useDebounce } from "../Debounce";
import "./Main.css";

export const MainPage = ({ data }) => {
  const [country, setCountry] = useState(data);
  const [region, setRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const debounceSearch = useDebounce(searchTerm, 500);

  const countryData = data.map((country) => country.name);
  const regionData = data.map((country) => country.region);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (debounceSearch) {
      const filteredCountries = data.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCountry(filteredCountries);
    } else {
      setCountry(data);
    }
  }, [debounceSearch, data,searchTerm]);

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    const filteredCountries = data.filter(
      (country) => country.region === selectedRegion
    );
    setCountry(filteredCountries);
  };

  useEffect(() => {
    if (region === "All Regions" || region === "") {
      setCountry(data);
    } else {
      const filteredCountries = data.filter(
        (country) => country.region === region
      );
      setCountry(filteredCountries);
    }
  }, [region, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`main-page ${theme}`}>
      <Header mode={theme} toggleTheme={toggleTheme} />
      <div className="search-container">
        <SearchCountry
          data={countryData}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          mode={theme}
        />
        <SelectRegion
          data={regionData}
          handleRegionChange={handleRegionChange}
          region={region}
          mode={theme}
        />
      </div>
      <div className="card-main-container">
        {country.map((country, index) => (
          <Card key={index} country={country} mode={theme} />
        ))}
      </div>
    </div>
  );
};
