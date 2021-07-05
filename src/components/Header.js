
import { Link } from 'react-router-dom' 

function Header(){

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
            </ul>
        </div>
    );
   
}



export default Header;