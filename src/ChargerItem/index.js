import React from 'react'
import Button from '../Button'
import { UNAVAILABLE, SELECT_CHARGER } from '../utils'
import './ChargetItem.css';

const ChargerItem = ({data, selectCharger}) => {
    const {AddressInfo, Connections} = data;
    const {Title, AddressLine1, ID} = AddressInfo;
    const location = {
        id: ID, 
        name: Title ? Title : UNAVAILABLE,
        address: AddressLine1 ? AddressLine1 : UNAVAILABLE
    }

    const chargers = Connections.map(connection => {
        const {LevelID, PowerKW, ID} = connection;
        return {
            id: ID,
            level: LevelID ? LevelID : UNAVAILABLE,
            kw: PowerKW ? PowerKW : UNAVAILABLE
        }
    })

    return (
        <div key={location.id} className="charger-location">
            <h2>{location.name}</h2>
            <p>{location.address}</p>
            <hr></hr>
            <h3>Chargers</h3>
            {chargers.map((charger) => 
                <div key={charger.id} className="charger">
                    <h4 className='charger-header'>Number: {charger.id}</h4>
                    <div className='charger-info'>
                        <span>Level: {charger.level}</span>
                        <span>KW: {charger.kw}</span>
                    </div>
                    <Button label={SELECT_CHARGER} onClick={() => selectCharger(location, charger)}/>
                </div>
            )}
        </div>
    )
}

export default ChargerItem;