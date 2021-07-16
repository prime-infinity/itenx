
import httpOps from '../services/http'
import { useState, useEffect } from 'react';
const Home = () =>{

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
        <div className="row"> 

            {stuff.map((stuffs) => {
                <div className="col-3" key={stuffs.id}>

                </div>
            })}
            
        </div>
    );
}

export default Home;