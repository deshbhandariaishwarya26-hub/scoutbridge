"use client";

import { createContext, useContext, useState } from "react";

const DiscoveryContext = createContext();

export function DiscoveryProvider({ children }) {
  const [searchData, setSearchData] = useState({
    industry: "",
    location: "",
    stage: ""
  });

  const [selectedProspect, setSelectedProspect] = useState(null);

  return (
    <DiscoveryContext.Provider
      value={{
        searchData,
        setSearchData,
        selectedProspect,
        setSelectedProspect
      }}
    >
      {children}
    </DiscoveryContext.Provider>
  );
}

export function useDiscovery() {
  return useContext(DiscoveryContext);
}