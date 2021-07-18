import httpOps from '../services/http'
import { useState, useEffect} from 'react';

import '../index.css'

function Stuff(){

    const [stuff, setStuff] = useState([])

    useEffect(() => {
        fetchStuff()
    }, [])

    function fetchStuff(){
        httpOps.getStuffs()
        .then((res) => {
            setStuff(res.data)
            console.log(res.data)
        })
        .catch((err) => {
           console.log(err)
        })
    }
   
    return(
        <div className="row mt-5 mb-5"> 

            {stuff.map((stuffs) => (
                <div className="col-md-3 col-12 mb-4 blackBorder" key={stuffs.id}>
                    <img className="img-fluid" src={` /stuffimages/${stuffs.image }`} alt="image"/>
                </div>
            ))}

        </div>
    );
   
}



export default Stuff;