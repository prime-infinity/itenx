import { useState, useEffect } from 'react'
import axios from 'axios';

const Lists = () =>{

    const [lists, setLists] = useState([])

    useEffect(() => {

        async function fetchList(){

            try {
                const data = await axios.get('http://localhost:5000/list')
                console.log(data.data)
                setLists(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchList()

    }, [])

    return(
        <div> 

            <ul>

                {lists.map((list) => (
                    <li key={list.id}>
                        <div>
                            {list.name} 
                            {list.discription} 
                        </div>
                    </li>
                ))}

            </ul>
            
        </div>
    );
}

export default Lists;