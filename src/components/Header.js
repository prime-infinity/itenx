
import { Link,useHistory } from 'react-router-dom';

function Header(){

    const history = useHistory()

    function goBack(){
        console.log("thi is back")
        history.go(-1)
    }
    function goFoward(){
        console.log("thi is foward")
        history.go(1)
    }

    function goHomeProgramatically(){
        history.push('/about')
    }

    return(
        <div>
            <ul>
                <li>
                    <Link  to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/about" > About </Link>
                </li>
                <li>
                    <Link to="/list" > list </Link>
                </li>

                <button onClick={goBack}>go back</button>
                <button onClick={goFoward}>go foward</button>
                <button onClick={goHomeProgramatically}>go home programatically</button>

            </ul>
        </div>
    );
   
}



export default Header;