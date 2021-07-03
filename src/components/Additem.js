import { useState } from 'react'

function Additem({onAdd}){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hobby, setHobby] = useState('');
    const [state, setState] = useState(false);

    var submitted = (e) => {
        e.preventDefault()

        onAdd({
            name,
            age,
            hobby,
            state,
        })

        setName('')
        setAge('')
        setHobby('')
    }

    return(
        <form onSubmit={submitted}>
            
            <span>name</span>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)} /> <br/>

            <span>age</span>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /> <br/>

            <span>hobby</span>
            <input type="text" value={hobby} onChange={(e) => setHobby(e.target.value)} /> <br/>

            <button>submit</button>

        </form>
    );

}



export default Additem;