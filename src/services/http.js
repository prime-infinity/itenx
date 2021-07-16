import axios from 'axios';

class httpOperations{
    createUser(name,email,password){
        return axios.post("http://localhost:5000/users",{
            name:name,
            email:email,
            password:password
        })
    }
    login(name,password){
        return axios.get("http://localhost:5000/users",{
            params:{
                name:name,
                password:password
            }
        })
    }
    getStuffs(){
        return axios.get("http://localhost:5000/stuffs")
    }
}

export default new httpOperations();