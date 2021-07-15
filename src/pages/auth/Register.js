import classes from './Auth.module.css'
import CardOne from '../../components/ui/CardOne'
import { Link } from 'react-router-dom';
import '../../index.css'

import httpOps from '../../services/http'
import { useState } from 'react';

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConPass] = useState('');

    function registerUser(){
        httpOps.createUser(name,email,password)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(

        <div className="row">
            
            <div className="col-12">

                <div className="row pt-5">
                    
                    <div className="col-11 col-md-5 col-lg-5 mx-auto mt-5">
                        <CardOne>

                            <div className="form-group mb-5 mt-2">
                                <input value={name} onChange={ 
                                    (e) => setName(e.target.value)
                                } type="text" placeholder="Name" className={`form-control customInput ${classes.customInput}`} />
                            </div>

                            <div className="form-group mb-5 mt-2">
                                <input value={email} 
                                onChange={
                                    (e) => setEmail(e.target.value)
                                } type="text" placeholder="Email or Phone Number" className={`form-control customInput ${classes.customInput}`} />
                            </div>

                            <div className="form-group mb-5 mt-5">
                                <input value={password}
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }  type="text" placeholder="Password" className={`form-control customInput ${classes.customInput}`} />
                            </div>

                            <div className="form-group mb-5 mt-5">
                                <input value={ConfirmPassword} 
                                onChange={
                                    (e) => setConPass(e.target.value)
                                }type="text" placeholder="Confirm Password" className={`form-control customInput ${classes.customInput}`} />
                            </div>

                            <button type="submit" className="btn customInputButton">
                                <div onClick={registerUser} >Register</div>
                            </button>

                            <div className="text-center mt-4">
                                Already a member? <br></br> <Link  to="Login">Sign In</Link>
                            </div>

                        </CardOne> 
                    </div>
                    
                </div>

            </div>

        </div>
    );
}
export default Register;