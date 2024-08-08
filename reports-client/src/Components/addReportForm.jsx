import React, { useState } from 'react';
import { Input, Button, VStack, FormLabel, Textarea, Select } from '@chakra-ui/react';

const AddReportForm = () => {
  const [reportData, setReportData] = useState({
    report_type: '',
    event_dtg: '',
    lat_long: '',
    reporting_unit_id: '',
    report_body: '',
    disposition: '',
    additional_poi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Report added successfully');
        setReportData({
          report_type: '',
          event_dtg: '',
          lat_long: '',
          reporting_unit_id: '',
          report_body: '',
          disposition: '',
          additional_poi: ''
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error adding report:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <VStack spacing={4} align="start">
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="report_type">Report Type</FormLabel>
        <Input
          id="report_type"
          name="report_type"
          value={reportData.report_type}
          onChange={handleChange}
          placeholder="Enter report type"
          required
        />

        <FormLabel htmlFor="event_dtg">Event Date/Time</FormLabel>
        <Input
          id="event_dtg"
          name="event_dtg"
          type="datetime-local"
          value={reportData.event_dtg}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="lat_long">Latitude, Longitude</FormLabel>
        <Input
          id="lat_long"
          name="lat_long"
          value={reportData.lat_long}
          onChange={handleChange}
          placeholder="Enter latitude and longitude"
          required
        />

        <FormLabel htmlFor="reporting_unit_id">Reporting Unit ID</FormLabel>
        <Input
          id="reporting_unit_id"
          name="reporting_unit_id"
          value={reportData.reporting_unit_id}
          onChange={handleChange}
          placeholder="Enter reporting unit ID"
        />

        <FormLabel htmlFor="report_body">Report Body</FormLabel>
        <Textarea
          id="report_body"
          name="report_body"
          value={reportData.report_body}
          onChange={handleChange}
          placeholder="Enter details of the report"
          required
        />

        <FormLabel htmlFor="disposition">Disposition</FormLabel>
        <Select
          id="disposition"
          name="disposition"
          value={reportData.disposition}
          onChange={handleChange}
          placeholder="Select disposition"
          required
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="Unknown">Unknown</option>
        </Select>

        <FormLabel htmlFor="additional_poi">Additional Points of Interest</FormLabel>
        <Input
          id="additional_poi"
          name="additional_poi"
          value={reportData.additional_poi}
          onChange={handleChange}
          placeholder="Enter additional points of interest"
        />

        <Button type="submit" colorScheme="teal" mt={4}>
          Submit Report
        </Button>
      </form>
    </VStack>
  );
};

export default AddReportForm;