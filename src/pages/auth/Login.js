import classes from './Auth.module.css'


function Login(){
    return(

        <div className="row">
            
            <div className="col-12">

                <div className="row pt-5">

                    <div className="col-10 col-md-4 col-lg-4 mx-auto">

                        <div className="form-group mb-4">
                            <input type="text" placeholder="Email or Phone Number" className={`form-control ${classes.customInput}`} />
                        </div>

                        <div className="form-group mb-4">
                            <input type="text" placeholder="Password" className={'form-control ' + classes.customInput} />
                        </div>
                    
                    </div>
                    
                </div>

            </div>

        </div>
    );
}
export default Login;