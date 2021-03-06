import {Link} from 'react-router-dom'
// Link component allows us to add a link to a path or url
import "./css/NavigationLinks.css"
// This component returns links for the views together
function NavigationLinks(props) {
    if(props.forView === "Home") {
        return (
            <div className="homeNav"> 
                <span> <Link to="/Bank-of-React/login" style={{textDecoration:"none"}}>Log in</Link> </span>
                <span> <Link to="/Bank-of-React/userProfile" style={{textDecoration:"none"}}>User Profile</Link> </span> 
                <span> <Link to= "/Bank-of-React/debits" style={{textDecoration:"none"}}>Debits</Link> </span>
                <span> <Link to= "/Bank-of-React/credits" style={{textDecoration:"none"}}>Credits</Link>  </span>
            </div>
        ); 
    }  
    else if(props.forView === "Debit") {
        return (
            <div className="debitNav">
                <span> <Link to="/Bank-of-React/login" style={{textDecoration:"none"}}>Log in</Link> </span>
                <span> <Link to="/Bank-of-React/userProfile" style={{textDecoration:"none"}}>User Profile</Link> </span> 
                <span> <Link to= "/Bank-of-React/credits" style={{textDecoration:"none"}}>Credits</Link>  </span>
                <span> <Link to= "/Bank-of-React" style={{textDecoration:"none"}}>Home</Link> </span>
            </div>
        );
    }
    else if(props.forView === "Credit") {
        return (
            <div className="creditNav">
                <span> <Link to="/Bank-of-React/login" style={{textDecoration:"none"}}>Log in</Link> </span>
                <span> <Link to="/Bank-of-React/userProfile" style={{textDecoration:"none"}}>User Profile</Link> </span> 
                <span> <Link to= "/Bank-of-React/debits" style={{textDecoration:"none"}}>Debits</Link> </span>
                <span> <Link to= "/Bank-of-React" style={{textDecoration:"none"}}>Home</Link> </span>
            </div>
        );
    }
    else if(props.forView === "Login") {
        return (
        <div className="loginNav">
            <span> <Link to= "/Bank-of-React" style={{textDecoration:"none"}}> Back Home</Link> </span>
        </div>
        );
    }
    else if(props.forView === "UserProfile") {
        return (
            <div className="userProfileNav">
                <span> <Link to="/Bank-of-React/login" style={{textDecoration:"none"}}>Log in</Link> </span>
                <span> <Link to= "/Bank-of-React/debits" style={{textDecoration:"none"}}>Debits</Link> </span>
                <span> <Link to= "/Bank-of-React/credits" style={{textDecoration:"none"}}>Credits</Link>  </span>
                <span> <Link to= "/Bank-of-React" style={{textDecoration:"none"}}>Home</Link> </span>
            </div>
        );
    }
}

export default NavigationLinks;