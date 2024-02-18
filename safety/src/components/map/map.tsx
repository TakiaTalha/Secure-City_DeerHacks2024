import React, { useEffect, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
  const mapRef = useRef(null);
  const locations = [
    { lat: 43.65751, lng: -79.390294, title: "600 University Avenue" },
    { lat: 43.7347, lng: -79.4509, title: "Wilson subway station" },
  ];

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      const google = await loader.load();

      const mapOptions = {
        center: { lat: 43.651070, lng: -79.347015 },
        zoom: 10,
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);

      // Add circles to the map
      locations.forEach((location) => {
        const circle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000' ,
          fillOpacity: 0.35,
          map: map,
          center: location,
          radius: 1000, // Size of the circle in meters, adjust as needed
          clickable: true, // Make the circle clickable
        });

        // Add a click listener for the circle
        circle.addListener('click', () => {
          const lat = circle.getCenter().lat();
          const lng = circle.getCenter().lng();
          const title = location.title;
          alert(`Latitude: ${lat}, Longitude: ${lng}, ${title} `); // You can replace this with your own logic
        });
      });
    };

    initMap();
  }, []);

  return (
    <div style={{ height: "500px", width: "100%" }} ref={mapRef} />
  );
}

export default Map;