import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, Text, useDisclosure } from '@chakra-ui/react';
import { ReportsProvider } from './Components/ReportContext';
import SearchBar from './Components/SearchBar';
import MapboxMap from './Components/MapboxMap';
import AddReportForm from './Components/addReportForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [units, setUnits] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5080/reports')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error('Error fetching reports:', error));
      
    fetch('http://localhost:5080/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
      
    fetch('http://localhost:5080/manuever_unit')
      .then(response => response.json())
      .then(data => setUnits(data))
      .catch(error => console.error('Error fetching units:', error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredReports = searchTerm
    ? reports.filter(report => 
        report.report_type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : reports;

  const handleReportClick = (report) => {
    const user = users.find(user => user.id === report.reporting_unit_id);
    const unit = units.find(unit => unit.id === user.manuever_unit_id);
    setSelectedReport(report);
    setSelectedUser(user);
    setSelectedUnit(unit)
    onOpen();
  };

  return (
    <Box>
      <ReportsProvider>
        <Heading as="h1" size="xl" mb={4} textAlign="center">
        Civil Affairs Report Database
        </Heading>
        <Flex height="90vh">
          <Box width="30%" p={4} borderRight="1px" borderColor="gray.200">
            <SearchBar onSearch={handleSearch} />
            <Box mt={4}>
              <Heading as="h3" size="md">Results</Heading>
              <ul>
                {filteredReports.map(report => (
                  <li key={report.id}>
                    <Button 
                      variant="link" 
                      onClick={() => handleReportClick(report)}
                      style={{ display: 'block', textAlign: 'left' }} // Ensure button content is aligned properly
                    >
                      <div className="report-type">{report.report_type}</div>
                      <div className="report-details">
                        <div><strong>Disposition:</strong> {report.disposition}</div>
                        <div><strong>Coordinates:</strong> {report.lat_long}</div>
                      </div>
                    </Button>
                </li>
                ))}
              </ul>
            </Box>
            <Box>
              <h1>Report Management System</h1>
                <AddReportForm />
            </Box>
          </Box>
          <Box width="70%" height="100%">
            <MapboxMap reports={filteredReports} />
          </Box>
        </Flex>
      </ReportsProvider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedReport && (
              <Box>
                <Heading as="h4" size="sm">Report Details</Heading>
                <Text><strong>ID:</strong> {selectedReport.id}</Text>
                <Text><strong>Type:</strong> {selectedReport.report_type}</Text>
                <Text><strong>Body:</strong> {selectedReport.report_body}</Text>
                <Text><strong>Disposition:</strong> {selectedReport.disposition}</Text>
                <Text><strong>Event Location:</strong> {selectedReport.lat_long}</Text>
                {selectedUser ? (
                  <Box mt={4}>
                    <Heading as="h4" size="sm">User Details</Heading>
                    <Text><strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</Text>
                    <Text><strong>Position:</strong> {selectedUser.position}</Text>
                    <Text><strong>Grade:</strong> {selectedUser.grade}</Text>
                  </Box>
                ) : (
                  <Text>No user details available.</Text>
                )}
                  {selectedUnit ? (
                    <Box mt={4}>
                      <Heading as="h4" size="sm">Unit Details</Heading>
                      <Text><strong>Unit Name:</strong> {selectedUnit.unit_name}</Text>
                      <Text><strong>Higher Unit:</strong> {selectedUnit.higher_unit}</Text>
                      <Text><strong>Mission:</strong> {selectedUnit.mission}</Text>
                      <Text><strong>Location:</strong> {selectedUnit.location}</Text>
                    </Box>
                  ) : (
                    <Text>No unit details available.</Text>
                  )}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default App;