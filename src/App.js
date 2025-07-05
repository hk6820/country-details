import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryDetails } from "./CountryDetails/CountryDetails";
import countryData from "./data.json";
import { MainPage } from "./Main/MainPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage data={countryData} />} />
        <Route path="/countryDetails" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}
