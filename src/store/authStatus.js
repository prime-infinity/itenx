import { createContext, useState } from 'react';

const AuthStatusContext = createContext({
    auth:false,
});

export function AuthStatusProvider(props){
    const [authStatus, setAuth] = useState(AuthStatusContext._currentValue)

    function authenticateHandler(status){
        setAuth(status)
    }

    function unAuthenticateHandler(status){
        setAuth(status)
    }

    const context = {
        auth:authStatus,
        authenticate:authenticateHandler,
        unAuthenticate:unAuthenticateHandler,
    };

    return <AuthStatusContext.Provider  value={context}>
        {props.children}
    </AuthStatusContext.Provider>
}

export default AuthStatusContext;