"use client";

import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet"; // Import type from Leaflet

// Define data types
type MarkerData = {
  lat: number;
  lng: number;
  label: string;
};

const DynamicMap = () => {
  // Explicitly type state for Leaflet compatibility
  const [polygonData, setPolygonData] = useState<LatLngExpression[]>([]);
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    // Replace with API call or dynamic data
    const fetchData = async () => {
      // Ensure the polygon data matches LatLngExpression type
      const fetchedPolygon: LatLngExpression[] = [
        [40.416775, -3.703790], // Madrid
        [41.385064, 2.173404],  // Barcelona
        [39.469907, -0.376288], // Valencia
        [40.416775, -3.703790], // Closing the loop
      ];

      const fetchedMarkers: MarkerData[] = [
        { lat: 40.416775, lng: -3.703790, label: "Madrid" },
        { lat: 41.385064, lng: 2.173404, label: "Barcelona" },
        { lat: 39.469907, lng: -0.376288, label: "Valencia" },
      ];

      setPolygonData(fetchedPolygon);
      setMarkers(fetchedMarkers);
    };

    fetchData();
  }, []);

  return (
    <MapContainer
      center={[40.416775, -3.703790]}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Render polygon dynamically */}
      {polygonData.length > 0 && (
        <Polygon positions={polygonData} color="blue" />
      )}

      {/* Render markers dynamically */}
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lng]}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DynamicMap;
