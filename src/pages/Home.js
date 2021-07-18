
import Stuff from '../components/Stuffs'

import { useContext } from 'react';

import AuthStatusContext from '../store/authStatus'


const Home = () =>{
    const authCtx = useContext(AuthStatusContext);

    /*function logoutUnauth(){
        authCtx.unAuthenticate({
            auth:false,
        })

        console.log(authCtx.auth)
    }
    function showAuth(){
       
        console.log(authCtx.auth)
    }*/

    return(
        <Stuff />
    );
}

export default Home;