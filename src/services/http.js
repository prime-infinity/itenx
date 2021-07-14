import axios from 'axios';

class httpOperations{
    createUser(name,email,password){
        return axios.post("http://localhost:5000/users",{
            name:name,
            email:email,
            password:password
        })
    }
}

export default new httpOperations();