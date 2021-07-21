import httpOps from '../../services/http'
import { useState, useEffect} from 'react';

import '../../index.css'

import ParticularStuff from './ParticularStuff'
import Backdrop from '../ui/Backdrop'

function Stuff(){

    const [stuff, setStuff] = useState([])
    const [isBackdrop, setBackdrop] = useState(false)

    useEffect(() => {
        fetchStuff()
    }, [])

    function fetchStuff(){
        httpOps.getStuffs()
        .then((res) => {
            setStuff(res.data)
        })
        .catch((err) => {
           console.log(err)
        })
    }

    function dropBackdrop(){
        setBackdrop(false)
    }
   
    return(
        <div className="row mt-5 mb-5 justify-content-center"> 

            {isBackdrop && <Backdrop  onDrop={dropBackdrop}/>}

            {stuff.map((stuffs) => (

                <ParticularStuff key={stuffs.id} stuffprop={stuffs} />
                
            ))}
            
        </div>
    );
   
}



export default Stuff;