import httpOps from '../../services/http'
import { useState, useEffect} from 'react';

import '../../index.css'

import ParticularStuff from './ParticularStuff'

function Stuff(){

    const [stuff, setStuff] = useState([])

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
   
    return(
        <div className="row mt-5 mb-5 justify-content-center"> 

            {stuff.map((stuffs) => (

                <ParticularStuff key={stuffs.id} stuffprop={stuffs} />
                
            ))}
            
        </div>
    );
   
}



export default Stuff;