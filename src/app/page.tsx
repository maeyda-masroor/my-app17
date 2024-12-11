import Image from "next/image";
// _app.tsx or layout.tsx
import "leaflet/dist/leaflet.css";
import Map from '../components/Map';
export default function Home() {
  return (
    <div>
      <Map/>
    </div>
  );
}
