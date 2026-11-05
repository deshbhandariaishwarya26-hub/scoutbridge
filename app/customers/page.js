"use client";

import { useState } from "react";
import { customers } from "../../data/dummyData";
import { useDiscovery } from "../../context/DiscoveryContext";
import SearchForm from "../../components/SearchForm";
import ProspectCard from "../../components/ProspectCard";

export default function Customers() {
  const { searchData } = useDiscovery();

  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  function searchCustomers() {
    const filtered = customers.filter((item) => {
      return (
        item.industry === searchData.industry &&
        item.location === searchData.location
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
      <h1>Customer Discovery</h1>
      <p>Find companies that match your business requirements.</p>

      <SearchForm
        type="customer"
        onSearch={searchCustomers}
        onReset={resetSearch}
      />

      <h2>Search Results</h2>

      {searched && results.length > 0 && (
        <p className="result-count">
          Found {results.length} matching customers.
        </p>
      )}

      <div className="results-grid">
        {results.map((item) => (
          <ProspectCard
            key={item.id}
            item={item}
            type="customer"
          />
        ))}
      </div>

      {searched && results.length === 0 && (
        <p className="empty">
          No matching customers found. Try different filters.
        </p>
      )}
    </main>
  );
}