import "./SearchCountry.css";
export const SelectRegion = ({ data, region, handleRegionChange }) => {
  const empty = ["All Regions"];
  const regionData = [...empty, ...new Set(data)];

  return (
    <div>
      <select
        className="select-dropdown"
        onChange={handleRegionChange}
        value={region}
      >
        {regionData.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};
