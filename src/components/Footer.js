import CTAButton from "./CTAButton";

function Footer() {
    return (
        <footer>
            <div>

            </div>
            <ul>
                <h3> <li>
                    <a href="../About.js"> PRESS
                   </a>
                </li> </h3>
                <h3> <li>
                    <a> CAREERS </a>
                </li> </h3>
                <h3> <li>
                    <a>CONTACT </a>
                </li></h3>
                <h3> <li>
                    <a>ACCESSIBILITY STATEMENT </a>
                </li> </h3>
                <li>
                    <CTAButton theme='dark'>PICK UP / DELIVERY</CTAButton>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;