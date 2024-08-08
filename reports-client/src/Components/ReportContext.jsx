import React, { createContext, useState } from 'react';
export const ReportContext = createContext();
export const ReportsProvider = ({ children }) => {
  const [filteredReports, setFilteredReports] = useState([]);
  const updateFilteredReports = (reports) => {
    setFilteredReports(reports);
  };

  return (
    <ReportContext.Provider value={{ filteredReports, updateFilteredReports }}>
      {children}
    </ReportContext.Provider>
  );
};