function Navbar(){
    return(
        <nav className ="navb">
            <div className ="nav-logo">
             <div className="nav-logo-icon"></div> 
             <span className="nav-logo-text">Culture-Connect-India</span>  
            </div>

            <ul className ="nav-links">
                <li><a href="#explore">Explore States</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#homestay">Homestay</a></li>
                <li><a href="#marketplace">Marketplace</a> </li>                
            </ul>

            <div className="nav-cta">
                <button className="btn-outline">Share Culture</button>
                <button className="btn-primary">Sign In</button>
            </div>

        </nav>
    );
}
export default Navbar;