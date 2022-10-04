import { useState } from 'react';
import Button from '../Button'
import { createSession } from '../services/ChargerService'
import { CHARGING, START_CHARGING } from '../utils';

const SelectedCharger = ({location, charger}) => {
    const [btnLabel, setBtnLabel] = useState(START_CHARGING);

    function handleClick() {
            async function setChargeSession() {
              const res = await createSession('123', '098', charger.id)
              const json = await res;
              setBtnLabel(CHARGING);
            }
        
            setChargeSession().catch(error => console.error(error))
    }

    return (
        <div key={charger.id} className="charger">
            <h2>{location.name}</h2>
            <p>{location.address}</p>
            <hr></hr>
            <h4 className='charger-header'>Number: {charger.id}</h4>
            <div className='charger-info'>
                <span>Level: {charger.level}</span>
                <span>KW: {charger.kw}</span>
            </div>
            <Button label={btnLabel} onClick={() => handleClick()}/>
        </div>
        )
}

export default SelectedCharger;