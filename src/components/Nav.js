import {Link} from 'react-router-dom';
import CTAButton from './CTAButton';

function Nav() {
    return (
        <>
        <nav>
            <div>
                <Link to="/">
                    <img src={'https://i.ibb.co/q7cgn0B/logo.png'} alt="Delarosa logo"/></Link>
            </div> 
            <ul>
                <li>
                <h3>  LOCATIONS  </h3>
                </li>
                <h3> <li>
                    <a>MENU</a>
                </li> </h3>
                <h3> <li>
                <Link to="/about-me">ABOUT</Link>
                </li> </h3>
                <h3> <li>
                    <a>GIFT CARDS</a>
                </li> </h3>
                    <CTAButton theme='light' link="/reserve">RESERVE / WAITLIST</CTAButton>
            </ul>
        </nav>
        
        </>
    )
}

export default Nav;