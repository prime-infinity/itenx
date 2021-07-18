
import httpOps from '../services/http'
import { useState, useEffect, useContext } from 'react';

import AuthStatusContext from '../store/authStatus'

const Home = () =>{
    const authCtx = useContext(AuthStatusContext);

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

    function logoutUnauth(){
        authCtx.unAuthenticate({
            auth:false,
        })

        console.log(authCtx.auth)
    }
    function showAuth(){
       
        console.log(authCtx.auth)
    }

    return(
        <div className="row"> 

            <button className="btn btn-danger" onClick={logoutUnauth}>Logout</button>
            <button className="btn btn-primary" onClick={showAuth}>showauth</button>

            {authCtx.auth.name ? 'logged in' : 'not logged in'}

            {stuff.map((stuffs) => {
                <div className="col-3" key={stuffs.id}>

                </div>
            })}
            
        </div>
    );
}

export default Home;