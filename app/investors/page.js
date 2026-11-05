"use client";

import { useState } from "react";
import { investors } from "../../data/dummyData";
import { useDiscovery } from "../../context/DiscoveryContext";
import SearchForm from "../../components/SearchForm";
import ProspectCard from "../../components/ProspectCard";

export default function Investors() {
  const { searchData } = useDiscovery();

  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  function searchInvestors() {
    const filtered = investors.filter((item) => {
      return (
        item.industry === searchData.industry &&
        item.location === searchData.location &&
        item.stage === searchData.stage
      );
    });

    setResults(filtered);
    setSearched(true);
  }

  function resetSearch() {
    setResults([]);
    setSearched(false);
  }

  return (
    <main className="container">
      <h1>Investor Discovery</h1>
      <p>Find investors suitable for your startup.</p>

      <SearchForm
        type="investor"
        onSearch={searchInvestors}
        onReset={resetSearch}
      />

      <h2>Search Results</h2>

      {searched && results.length > 0 && (
        <p className="result-count">
          Found {results.length} matching investors.
        </p>
      )}

      <div className="results-grid">
        {results.map((item) => (
          <ProspectCard
            key={item.id}
            item={item}
            type="investor"
          />
        ))}
      </div>

      {searched && results.length === 0 && (
        <p className="empty">
          No matching investors found. Try different filters.
        </p>
      )}
    </main>
  );
}