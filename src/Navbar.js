import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <nav className = "NavBar">             
            <div>
            <Link to ="/chips">
                Chips  
            </Link>
            </div>
            <div>
            <Link to ="/cookies">
                Cookies  
            </Link>
            </div>
            <div>
            <Link to ="/yogurt">
                Yogurt  
            </Link>
            </div>
           
            

        </nav>
    );
}

export default NavBar;