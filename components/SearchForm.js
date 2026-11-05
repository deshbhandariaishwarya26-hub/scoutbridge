"use client";

import { useDiscovery } from "../context/DiscoveryContext";

export default function SearchForm({ type, onSearch, onReset }) {
  const { searchData, setSearchData } = useDiscovery();

  function handleChange(e) {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }

  function handleReset() {
    setSearchData({
      industry: "",
      location: "",
      stage: ""
    });

    onReset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label>Industry</label>

      <select
        name="industry"
        value={searchData.industry}
        onChange={handleChange}
        required
      >
        <option value="">Select Industry</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Technology">Technology</option>
        <option value="Retail">Retail</option>
        <option value="Education">Education</option>
      </select>

      <label>Location</label>

      <select
        name="location"
        value={searchData.location}
        onChange={handleChange}
        required
      >
        <option value="">Select Location</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
      </select>

      {type === "investor" && (
        <>
          <label>Investment Stage</label>

          <select
            name="stage"
            value={searchData.stage}
            onChange={handleChange}
            required
          >
            <option value="">Select Stage</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
          </select>
        </>
      )}

      <div className="form-buttons">
        <button type="submit" className="btn">
          Search {type === "customer" ? "Customers" : "Investors"}
        </button>

        <button
          type="button"
          className="btn clear-btn"
          onClick={handleReset}
        >
          Clear Filters
        </button>
      </div>
    </form>
  );
}