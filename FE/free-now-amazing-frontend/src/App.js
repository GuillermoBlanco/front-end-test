import React, { useState, useEffect } from 'react'
import { Marker } from 'google-maps-react';

import { fetchShares } from './services/share-now';
import { fetchFrees } from './services/free-now';
import List from './components/List/List.js';
import MapContainer from './components/MapContainer/MapContainer.js';

import './App.css';

const App = () => {
  const [shares, setShares] = useState([]);
  const [frees, setFrees] = useState([]);
  const [freesLocations, setFreesLocations] = useState();

  const [isFreeView, setIsFreeView] = useState(false);

  useEffect(() => {
    // code to run on component mount
    fetchShares().then(({placemarks}) => setShares(placemarks));
    // code to run on component un-mount
    return () => setShares([]);
  }, [])
  
  useEffect(() => {
    // code to run on component mount
    let locations;
    fetchFrees()
      .then(({poiList}) => {
          locations = poiList.reduce((accLocations, currentFree, currentIndex) => {
            return accLocations.concat([{ id: currentFree.id, location: currentFree.coordinate}])
          }, []);
          setFreesLocations(locations);
        return poiList;
      })
      .then((poiList) => setFrees(poiList));
    // code to run on component un-mount
    return () => setFrees([]);
  }, [])

  return (
      <div className="App">
      <header className="App-header">
       <h1>My {isFreeView ? 'Free' : 'Share'}-now vehicles List</h1>
       <button
        className="btn"
        onClick={()=> setIsFreeView(!isFreeView)}>
          Switch to {!isFreeView ? 'free mode' : 'share mode'}
       </button>
      </header>
      <section className="App-content">
        <List shares={shares} frees={frees} isFreeView={isFreeView}/>
        {(isFreeView && freesLocations && 
          <MapContainer className="Map" latitude={freesLocations[0].location.latitude} longitude={freesLocations[0].location.longitude}>
            {freesLocations.map(({ id, location}) => 
              <Marker key={id}
                name={`Current location ${id}`} position={{lat: location.latitude, lng: location.longitude}}/>)
            }
          </MapContainer>
        )}
      </section>
     </div>
  )
}

export default App;
