import classes from './Auth.module.css'
import CardOne from '../../components/ui/CardOne'
import { Link } from 'react-router-dom';
import '../../index.css'

function Login(){
    return(

        <div className="row">
            
            <div className="col-12">

                <div className="row pt-5">
                    
                    <div className="col-11 col-md-5 col-lg-5 mx-auto mt-5">
                        
                        <CardOne>
                            <div className="form-group mb-5 mt-2">
                                <input type="text" placeholder="Email or Phone Number" className={`form-control customInput ${classes.customInput}`} />
                            </div>

                            <div className="form-group mb-5 mt-5">
                                <input type="text" placeholder="Password" className={`form-control customInput ${classes.customInput}`} />
                            </div>

                            <button type="submit" className="btn customInputButton">
                                <div>Sign in</div>
                            </button>

                            <div className="text-center mt-4">
                                Not yet a member <br></br> <Link  to="register">Create an account</Link>
                            </div>

                        </CardOne> 
                    </div>
                    
                </div>

            </div>

        </div>
    );
}
export default Login;