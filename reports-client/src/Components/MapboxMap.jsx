import React, { useContext, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ReportContext } from './ReportContext';

// Example icon colors; adjust as needed
const iconColors = {
  'High': 'red',
  'Medium': 'orange',
  'Low': 'green',
  'Unknown': 'gray'
};

mapboxgl.accessToken = 'pk.eyJ1Ijoid2JhbGxhcmQ3IiwiYSI6ImNsemxmOGJoejAyMmMycXB6MWs4anNzbnEifQ.GXSdydsnNf8d4rDYreHzMg';

const MapboxMap = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const { filteredReports } = useContext(ReportContext);

  useEffect(() => {
    if (map.current) return; // Ensure map is not initialized again

    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-98.6, 39.5],
      zoom: 4
    });

    map.current.on('load', () => {
      console.log('Map loaded successfully');
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // Ensure map is initialized

    console.log('Filtered reports:', filteredReports);

    filteredReports.forEach(report => {
      if (report.lat_long) {
        const [lat, lng] = report.lat_long.split(',').map(Number);
        console.log(`Adding marker at lat: ${lat}, lng: ${lng}`); // Debugging

        // Determine the color based on the disposition
        const color = iconColors[report.disposition] || 'gray'; // Default color

        // Create a custom marker with color
        const markerElement = document.createElement('div');
        markerElement.style.backgroundColor = color;
        markerElement.style.width = '30px';
        markerElement.style.height = '30px';
        markerElement.style.borderRadius = '50%';
        markerElement.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
        
        new mapboxgl.Marker(markerElement)
          .setLngLat([lng, lat]) // Ensure lng, lat order
          .setPopup(new mapboxgl.Popup().setHTML(`
            <h3>Type: ${report.report_type}</h3>
            <p>Disposition: ${report.disposition}</p>
            <p>Coordinates: ${report.lat_long}</p>
          `))
          .addTo(map.current);
      }
    });
  }, [filteredReports]);

  return (
    <div
      ref={mapContainerRef}
      id="map"
      style={{
        height: '100%',
        border: '2px solid black',
        borderRadius: '8px'
      }}
    />
  );
};

export default MapboxMap;
