import img from '../images/logo.png';

function Nav() {
    return (
        <nav> 
            <div>
                <img src={img} alt="Delarosa logo"/>
            </div>
            <ul>
                <li>
                   <a href="../About.js"> LOCATIONS </a>
                </li>
                <li>
                    <a>MENU</a>
                </li>
                <li>
                    <a>ABOUT</a>
                </li>
                <li>
                    <a>GIFT CARDS</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;