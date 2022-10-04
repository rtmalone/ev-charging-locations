import { useEffect, useState } from 'react';
import './App.css';
import {getChargePoints} from './services/ChargerService'
import ChargerItem from './ChargerItem'
import SelectedCharger from './SelectedCharger'


function App() {
  const [chargePointData, setChargePointData] = useState([])
  const [numResults, setNumResults] = useState(null)
  const [selectedChargerData, setSelectedChargerData] = useState(null);
  const [location, setSelectedLocation] = useState(null);

  useEffect(() => {
    async function fetchChargePoints() {
      const res = await getChargePoints()
      const json = await res.json();
      setChargePointData(json);
      setNumResults(json.length)
    }

    fetchChargePoints().catch(error => console.error(error))
  }, []);

  function handleClick(location, charger) {
    setSelectedChargerData(charger);
    setSelectedLocation(location);
  }

  return (
    <div className="App">
      <header><h1>ev.energy</h1></header>
      {selectedChargerData
        ? <SelectedCharger location={location} charger={selectedChargerData}/>
        : <>
            <div className='list-container'>
              <p style={{alignSelf: 'flex-start'}}>Results: {numResults}</p> 
              {chargePointData.map((item) => 
                <ChargerItem data={item} selectCharger={handleClick}/>
              )}
            </div>
          </>
      }

    </div>
  );
}

export default App;
