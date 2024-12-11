import time from '../../../image/time.svg';
import location from '../../../image/Location.svg';
import cal from '../../../image/cal.svg';

import './Details.css';

function Details({tel, hours, address, services}) {

    return(
        <div className='datails-container'>
        <h2 className='item item1'><img src={cal} alt='our phone number' /> {tel}</h2>
        <h3 className='item item2'><img src={time} alt='working time' /> working: {hours}</h3>
        <p className='item item3'><img src={location} alt='our location' /> {address}</p>
        </div>
    )

}

export default Details;