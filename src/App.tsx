// Fully commented on https://www.bricks-platform.com/BlogPost/Creating%20a%20Simple%20Map%20with%20OpenLayers%20and%20React

import { useEffect, useRef, useState } from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import './index.css'

function App() {

  const mapTargetElement = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<Map>()

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({ source: new OSM() }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 0,
        minZoom: 0,
        maxZoom: 28,
      }),
    })

    map.setTarget(mapTargetElement.current || "")
    setMap(map)

    return () => map.setTarget("")
  }, [])

  return (
    <div
      ref={mapTargetElement}
      className="map"
      style={{
        width: "1200px",
        height: "500px",
        position: "relative",
      }} >
    </div>
  )
}
export default App; 