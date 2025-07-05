import "./SearchCountry.css";

export const SearchCountry = ({ handleSearch, searchTerm }) => {
  return (
    <div className="search-country">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};
