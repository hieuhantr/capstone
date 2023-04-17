import {Link} from 'react-router-dom';

function CTAButton({children, theme, link}) {
    return (
        <>
        <Link to={link}>
        {theme=='light' ?
        <button class='light'><h3> {children} </h3></button>:
        <button class='dark'><h3>{children}</h3></button>}
        </Link>
        </>
       )
}

export default CTAButton;