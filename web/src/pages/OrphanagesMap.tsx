import React, { useEffect, useState } from 'react'
import mapMarkerImg from '../images/Local.svg'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanagesMap.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'
import api from '../services/api'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]

})

interface Orphanage {
  id: number,
  latitude: number,
  longitude: number,
  name: string
}

function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  return(
    <div id="page-map">
      <aside> 
        <header>
          <img src={mapMarkerImg} alt="mapMarkerImg"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Curitiba</strong>
          <span>Parana</span>

          gust4f3rn@gmail.com

        </footer>
      </aside>

      <Map 
        center={[-25.4420831,-49.3350534]}
        zoom={15}
        style={{ width:'100%', height:'100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

        {orphanages.map(orphanages => {
          return(
            <Marker 
              icon={mapIcon}
              position={[orphanages.latitude,orphanages.longitude]}
              key={orphanages.id}
            >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
              {orphanages.name}
              <Link to={`orphanages/${orphanages.id}`}>
              <FiArrowRight size={20} color="#FFF" />
              </Link>
          </Popup>
        </Marker>
          )
        })}
        
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
      
    
    </div>
  )
}

export default OrphanagesMap